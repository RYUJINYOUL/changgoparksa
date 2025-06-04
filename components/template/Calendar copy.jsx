'use client';

import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import app from '@/firebase';
import { ChevronLeft, ChevronRight, Trash } from 'lucide-react';

dayjs.locale('ko');
const db = getFirestore(app);

// 관리자 여부 (실제 앱에서는 Firebase Auth 연동 필요)
const userRole = '관리자'; // 또는 '사용자'

const CalendarWithEvents = () => {
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', time: '' });
  const [isMobile, setIsMobile] = useState(false);

  const predefinedTimes = [
    '교육 없음',
    '오전 9:00~13:00 (4시간)',
    '오후 13:00~17:00 (4시간)',
  ];

  const days = ['일', '월', '화', '수', '목', '금', '토'];

  const startOfMonth = currentDate.startOf('month');
  const endOfMonth = currentDate.endOf('month');
  const startDate = startOfMonth.startOf('week');
  const endDate = endOfMonth.endOf('week');

  const dates = [];
  let current = startDate;

  while (current.isBefore(endDate) || current.isSame(endDate)) {
    dates.push(current);
    current = current.add(1, 'day');
  }

  const handlePrevMonth = () => setCurrentDate(prev => prev.subtract(1, 'month'));
  const handleNextMonth = () => setCurrentDate(prev => prev.add(1, 'month'));

  const fetchEventsForMonth = () => {
    const start = startOfMonth.format('YYYY-MM-DD');
    const end = endOfMonth.format('YYYY-MM-DD');
    
    const q = query(
      collection(db, 'events'),
      where('date', '>=', start),
      where('date', '<=', end)
    );
    return onSnapshot(q, snapshot => {
      const list = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(list);
    });
  };

  useEffect(() => {
    const unsubscribe = fetchEventsForMonth();
    return () => unsubscribe();
  }, [currentDate]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDateClick = async (date) => {
    setSelectedDate(date);
    const dateStr = date.format('YYYY-MM-DD');
    const dayEvents = events.filter(e => e.date === dateStr);
    alert(
      `${dateStr} 일정:\n` +
        (dayEvents.length > 0
          ? dayEvents.map(e => `${e.time} - ${e.title}`).join('\n')
          : '일정 없음')
    );
  };

  const handleAddEvent = async () => {
    if (!newEvent.title || !newEvent.time || userRole !== '관리자') return;
    await addDoc(collection(db, 'events'), {
      date: selectedDate.format('YYYY-MM-DD'),
      title: newEvent.title,
      time: newEvent.time,
    });
    setNewEvent({ title: '', time: '' });
  };

  const handleDelete = async (id) => {
    if (userRole !== '관리자') return;
    await deleteDoc(doc(db, 'events', id));
  };

  return (
    <div className="flex flex-col items-center w-full space-y-10 mt-10 px-4">
      {/* Month Header */}
      <div className="flex items-center justify-between md:w-[300px] w-full">
        <button onClick={handlePrevMonth}><ChevronLeft /></button>
        <h2 className="text-xl font-bold">{currentDate.format('YYYY년 MM월')}</h2>
        <button onClick={handleNextMonth}><ChevronRight /></button>
      </div>

      {/* Calendar */}
      <div className="w-full overflow-x-auto">
        <div className="mx-auto max-w-[1100px] w-full">
          <table className="table-fixed w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                {days.map((day, idx) => (
                  <th
                    key={day}
                    className={`p-2 border-b font-semibold ${
                      idx === 0 ? 'text-red-500' : idx === 6 ? 'text-blue-500' : ''
                    }`}
                  >
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: Math.ceil(dates.length / 7) }).map((_, weekIdx) => (
                <tr key={weekIdx}>
                  {dates.slice(weekIdx * 7, weekIdx * 7 + 7).map((date, idx) => {
                    const dateStr = date.format('YYYY-MM-DD');
                    const isCurrentMonth = date.month() === currentDate.month();
                    const isToday = date.isSame(dayjs(), 'day');
                    const isSelected = date.isSame(selectedDate, 'day');
                    const dayEvents = events.filter(e => e.date === dateStr);

                    return (
                      <td
                        key={dateStr}
                        onClick={() => handleDateClick(date)}
                        className={`align-top p-2 h-24 border cursor-pointer
                          ${isCurrentMonth ? 'text-black' : 'text-gray-400'}
                          ${isToday ? 'bg-blue-100' : ''}
                          ${isSelected ? 'bg-blue-300' : ''}
                          ${idx === 0 ? 'text-red-500' : idx === 6 ? 'text-blue-500' : ''}
                        `}
                      >
                        <div className="text-sm font-medium">{date.date()}</div>
                        <div className="mt-1 text-xs space-y-1">
                          {dayEvents.map((event, i) => (
                            <div
                              key={i}
                              className={event.time.includes('교육 없음') ? 'text-gray-500' : 'text-blue-600'}
                            >
                              {event.time}
                            </div>
                          ))}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Event List & Add Form */}
      <div className="w-full max-w-[1100px] mt-10 border-t pt-4">
        <h3 className="text-lg font-semibold mb-2">
          {selectedDate.format('YYYY년 MM월 DD일')} 일정
        </h3>

        <ul className="space-y-2 mb-6">
          {events.filter(e => e.date === selectedDate.format('YYYY-MM-DD')).length === 0 && (
            <p className="text-gray-500 text-sm">일정이 없습니다.</p>
          )}
          {events
            .filter(e => e.date === selectedDate.format('YYYY-MM-DD'))
            .map(event => (
              <li key={event.id} className="flex justify-between items-center border p-2 rounded">
                <span>🕒 {event.time} - {event.title}</span>
                {userRole === '관리자' && (
                  <button onClick={() => handleDelete(event.id)}>
                    <Trash className="w-4 h-4 text-red-500" />
                  </button>
                )}
              </li>
            ))}
        </ul>

        {userRole === '관리자' && (
          <div className="space-y-2">
            <input
              type="text"
              placeholder="일정 제목"
              value={newEvent.title}
              onChange={(e) => setNewEvent(prev => ({ ...prev, title: e.target.value }))}
              className="w-full p-2 border rounded"
            />
            <select
              value={newEvent.time}
              onChange={(e) => setNewEvent(prev => ({ ...prev, time: e.target.value }))}
              className="w-full p-2 border rounded"
            >
              <option value="">시간 선택</option>
              {predefinedTimes.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
            <button
              onClick={handleAddEvent}
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              일정 추가
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarWithEvents;

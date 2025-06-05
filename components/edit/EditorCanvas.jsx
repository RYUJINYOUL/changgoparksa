'use client';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { ComponentLibrary } from '@/components/edit/ComponentLibrary';

export default function EditorCanvas() {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    const load = async () => {
      const docRef = doc(collection(db, 'pages'), 'demo-page');
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        setComponents(snapshot.data().components || []);
      }
    };
    load();
  }, []);


  useEffect(() => {
    const save = async () => {
      const docRef = doc(collection(db, 'pages'), 'demo-page');
      await setDoc(docRef, { components });
    };
    if (components.length > 0) save();
  }, [components]);


  const handleDropNew = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('component');
    setComponents(prev => [...prev, type]);
  };


  const handleDragStart = (e, idx) => {
    e.dataTransfer.setData('dragIndex', idx);
    e.dataTransfer.setData('component', components[idx]);
  };


  const handleDropReorder = (e, targetIdx) => {
    e.preventDefault();
    const fromIdx = parseInt(e.dataTransfer.getData('dragIndex'), 10);
    const component = e.dataTransfer.getData('component');

    if (isNaN(fromIdx)) return;

    setComponents(prev => {
      const updated = [...prev];
      updated.splice(fromIdx, 1); // remove from old
      updated.splice(targetIdx, 0, component); // insert into new
      return updated;
    });
  };


  const handleDeleteDrop = (e) => {
    e.preventDefault();
    const fromIdx = parseInt(e.dataTransfer.getData('dragIndex'), 10);
    if (!isNaN(fromIdx)) {
      setComponents(prev => {
        const updated = [...prev];
        updated.splice(fromIdx, 1);
        return updated;
      });
    }
  };

  
  return (
    <div className="space-y-2">

      <div className="border border-red-500 p-2 text-center text-red-600 rounded"
           onDragOver={e => e.preventDefault()}
           onDrop={handleDeleteDrop}>
        🗑️ 여기에 드래그하면 삭제됩니다
      </div>

      {components.map((type, idx) => (
        <div
          key={idx}
          draggable
          onDragStart={e => handleDragStart(e, idx)}
          onDragOver={e => e.preventDefault()}
          onDrop={e => handleDropReorder(e, idx)}
          className="p-2 bg-gray-200 rounded cursor-grab"
        >
          {type}
        </div>
      ))}

      <div
        onDragOver={e => e.preventDefault()}
        onDrop={handleDropNew}
        className="min-h-[400px] border p-4 bg-white rounded"
      >
        <h2 className="font-bold mb-2">캔버스</h2>
        {components.map((type, idx) => {
          const Comp = ComponentLibrary[type];
          return Comp ? <Comp key={idx} /> : null;
        })}
      </div>
    </div>
  );
}

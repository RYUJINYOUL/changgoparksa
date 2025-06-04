'use client';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { ComponentLibrary } from '@/components/edit/ComponentLibrary';

export default function EditorCanvas() {
  const [components, setComponents] = useState<string[]>([]);
  const [pageName, setPageName] = useState('demo-page');

  // 페이지 불러오기
  useEffect(() => {
    const load = async () => {
      const docRef = doc(collection(db, 'pages'), pageName);
      const snapshot = await getDoc(docRef);
      if (snapshot.exists()) {
        setComponents(snapshot.data().components || []);
      } else {
        setComponents([]);
      }
    };
    load();
  }, [pageName]);

  // 저장
  const save = async () => {
    const docRef = doc(collection(db, 'pages'), pageName);
    await setDoc(docRef, { components });
    alert(`"${pageName}" 페이지가 저장되었습니다.`);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('component');
    setComponents(prev => [...prev, type]);
  };

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <input
          value={pageName}
          onChange={e => setPageName(e.target.value)}
          className="border px-2 py-1 rounded"
          placeholder="페이지 이름"
        />
        <button onClick={save} className="bg-green-500 text-white px-4 py-1 rounded">
          저장
        </button>
      </div>

      <div
        onDragOver={e => e.preventDefault()}
        onDrop={handleDrop}
        className="min-h-[400px] border p-4 bg-white rounded"
      >
   
        {components.map((type, idx) => {
          const Comp = ComponentLibrary[type as keyof typeof ComponentLibrary];
          return Comp ? <Comp key={idx} /> : null;
        })}
      </div>
    </div>
  );
}
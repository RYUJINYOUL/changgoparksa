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

  const handleDrop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData('component');
    setComponents(prev => [...prev, type]);
  };

  return (
    <div
      onDragOver={e => e.preventDefault()}
      onDrop={handleDrop}
      className="min-h-[400px] border p-4 bg-white rounded"
    >
      <h2 className="font-bold mb-2">📄 캔버스</h2>
     {components.map((type, idx) => {
        const Comp = ComponentLibrary[type];
        return Comp ? <Comp key={idx} /> : null;
     })}

    </div>
  );
}
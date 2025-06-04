import ComponentPalette from '@/components/edit/ComponentPalette';
import EditorCanvas from '@/components/edit/EditorCanvas';

export default function EditPage() {
  return (
    <div className="p-6 flex gap-6">
      <div className="w-1/4">
        <h1 className="text-xl font-bold mb-4">🧩 컴포넌트</h1>
        <ComponentPalette />
      </div>
      <div className="w-3/4">
        <EditorCanvas />
      </div>
    </div>
  );
}
// components/Preview.tsx

import React from 'react';
import { useEditorStore } from '../store/editor';
import { PreviewMode } from '../types';
import { Monitor, Tablet, Smartphone } from 'lucide-react';

interface PreviewProps {
  mode: PreviewMode;
  setMode: (mode: PreviewMode) => void;
}

const Preview: React.FC<PreviewProps> = ({ mode, setMode }) => {
  const { blocks } = useEditorStore();

  const containerClasses = {
    mobile: 'w-[320px]',
    tablet: 'w-[768px]',
    desktop: 'w-full',
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-4 px-4">
        <h2 className="text-lg font-semibold">Preview</h2>
        <div className="flex space-x-2">
          <button
            className={`p-2 rounded ${mode === 'mobile' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
            onClick={() => setMode('mobile')}
          >
            <Smartphone className="w-4 h-4" />
          </button>
          <button
            className={`p-2 rounded ${mode === 'tablet' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
            onClick={() => setMode('tablet')}
          >
            <Tablet className="w-4 h-4" />
          </button>
          <button
            className={`p-2 rounded ${mode === 'desktop' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
            onClick={() => setMode('desktop')}
          >
            <Monitor className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className={`mx-auto ${containerClasses[mode]} transition-all duration-300`}>
        <div className="bg-white rounded-lg shadow-sm p-6">
          {blocks.map((block) => (
            <div
              key={block.id}
              className={`mb-4 ${block.format?.underline ? 'underline' : ''}`}
            >
              {block.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preview;
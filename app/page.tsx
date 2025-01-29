// app/page.tsx

'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Toolbar from '@/components/Toolbar';
import TextEditor from '@/components/TextEditor';
import Preview from '@/components/Preview';
import type { PreviewMode } from '@/types';

export default function Home() {
  const [previewMode, setPreviewMode] = useState<PreviewMode>('desktop');

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Toolbar previewMode={previewMode} setPreviewMode={setPreviewMode} />
        
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-4xl mx-auto py-8">
              <TextEditor />
            </div>
          </div>
          
          <div className="w-[400px] border-l border-gray-200 bg-white overflow-y-auto">
            <Preview mode={previewMode} setMode={setPreviewMode} />
          </div>
        </div>
      </div>
    </div>
  );
}
// components/Toolbar.tsx

import { FC } from 'react';
import { 
  Check,
  Smartphone,
  Tablet,
  Monitor
} from 'lucide-react';
import { PreviewMode } from '@/types';

interface ToolbarProps {
  previewMode: PreviewMode;
  setPreviewMode: (mode: PreviewMode) => void;
}

const Toolbar: FC<ToolbarProps> = ({ previewMode, setPreviewMode }) => {
  return (
    <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200 bg-white">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <button className="p-2 hover:bg-gray-100 rounded">
            <Check className="w-4 h-4" />
          </button>
          <span className="text-sm text-gray-600">Check Score</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <button
          className={`p-2 rounded ${previewMode === 'mobile' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
          onClick={() => setPreviewMode('mobile')}
          aria-label="Mobile preview"
        >
          <Smartphone className="w-4 h-4" />
        </button>
        <button
          className={`p-2 rounded ${previewMode === 'tablet' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
          onClick={() => setPreviewMode('tablet')}
          aria-label="Tablet preview"
        >
          <Tablet className="w-4 h-4" />
        </button>
        <button
          className={`p-2 rounded ${previewMode === 'desktop' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
          onClick={() => setPreviewMode('desktop')}
          aria-label="Desktop preview"
        >
          <Monitor className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
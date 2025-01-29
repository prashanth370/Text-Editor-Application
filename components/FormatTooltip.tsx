// components/FormatTooltip.tsx

import { FC } from 'react';
import { Bold, Italic, Underline, AlignCenter, Link, X } from 'lucide-react';

interface FormatTooltipProps {
  position: { x: number; y: number };
  onUnderline: () => void;
  onClose: () => void;
}

const FormatTooltip: FC<FormatTooltipProps> = ({ position, onUnderline, onClose }) => {
  return (
    <div
      className="fixed bg-gray-900 text-white shadow-lg rounded-md py-1.5 px-1 flex items-center space-x-0.5 transform -translate-x-1/2 z-50"
      style={{
        left: position.x,
        top: position.y,
      }}
    >
      <button className="p-1.5 hover:bg-gray-700 rounded">
        <Bold className="w-4 h-4" />
      </button>
      <button className="p-1.5 hover:bg-gray-700 rounded">
        <Italic className="w-4 h-4" />
      </button>
      <button
        className="p-1.5 hover:bg-gray-700 rounded"
        onClick={onUnderline}
      >
        <Underline className="w-4 h-4" />
      </button>
      <button className="p-1.5 hover:bg-gray-700 rounded">
        <AlignCenter className="w-4 h-4" />
      </button>
      <button className="p-1.5 hover:bg-gray-700 rounded">
        <Link className="w-4 h-4" />
      </button>
      <div className="w-px h-4 bg-gray-700 mx-1" />
      <button
        className="p-1.5 hover:bg-gray-700 rounded"
        onClick={onClose}
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default FormatTooltip;
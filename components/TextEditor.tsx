// components/TextEditor.tsx

import React, { useCallback, useRef, useState } from 'react';
import { Plus } from 'lucide-react';
import FormatTooltip from './FormatTooltip';
import { useEditorStore } from '@/store/editor';

const TextEditor: React.FC = () => {
  const { blocks, selectedText, setBlocks, setSelectedText } = useEditorStore();
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number } | null>(null);
  const editorRef = useRef<HTMLDivElement>(null);

  const handleTextSelection = useCallback(() => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed) {
      setTooltipPosition(null);
      setSelectedText(null);
      return;
    }

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 10,
    });

    const blockElement = range.startContainer.parentElement?.closest('[data-block-id]');
    const blockId = blockElement?.getAttribute('data-block-id') || null;

    setSelectedText({
      start: range.startOffset,
      end: range.endOffset,
      blockId,
    });
  }, [setSelectedText]);

  const handleUnderline = useCallback(() => {
    if (!selectedText?.blockId) return;

    setBlocks(
      blocks.map((block) => {
        if (block.id === selectedText.blockId) {
          return {
            ...block,
            format: {
              ...block.format,
              underline: !block.format?.underline,
            },
          };
        }
        return block;
      })
    );
  }, [blocks, selectedText, setBlocks]);

  const addNewBlock = useCallback((index: number) => {
    const newBlocks = [...blocks];
    newBlocks.splice(index + 1, 0, {
      id: Math.random().toString(36).substr(2, 9),
      type: 'paragraph',
      content: '',
      format: {},
    });
    setBlocks(newBlocks);
  }, [blocks, setBlocks]);

  return (
    <div className="flex-1 bg-white rounded-lg shadow-sm">
      <div
        ref={editorRef}
        className="prose max-w-none p-6"
        onMouseUp={handleTextSelection}
        onKeyUp={handleTextSelection}
      >
        {blocks.map((block, index) => (
          <div key={block.id} className="relative group" data-block-id={block.id}>
            <div
              contentEditable
              suppressContentEditableWarning
              className={`outline-none min-h-[1.5em] ${
                block.format?.underline ? 'underline' : ''
              }`}
              onBlur={(e) => {
                const newBlocks = [...blocks];
                newBlocks[index].content = e.target.textContent || '';
                setBlocks(newBlocks);
              }}
            >
              {block.content}
            </div>
            <button
              className="absolute -left-10 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded-full hover:bg-gray-100"
              onClick={() => addNewBlock(index)}
            >
              <Plus className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        ))}
      </div>

      {tooltipPosition && (
        <FormatTooltip
          position={tooltipPosition}
          onUnderline={handleUnderline}
          onClose={() => setTooltipPosition(null)}
        />
      )}
    </div>
  );
};

export default TextEditor;
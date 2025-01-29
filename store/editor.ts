// store/editor.ts

import { create } from 'zustand';
import { EditorState } from '../types';

export const useEditorStore = create<EditorState>((set) => ({
  blocks: [
    {
      id: '1',
      type: 'paragraph',
      content: 'Start typing here...',
      format: {},
    },
  ],
  selectedText: null,
  setBlocks: (blocks) => set({ blocks }),
  setSelectedText: (selection) => set({ selectedText: selection }),
}));
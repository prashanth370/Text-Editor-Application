// types/index.ts

export type TextBlock = {
    id: string;
    type: 'paragraph' | 'heading1' | 'heading2';
    content: string;
    format?: {
      underline?: boolean;
      bold?: boolean;
      italic?: boolean;
    };
  };
  
  export type PreviewMode = 'mobile' | 'tablet' | 'desktop';
  
  export interface EditorState {
    blocks: TextBlock[];
    selectedText: {
      start: number;
      end: number;
      blockId: string | null;
    } | null;
    setBlocks: (blocks: TextBlock[]) => void;
    setSelectedText: (selection: EditorState['selectedText']) => void;
  }
'use client'

import { useEdgeStore } from '@/lib/edgestore';
import '@blocknote/core/style.css';
import "@blocknote/mantine/style.css";
import { BlockNoteEditor, PartialBlock } from '@blocknote/core';
import { useCreateBlockNote } from '@blocknote/react'
import { BlockNoteView } from "@blocknote/mantine";
import { useTheme } from 'next-themes';

export interface IEditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

export default function Editor ({
  onChange,
  initialContent,
  editable
}: IEditorProps) {
  const {resolvedTheme} = useTheme();
  const {edgestore} = useEdgeStore();
  
  const handleUpload = async (file:File) => {
    const response = await edgestore.publicFiles.upload({file});
    return response.url;
  }

  const editor: BlockNoteEditor = useCreateBlockNote({
    initialContent: initialContent 
      ? JSON.parse(initialContent) as PartialBlock[] 
      : undefined,
    uploadFile: handleUpload
  });
  
  return (
    <BlockNoteView
      editor={editor}
      editable={editable}
      onChange={()=> onChange(JSON.stringify(editor.topLevelBlocks,null,2))}
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
    />
  );
}

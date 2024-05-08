'use client'

import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {Bold, Strikethrough, Italic, List, ListOrdered, Heading2, Quote, Undo, Redo, Code, Underline as UnderlineTipTap} from 'lucide-react'
import Underline from '@tiptap/extension-underline'
import React from 'react'

type TextEditorProps = {
    onChange: (newContent: string) => void
    content: string
}

type ToolbarProps = {
    editor: Editor | null;
    content: string
}

const Toolbar:React.FC<ToolbarProps> = ({editor, content}) => {
    if (!editor) return null

    return <div className='px-4 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start gap-5 w-full flex-wrap border border-[#ced4da]'>
        <div className='flex jutify-start items-center gap-3 w-full lg:w-10/12 flex-wrap'>
            <button
                onClick={e => {
                    e.preventDefault()
                    editor.chain().focus().toggleBold().run();
                }}
                className={
                    editor.isActive("bold")
                    ? "bg-black text-white p-1 roundedlg"
                    : "text-black p-1"
                }
            >
                <Bold className='w-4 h-4'/>
            </button>
            <button
                onClick={e => {
                    e.preventDefault()
                    editor.chain().focus().toggleItalic().run();
                }}
                className={
                    editor.isActive("italic")
                    ? "bg-black text-white p-1 roundedlg"
                    : "text-black p-1"
                }
            >
                <Italic className='w-4 h-4'/>
            </button>
            <button
                onClick={e => {
                    e.preventDefault()
                    editor.chain().focus().toggleUnderline().run();
                }}
                className={
                    editor.isActive("underline")
                    ? "bg-black text-white p-1 roundedlg"
                    : "text-black p-1"
                }
            >
                <UnderlineTipTap className='w-4 h-4'/>
            </button>
            <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          className={
            editor.isActive("strike")
              ? "bg-black text-white p-1 roundedlg"
                    : "text-black p-1"
          }
        >
          <Strikethrough className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          className={
            editor.isActive("heading", { level: 2 })
              ? "bg-black text-white p-1 roundedlg"
                    : "text-black p-1"
          }
        >
          <Heading2 className="w-5 h-5" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          className={
            editor.isActive("bulletList")
              ? "bg-black text-white p-1 roundedlg"
                    : "text-black p-1"
          }
        >
          <List className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleOrderedList().run();
          }}
          className={
            editor.isActive("orderedList")
              ? "bg-black text-white p-1 roundedlg"
                    : "text-black p-1"
          }
        >
          <ListOrdered className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBlockquote().run();
          }}
          className={
            editor.isActive("blockquote")
              ? "bg-black text-white p-1 roundedlg"
                    : "text-black p-1"
          }
        >
          <Quote className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().setCode().run();
          }}
          className={
            editor.isActive("code")
              ? "bg-black text-white p-1 roundedlg"
                    : "text-black p-1"
          }
        >
          <Code className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
          className={
            editor.isActive("undo")
            ? "bg-black text-white p-1 roundedlg"
            : "text-black p-1"
          }
        >
          <Undo className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
          className={
            editor.isActive("redo")
            ? "bg-black text-white p-1 roundedlg"
            : "text-black p-1"
          }
        >
          <Redo className="w-5 h-5" />
        </button>
        </div>
    </div>
}

export const TextEditor:React.FC<TextEditorProps> = ({onChange, content}) => {

  const handleChange = (newContent: string) => {
    onChange(newContent)
  }

  const editor = useEditor({
    extensions: [
      StarterKit, Underline
    ],
    editorProps: {
        attributes: {
            class: "flex min-h-[200px] mb-3 flex-col px-4 py-3 justify-start border-b border-r border-l border-[#ced4da] items-start w-full gap-3 font-medium text-[16px] pt-4 rounded-bl-md outline-none"
        }
    },
    onUpdate: ({editor}) => {
        handleChange(editor.getHTML())
    }
  })

  return (
    <div className='w-full'>
        <Toolbar editor={editor} content={content}/>
        <EditorContent editor={editor} style={{whiteSpace: "pre-line"}}/>
    </div>
  )
}
'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Underline from '@tiptap/extension-underline';
import TextStyle from '@tiptap/extension-text-style';
import { FontFamily } from '@tiptap/extension-font-family';
import { FontSize } from './FontSize'; // Custom extension for font size
import TextAlign from '@tiptap/extension-text-align';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import { addImageToSupabase } from '@/actions/supabaseImage';


// Icons

import { CiTextAlignCenter, CiTextAlignJustify, CiTextAlignRight } from "react-icons/ci";
import { CiTextAlignLeft } from "react-icons/ci";
import { GoListUnordered } from "react-icons/go";
import { GoListOrdered } from "react-icons/go";
import { FaRegImage } from 'react-icons/fa';

const RichTextEditor = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Underline,
      TextStyle,
      FontFamily.configure({
        types: ['textStyle']
      }),
      FontSize,
      Image.configure({
        inline: true,
        allowBase64: false,
        HTMLAttributes: {
          class: 'rounded-lg',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph', 'image'],
        alignments: ['left', 'center', 'right', 'justify'],
        defaultAlignment: 'left',
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: 'list-disc pl-6',
        },
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: 'list-decimal pl-6',
        },
      }),
    ],
    immediatelyRender: false,
    content: content || `
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    `,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  // Add image to Supabase and insert into editor
  const addImage = async (file) => {
 
    const publicURL = await addImageToSupabase(file)

    // Insert image into editor
    editor.chain().focus().setImage({ src: publicURL.publicUrl }).run();
  };

  if (!editor) {
    return null;
  }

  return (
    <div className="border rounded-lg p-4 bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 mb-4">
        
        {/* Font Selection */}
      <select
          onChange={(e) => {
            editor.chain().focus().setFontFamily(e.target.value).run();
          }}
          className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200"
        >
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Verdana">Verdana</option>
          <option value="Comic Sans MS">Comic Sans MS</option>
          <option value="Josefin-Sans">Josefin Sans</option>
          <option value="Lora">Lora</option>
        </select>
        
        {/* Bold, Italic, Underline */}
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-3 py-2 rounded ${
            editor.isActive('bold') ? 'bg-blue-100' : 'bg-gray-100'
          } hover:bg-gray-200`}
        >
          <strong>B</strong>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-3 py-2 rounded ${
            editor.isActive('italic') ? 'bg-blue-100' : 'bg-gray-100'
          } hover:bg-gray-200`}
        >
          <em>I</em>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`px-3 py-2 rounded ${
            editor.isActive('underline') ? 'bg-blue-100' : 'bg-gray-100'
          } hover:bg-gray-200`}
        >
          <u>U</u>
        </button>

        {/* Headings */}
        <select
          onChange={(e) => {
            const level = parseInt(e.target.value);
            if (level === 0) {
              editor.chain().focus().setParagraph().run();
            } else {
              editor.chain().focus().toggleHeading({ level }).run();
            }
          }}
          className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200"
        >
          <option value="0">Paragraph</option>
          <option value="1">Heading 1</option>
          <option value="2">Heading 2</option>
          <option value="3">Heading 3</option>
        </select>

        {/* Font Size */}
        <select
          onChange={(e) => {
            editor.chain().focus().setFontSize(e.target.value).run();
          }}
          className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200"
        >
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="16px">16px</option>
          <option value="18px">18px</option>
          <option value="24px">24px</option>
          <option value="26px">26px</option>
          <option value="28px">28px</option>
          <option value="32px">32px</option>
          <option value="48px">48px</option>
          <option value="72px">72px</option>
        </select>

        {/* Text Alignment */}
        <button
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={`px-3 py-2 rounded ${
            editor.isActive({ textAlign: 'left' }) ? 'bg-blue-100' : 'bg-gray-100'
          } hover:bg-gray-200`}
        >
          <span className="text-left"><CiTextAlignLeft size={20} /></span>
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={`px-3 py-2 rounded ${
            editor.isActive({ textAlign: 'center' }) ? 'bg-blue-100' : 'bg-gray-100'
          } hover:bg-gray-200`}
        >
          <span className="text-center"><CiTextAlignCenter size={20}/></span>
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={`px-3 py-2 rounded ${
            editor.isActive({ textAlign: 'right' }) ? 'bg-blue-100' : 'bg-gray-100'
          } hover:bg-gray-200`}
        >
          <span className="text-right"><CiTextAlignRight size={20} /></span>
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={`px-3 py-2 rounded ${
            editor.isActive({ textAlign: 'justify' }) ? 'bg-blue-100' : 'bg-gray-100'
          } hover:bg-gray-200`}
        >
          <span className="text-justify"><CiTextAlignJustify size={20} /></span>
        </button>

        {/* Lists */}
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-3 py-2 rounded ${
            editor.isActive('bulletList') ? 'bg-blue-100' : 'bg-gray-100'
          } hover:bg-gray-200`}
        >
          <span><GoListUnordered size={20}/></span>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-3 py-2 rounded ${
            editor.isActive('orderedList') ? 'bg-blue-100' : 'bg-gray-100'
          } hover:bg-gray-200`}
        >
          <span><GoListOrdered size={20} /></span>
        </button>

        {/* Image Upload */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => addImage(e.target.files[0])}
          className="hidden"
          id="image-upload"
        />
        <label
          htmlFor="image-upload"
          className="px-4 py-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200"
        >
          <FaRegImage size={20}/>
        </label>
      </div>

      {/* Editor Content */}
      <EditorContent
        editor={editor}
        // className="prose max-w-none min-h-[400px] h-full p-4 focus:outline-none outline-none focus-visible:outline-none border-none "
      />
    </div>
  );
};

export default RichTextEditor;
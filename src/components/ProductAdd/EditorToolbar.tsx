import { useState } from 'react';
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  Code,
  MoreHorizontal,
  ChevronDown,
  List,
  ListOrdered,
  Sparkles
} from 'lucide-react';

export default function ShopifyEditor() {
  const [content, setContent] = useState('');
  const [mode, setMode] = useState('visual'); // visual or html

  return (

      <div className="bg-white">
        {/* Toolbar */}
        <div className="border-b border-gray-200 bg-white px-2 py-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Magic Button */}
              <div className="pr-2 border-r border-gray-200 mr-2">
                <button 
                  className="inline-flex items-center rounded p-1 hover:bg-gray-100"
                  aria-label="Generate text"
                >
                  <Sparkles size={16} className="mr-1" />
                  <ChevronDown size={12} />
                </button>
              </div>

              {/* Format dropdown */}
              <div className="pr-2">
                <button 
                  className="inline-flex items-center rounded p-1 hover:bg-gray-100"
                  aria-label="Format options"
                >
                  <span className="mr-1 text-sm">Paragraph</span>
                  <ChevronDown size={12} />
                </button>
              </div>

              {/* Text formatting */}
              <div className="flex items-center space-x-1 border-r border-gray-200 pr-2">
                <button className="p-1 rounded hover:bg-gray-100" aria-label="Bold">
                  <Bold size={16} />
                </button>
                <button className="p-1 rounded hover:bg-gray-100" aria-label="Italic">
                  <Italic size={16} />
                </button>
                <button className="p-1 rounded hover:bg-gray-100" aria-label="Underline">
                  <Underline size={16} />
                </button>
                <button className="inline-flex items-center p-1 rounded hover:bg-gray-100" aria-label="Text Color">
                  <span className="text-sm font-bold mr-1">A</span>
                  <ChevronDown size={12} />
                </button>
              </div>

              {/* Alignment */}
              <div className="flex items-center border-r border-gray-200 pr-2">
                <button className="inline-flex items-center p-1 rounded hover:bg-gray-100" aria-label="Alignment">
                  <AlignLeft size={16} className="mr-1" />
                  <ChevronDown size={12} />
                </button>
              </div>

              {/* More options dropdown */}
              <button className="p-1 rounded hover:bg-gray-100" aria-label="More controls">
                <MoreHorizontal size={16} />
              </button>
            </div>

            {/* HTML view toggle */}
            <button 
              className="p-1 rounded hover:bg-gray-100" 
              aria-label="Show HTML Code"
              onClick={() => setMode(mode === 'visual' ? 'html' : 'visual')}
            >
              <Code size={16} />
            </button>
          </div>
        </div>

        {/* Editor content area */}
        {mode === 'visual' ? (
          <div 
            className="p-4 min-h-32 focus:outline-none" 
            contentEditable={true}
            suppressContentEditableWarning={true}
            id="product-description"
            aria-label="Rich Text Area"
            onInput={(e) => setContent((e.target as HTMLDivElement).innerHTML)}
          >
            {content}
          </div>
        ) : (
          <textarea
            id="product-description-html"
            className="p-4 w-full min-h-32 font-mono text-sm"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        )}
      </div>
   
  );
}
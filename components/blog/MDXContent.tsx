import React from 'react';

interface MDXContentProps {
  content: string;
}

export default function MDXContent({ content }: MDXContentProps) {
  // Parse Markdown and render with beautiful styling
  const renderMarkdown = (text: string) => {
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let currentList: string[] = [];
    let currentNumberedList: string[] = [];
    let inCodeBlock = false;
    
    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="my-6 space-y-3 pl-6">
            {currentList.map((item, idx) => {
              // Handle inline bold text
              const parts = item.split('**');
              return (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-sage mt-1.5 text-xl">•</span>
                  <span className="text-slate-600 leading-relaxed">
                    {parts.map((part, partIdx) => 
                      partIdx % 2 === 1 ? <strong key={partIdx} className="font-bold text-slate-700">{part}</strong> : part
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        );
        currentList = [];
      }
    };

    const flushNumberedList = () => {
      if (currentNumberedList.length > 0) {
        elements.push(
          <ol key={`numbered-list-${elements.length}`} className="my-6 space-y-4 pl-6">
            {currentNumberedList.map((item, idx) => {
              // Handle inline bold text
              const parts = item.split('**');
              return (
                <li key={idx} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-sage to-icy text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </span>
                  <div className="flex-1 pt-1 text-lg text-slate-600 leading-relaxed">
                    {parts.map((part, partIdx) => 
                      partIdx % 2 === 1 ? <strong key={partIdx} className="font-bold text-slate-700">{part}</strong> : part
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        );
        currentNumberedList = [];
      }
    };

    lines.forEach((line, index) => {
      // Skip empty lines but add spacing
      if (!line.trim()) {
        flushList();
        flushNumberedList();
        return;
      }

      // Numbered lists (1., 2., 3., etc.)
      if (/^\d+\.\s/.test(line)) {
        flushList();
        const item = line.replace(/^\d+\.\s/, '');
        currentNumberedList.push(item);
        return;
      }

      // Headers
      if (line.startsWith('# ') && !line.startsWith('## ')) {
        flushList();
        flushNumberedList();
        elements.push(
          <h1 key={index} className="text-4xl md:text-5xl font-bold text-slate mt-12 mb-6 first:mt-0">
            {line.replace('# ', '')}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        flushList();
        flushNumberedList();
        elements.push(
          <h2 key={index} className="text-3xl md:text-4xl font-bold text-slate mt-12 mb-6">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        flushList();
        flushNumberedList();
        const h3Text = line.replace('### ', '');
        // Handle bold within headings
        const parts = h3Text.split('**');
        elements.push(
          <h3 key={index} className="text-2xl md:text-3xl font-bold text-slate-700 mt-10 mb-4">
            {parts.map((part, idx) => 
              idx % 2 === 1 ? <strong key={idx} className="text-sage">{part}</strong> : part
            )}
          </h3>
        );
      } else if (line.startsWith('#### ')) {
        flushList();
        flushNumberedList();
        const h4Text = line.replace('#### ', '');
        const parts = h4Text.split('**');
        elements.push(
          <h4 key={index} className="text-xl md:text-2xl font-bold text-slate-700 mt-8 mb-3">
            {parts.map((part, idx) => 
              idx % 2 === 1 ? <strong key={idx} className="text-sage">{part}</strong> : part
            )}
          </h4>
        );
      }
      // Bold text lines (like "**What makes it special:**")
      else if (line.startsWith('**') && line.includes('**')) {
        flushList();
        flushNumberedList();
        const boldText = line.replace(/\*\*/g, '');
        elements.push(
          <p key={index} className="text-lg font-bold text-slate-700 mt-6 mb-3">
            {boldText}
          </p>
        );
      }
      // Lists
      else if (line.startsWith('- ') || line.startsWith('* ') || line.startsWith('• ')) {
        const item = line.replace(/^[-*•]\s/, '');
        currentList.push(item);
      }
      // Horizontal rule
      else if (line === '---') {
        flushList();
        flushNumberedList();
        elements.push(
          <hr key={index} className="my-12 border-t-2 border-sand-200" />
        );
      }
      // Regular paragraph
      else {
        flushList();
        flushNumberedList();
        // Handle inline bold and italic
        let formattedLine = line;
        const hasBold = formattedLine.includes('**');
        
        if (hasBold) {
          const parts = formattedLine.split('**');
          elements.push(
            <p key={index} className="text-lg text-slate-600 leading-relaxed my-4">
              {parts.map((part, idx) => 
                idx % 2 === 1 ? <strong key={idx} className="font-bold text-slate-700">{part}</strong> : part
              )}
            </p>
          );
        } else {
          elements.push(
            <p key={index} className="text-lg text-slate-600 leading-relaxed my-4">
              {formattedLine}
            </p>
          );
        }
      }
    });

    flushList();
    flushNumberedList();
    return elements;
  };

  return (
    <div className="prose prose-lg max-w-none">
      {renderMarkdown(content)}
    </div>
  );
}


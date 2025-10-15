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
    let inCodeBlock = false;
    
    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="my-6 space-y-2 pl-6">
            {currentList.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-sage mt-1.5">•</span>
                <span className="text-slate-600 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((line, index) => {
      // Skip empty lines but add spacing
      if (!line.trim()) {
        flushList();
        return;
      }

      // Headers
      if (line.startsWith('# ') && !line.startsWith('## ')) {
        flushList();
        elements.push(
          <h1 key={index} className="text-4xl md:text-5xl font-bold text-slate mt-12 mb-6 first:mt-0">
            {line.replace('# ', '')}
          </h1>
        );
      } else if (line.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-3xl md:text-4xl font-bold text-slate mt-12 mb-6">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-2xl md:text-3xl font-bold text-slate-700 mt-10 mb-4">
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('#### ')) {
        flushList();
        elements.push(
          <h4 key={index} className="text-xl md:text-2xl font-bold text-slate-700 mt-8 mb-3">
            {line.replace('#### ', '')}
          </h4>
        );
      }
      // Bold text
      else if (line.startsWith('**') && line.endsWith('**')) {
        flushList();
        elements.push(
          <p key={index} className="text-lg font-bold text-slate my-4">
            {line.replace(/\*\*/g, '')}
          </p>
        );
      }
      // Lists
      else if (line.startsWith('- ') || line.startsWith('* ')) {
        const item = line.replace(/^[-*]\s/, '');
        currentList.push(item);
      }
      // Horizontal rule
      else if (line === '---') {
        flushList();
        elements.push(
          <hr key={index} className="my-12 border-t-2 border-sand-200" />
        );
      }
      // Regular paragraph
      else {
        flushList();
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
    return elements;
  };

  return (
    <div className="prose prose-lg max-w-none">
      {renderMarkdown(content)}
    </div>
  );
}


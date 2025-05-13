import React, { useState, useRef, useEffect } from 'react';
import type { TextAreaProps } from 'antd/es/input';
import styles from './HighlightedTextarea.module.scss';

interface Token {
  type: 'operator' | 'key' | 'value' | 'plain';
  value: string;
}

const HighlightedTextarea: React.FC<TextAreaProps> = ({ value = '', onChange, ...props }) => {
  const [tokens, setTokens] = useState<Token[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const highlightedRef = useRef<HTMLDivElement>(null);

  const parseText = (text: string): Token[] => {
    const regex = /(\b(?:OR|AND|NOT)\b)|([A-Z]+(?==))|("(?:\\"|\\\\|[^"])*")/g;
    const tokens: Token[] = [];
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
      const [fullMatch, operator, key, value] = match;
      const matchStart = match.index;
      const matchEnd = matchStart + fullMatch.length;

      if (matchStart > lastIndex) {
        tokens.push({ type: 'plain', value: text.slice(lastIndex, matchStart) });
      }

      if (operator) {
        tokens.push({ type: 'operator', value: operator });
      } else if (key) {
        tokens.push({ type: 'key', value: key });
      } else if (value) {
        tokens.push({ type: 'value', value: value });
      }

      lastIndex = matchEnd;
    }

    if (lastIndex < text.length) {
      tokens.push({ type: 'plain', value: text.slice(lastIndex) });
    }

    return tokens;
  };

  useEffect(() => {
    setTokens(parseText(String(value)));
  }, [value]);

  const handleScroll = () => {
    if (textareaRef.current && highlightedRef.current) {
      highlightedRef.current.scrollTop = textareaRef.current.scrollTop;
      highlightedRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.backdrop}>
        <div ref={highlightedRef} className={styles.highlightedContent}>
          {tokens.map((token, index) => (
            <span key={index} className={styles[token.type]}>
              {token.value}
            </span>
          ))}
        </div>
      </div>
      <textarea
        {...props}
        ref={textareaRef}
        value={String(value)}
        onChange={onChange}
        onScroll={handleScroll}
        className={styles.textarea}
        autoComplete="off"
        spellCheck="false"
      />
    </div>
  );
};

export default HighlightedTextarea;

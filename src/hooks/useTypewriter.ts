import { useState, useEffect } from 'react';

/**
 * Cycles through an array of words with a typewriter effect.
 * Returns the current display text.
 */
export function useTypewriter(
  words: string[],
  typeSpeed = 80,
  deleteSpeed = 40,
  pauseMs = 1800
): string {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text.length < word.length) {
      timeout = setTimeout(
        () => setText(word.slice(0, text.length + 1)),
        typeSpeed
      );
    } else if (!deleting && text.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), pauseMs);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), deleteSpeed);
    } else if (deleting) {
      setDeleting(false);
      setIndex((index + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pauseMs]);

  return text;
}
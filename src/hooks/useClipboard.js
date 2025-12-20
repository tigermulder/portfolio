import { useState, useCallback } from 'react';

export const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [error, setError] = useState(null);

  const copyToClipboard = useCallback(async (text) => {
    if (!navigator.clipboard) {
      setError('Clipboard API not supported');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setError(null);
      
      // 2초 후 복사 상태 리셋
      setTimeout(() => setIsCopied(false), 2000);
      
      return true;
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setError('Failed to copy text');
      return false;
    }
  }, []);

  return {
    copyToClipboard,
    isCopied,
    error
  };
}; 
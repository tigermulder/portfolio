import { useEffect, useRef, useState } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const [entries, setEntries] = useState([]);
  const [observer, setObserver] = useState(null);
  const elementRefs = useRef(new Map());

  // Observer 생성
  useEffect(() => {
    const defaultOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
      ...options
    };

    const observerInstance = new IntersectionObserver((observedEntries) => {
      setEntries(observedEntries);
    }, defaultOptions);

    setObserver(observerInstance);

    return () => {
      observerInstance.disconnect();
    };
  }, []);

  // 요소 관찰 시작
  const observe = (element, id) => {
    if (observer && element) {
      observer.observe(element);
      elementRefs.current.set(id || element, element);
    }
  };

  // 요소 관찰 중지
  const unobserve = (element) => {
    if (observer && element) {
      observer.unobserve(element);
      elementRefs.current.delete(element);
    }
  };

  // 모든 요소 관찰 중지
  const disconnect = () => {
    if (observer) {
      observer.disconnect();
      elementRefs.current.clear();
    }
  };

  return {
    entries,
    observe,
    unobserve,
    disconnect
  };
}; 
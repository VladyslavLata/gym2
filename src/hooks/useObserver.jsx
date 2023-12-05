import { useState, useEffect } from "react";

export const useObserver = (margin, elementRef) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!isIntersecting && entry.isIntersecting) {
          setIsIntersecting(true);
        }
        return;
      },
      {
        rootMargin: `${margin}px`,
        threshold: 0.5,
      }
    );
    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [margin, elementRef, isIntersecting]);

  return { isIntersecting };
};

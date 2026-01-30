import { useLayoutEffect, useRef, useState } from "react";

export default function useElementHeight() {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      setHeight(entry.contentRect.height);
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, height];
}

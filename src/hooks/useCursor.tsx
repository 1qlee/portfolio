import { useState, useEffect, useCallback } from 'react';
import throttle from '../utils/throttle';

type Position = {
  x: number;
  y: number;
}

type SetPosition = React.Dispatch<React.SetStateAction<Position>>

export default function useCursor(): [Position, SetPosition, MouseEvent | null] {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: 32,
  });
  const [mouseEvent, setMouseEvent] = useState<MouseEvent | null>(null);

  const handleMouseMove = useCallback(
    throttle((e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
      setMouseEvent(e);
    }, 30),
    []
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return [position, setPosition, mouseEvent];
}
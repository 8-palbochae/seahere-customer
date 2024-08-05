import { useRef, useState, useCallback } from 'react';

const useDragHandler = (onSwipeLeft, onSwipeRight) => {
  const itemRef = useRef(null);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isSwiped, setIsSwiped] = useState(false);

  const handleTouchStart = useCallback((e) => {
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e) => {
    setCurrentX(e.touches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    const deltaX = currentX - startX;
    if (deltaX < -50) { // 왼쪽으로 스와이프
      onSwipeLeft();
      setIsSwiped(true);
    } else if (deltaX > 50) { // 오른쪽으로 스와이프
      onSwipeRight();
      setIsSwiped(false);
    }
  }, [startX, currentX, onSwipeLeft, onSwipeRight]);

  const handleMouseDown = useCallback((e) => {
    setStartX(e.clientX);
    setCurrentX(e.clientX);

    const handleMouseMove = (moveEvent) => {
      setCurrentX(moveEvent.clientX);
    };

    const handleMouseUp = () => {
      const deltaX = currentX - startX;
      if (deltaX < -50) { // 왼쪽으로 스와이프
        onSwipeLeft();
        setIsSwiped(true);
      } else if (deltaX > 50) { // 오른쪽으로 스와이프
        onSwipeRight();
        setIsSwiped(false);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  }, [startX, currentX, onSwipeLeft, onSwipeRight]);

  return {
    itemRef,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
    isSwiped
  };
};

export default useDragHandler;

// useSlide.js
import { useState, useRef } from 'react';

const useInventorySlide = (threshold = 50) => {
    const [isSlid, setIsSlid] = useState(false);
    const startX = useRef(0);

    const handleTouchStart = (e) => {
        startX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        const touchX = e.touches[0].clientX;
        if (startX.current - touchX > threshold) {
            setIsSlid(true);
        } else if (startX.current - touchX < -threshold) {
            setIsSlid(false);
        }
    };

    const handleMouseDown = (e) => {
        startX.current = e.clientX;
    };

    const handleMouseMove = (e) => {
        if (e.buttons === 1) { // Ensure the left mouse button is pressed
            const mouseX = e.clientX;
            if (startX.current - mouseX > threshold) {
                setIsSlid(true);
            } else if (startX.current - mouseX < -threshold) {
                setIsSlid(false);
            }
        }
    };

    return {
        isSlid,
        handleTouchStart,
        handleTouchMove,
        handleMouseDown,
        handleMouseMove
    };
};

export default useInventorySlide;

import React, { useEffect, useRef } from 'react';

const BubbleFollower = () => {
  const bubbleRef = useRef(null);
  // Store current and target positions
  const pos = useRef({ curX: 0, curY: 0, tgX: 0, tgY: 0 });

  useEffect(() => {
    const move = () => {
      // Smoothly interpolate current position towards target
      pos.current.curX += (pos.current.tgX - pos.current.curX) / 20;
      pos.current.curY += (pos.current.tgY - pos.current.curY) / 20;
      if (bubbleRef.current) {
        bubbleRef.current.style.transform = `translate(${Math.round(pos.current.curX)}px, ${Math.round(pos.current.curY)}px)`;
      }
      requestAnimationFrame(move);
    };

    const onMouseMove = (e) => {
      pos.current.tgX = e.clientX;
      pos.current.tgY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);
    move();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="bubble-follower" ref={bubbleRef}></div>
  );
};

export default BubbleFollower;

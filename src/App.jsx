import React, { useRef, useEffect } from 'react';
import './App.css';

function App() {
  const interactiveRef = useRef(null);
  // For smooth animation
  const pos = useRef({ curX: 0, curY: 0, tgX: 0, tgY: 0 });

  useEffect(() => {
    const move = () => {
      pos.current.curX += (pos.current.tgX - pos.current.curX) / 2;
      pos.current.curY += (pos.current.tgY - pos.current.curY) / 2;
      if (interactiveRef.current) {
        interactiveRef.current.style.transform = `translate(${Math.round(pos.current.curX)}px, ${Math.round(pos.current.curY)}px)`;
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
    <div className="gradient-bg">
      <div className="gradients-container">
        <div className="g1" />
        <div className="g2" />
        <div className="g3" />
        <div className="g4" />
        <div className="g5" />
        <div className="interactive" ref={interactiveRef} />
      </div>
      <div className="text-container">
        Bubbles
      </div>
    </div>
  );
}

export default App;

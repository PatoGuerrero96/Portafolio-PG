import { useState, useEffect } from 'react';

export default function TypeWriter({ 
  text, 
  speed = 100, 
  delay = 1000,
  className = "" 
}) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000); // Pausa antes de borrar
      return () => clearTimeout(pauseTimeout);
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && !isPaused) {
        // Escribiendo
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setIsPaused(true); // Pausa después de escribir completo
        }
      } else if (isDeleting) {
        // Borrando
        if (currentIndex > 0) {
          setDisplayText(text.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
        }
      }
    }, isDeleting ? speed / 2 : speed); // Borra más rápido

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, isPaused, text, speed]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span> {/* Cursor parpadeante */}
    </span>
  );
}
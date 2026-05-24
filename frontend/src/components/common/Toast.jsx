import { useState, useEffect } from 'react';

export default function Toast({ 
  message, 
  type = 'success', 
  duration = 3000,
  onClose 
}) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!isVisible) return null;

  const typeStyles = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
  };

  return (
    <div className={`fixed bottom-4 right-4 text-white px-6 py-3 rounded-lg shadow-lg ${typeStyles[type]} animate-slide-in`}>
      {message}
    </div>
  );
}

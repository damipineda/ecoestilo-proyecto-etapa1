import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const CustomAlert = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-24 right-4 z-50 animate-slide-in">
      <div className="bg-eco-forest text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3">
        <CheckCircle className="text-eco-sage" size={24} />
        <p className="font-medium">{message}</p>
      </div>
    </div>
  );
};

export default CustomAlert;
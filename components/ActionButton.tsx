import React from 'react';

interface ActionButtonProps {
  href: string;
  text: string;
  icon: React.ReactNode;
  className?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({ href, text, icon, className }) => {
  const isTelLink = href.startsWith('tel:');

  return (
    <a
      href={href}
      target={isTelLink ? '_self' : '_blank'}
      rel="noopener noreferrer"
      className={`flex items-center justify-center w-full max-w-sm px-6 py-3.5 mb-5 text-base font-semibold text-white rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/50 ${className}`}
    >
      <span className="w-6 h-6 mr-3">{icon}</span>
      {text}
    </a>
  );
};

export default ActionButton;

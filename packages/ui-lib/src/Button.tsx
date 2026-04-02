import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant = 'primary',
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '8px 16px',
        backgroundColor: variant === 'primary' ? '#007bff' : '#6c757d',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};

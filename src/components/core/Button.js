import React from 'react';

const variants = {
  primary: 'bg-brand text-white',
  'primary-outline': 'bg-white text-brand text-brand border border-brand',
  danger: 'bg-red-500 text-white',
};

const Button = ({ className, children, variant, ...props }) => {
  return (
    <button
      className={`text-xs px-4 py-2 rounded ${variants[variant]} ${
        className || ''
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

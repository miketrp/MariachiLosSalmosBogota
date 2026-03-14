import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  target,
  rel,
  type,
}) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black focus:ring-yellow-300 shadow-lg hover:from-yellow-500 hover:to-yellow-600',
    secondary: 'bg-gradient-to-r from-orange-500 to-orange-600 text-white focus:ring-orange-300 shadow-lg hover:from-orange-600 hover:to-orange-700',
    outline: 'border-2 border-yellow-400 text-yellow-400 focus:ring-yellow-300 hover:bg-yellow-400 hover:text-black',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={onClick}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      type={type || 'button'}
    >
      {children}
    </button>
  );
};

export default Button;
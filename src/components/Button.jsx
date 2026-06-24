import React from 'react';
import './Button.css';

/**
 * A reusable, premium, child-friendly 3D button component.
 * Features smooth hover lifts, bouncy active press states, and accessibility.
 */
export default function Button({
  children,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  variant = 'primary', // 'primary', 'secondary', 'success', 'danger'
  ...props
}) {
  return (
    <button
      type={type}
      className={`app-btn btn-${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      {...props}
    >
      <span className="btn-inner">{children}</span>
    </button>
  );
}

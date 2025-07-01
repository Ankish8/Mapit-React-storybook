import React from 'react';
import styles from './Button.module.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  loading = false,
  onClick,
  type = 'button',
  className = '',
  icon,
  iconPosition = 'left',
  iconOnly = false,
  fullWidth = false,
  as = 'button',
  ...props 
}) => {
  const Component = as;
  
  const buttonClass = [
    styles.button,
    styles[variant],
    styles[size],
    loading && styles.loading,
    iconOnly && styles.iconOnly,
    fullWidth && styles.fullWidth,
    className
  ].filter(Boolean).join(' ');

  const isDisabled = disabled || loading;

  const handleClick = (e) => {
    if (!isDisabled && onClick) {
      onClick(e);
    }
  };

  return (
    <Component
      type={as === 'button' ? type : undefined}
      className={buttonClass}
      disabled={isDisabled}
      onClick={handleClick}
      aria-disabled={isDisabled}
      {...props}
    >
      {loading && <div className={styles.loadingSpinner} />}
      {icon && iconPosition === 'left' && <span className={styles.icon}>{icon}</span>}
      {iconOnly ? (
        // When iconOnly is true, show only icon if available, otherwise show children as fallback
        icon ? null : <span className={styles.iconFallback}>{children}</span>
      ) : (
        // When iconOnly is false, always show children
        children
      )}
      {icon && iconPosition === 'right' && <span className={styles.icon}>{icon}</span>}
    </Component>
  );
};

export default Button;
import React from 'react';
import styles from './ToggleCard.module.css';

export function ToggleCard({ 
  enabled = false, 
  onToggle = () => {},
  title = "Provide starter code",
  description = "Give candidates a basic code template to get started faster",
  disabled = false
}) {
  const handleToggle = (e) => {
    if (disabled || typeof onToggle !== 'function') return;
    onToggle(e.target.checked);
  };

  return (
    <div className={`${styles.toggleCard} ${disabled ? styles.disabled : ''}`}>
      <div className={styles.toggleInfo}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <label className={styles.toggleSwitch}>
        <input
          type="checkbox"
          checked={enabled}
          onChange={handleToggle}
          disabled={disabled}
          aria-label={`Toggle ${title}`}
        />
        <span className={styles.toggleSlider} aria-hidden="true"></span>
      </label>
    </div>
  );
}

export default ToggleCard;
import React from 'react';
import Card from '../../../components/common/Card/Card';
import styles from './AuthLayout.module.css';

const AuthLayout = ({ 
  children, 
  title, 
  subtitle,
  backgroundImage,
  className = '',
  ...props 
}) => {
  const layoutClasses = [
    styles.authLayout,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={layoutClasses} {...props}>
      <div className={styles.background}>
        {backgroundImage && (
          <div 
            className={styles.backgroundImage}
            style={{ backgroundImage: `url(${backgroundImage})` }}
            aria-hidden="true"
          />
        )}
        <div className={styles.backgroundOverlay} />
      </div>
      
      <div className={styles.container}>
        <div className={styles.cardWrapper}>
          <Card 
            variant="elevated" 
            padding="lg" 
            radius="lg"
            className={styles.authCard}
          >
            {(title || subtitle) && (
              <div className={styles.header}>
                {title && <h1 className={styles.title}>{title}</h1>}
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
              </div>
            )}
            
            <div className={styles.content}>
              {children}
            </div>
          </Card>
        </div>
        
        <div className={styles.footer}>
          <p className={styles.footerText}>
            © 2024 Enterprise SSO. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
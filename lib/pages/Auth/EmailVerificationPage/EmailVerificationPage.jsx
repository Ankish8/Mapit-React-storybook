import React, { useState, useEffect, useCallback } from 'react';
import AuthLayout from '../AuthLayout';
import Button from '../../../components/common/Button';
import VerificationSuccess from './components/VerificationSuccess';
import ResendEmailButton from './components/ResendEmailButton';
import styles from './EmailVerificationPage.module.css';

const EmailVerificationPage = ({ 
  email = 'user@example.com',
  onContinueToLogin,
  onResendEmail,
  verificationStatus = 'success', // 'success', 'pending', 'error', 'expired'
  errorMessage,
  isResending = false
}) => {
  const [currentStatus, setCurrentStatus] = useState(verificationStatus);
  const [error, setError] = useState(errorMessage);

  // Handle verification status changes
  useEffect(() => {
    setCurrentStatus(verificationStatus);
    setError(errorMessage);
  }, [verificationStatus, errorMessage]);

  const handleResendEmail = useCallback(async () => {
    try {
      setError(null);
      
      if (onResendEmail) {
        await onResendEmail(email);
      }
      
      // Update status to pending after successful resend
      setCurrentStatus('pending');
    } catch (err) {
      setError(err.message || 'Failed to resend verification email. Please try again.');
    }
  }, [email, onResendEmail]);

  const handleContinueToLogin = useCallback(() => {
    if (onContinueToLogin) {
      onContinueToLogin();
    }
  }, [onContinueToLogin]);

  const handleRetryVerification = useCallback(() => {
    // Reset error state and try again
    setError(null);
    setCurrentStatus('pending');
  }, []);

  const getPageTitle = () => {
    switch (currentStatus) {
      case 'success':
        return 'Email Verified Successfully';
      case 'pending':
        return 'Verify Your Email';
      case 'expired':
        return 'Verification Link Expired';
      case 'error':
      default:
        return 'Verification Failed';
    }
  };

  const getPageSubtitle = () => {
    switch (currentStatus) {
      case 'success':
        return 'Your email has been verified. You can now access your account.';
      case 'pending':
        return `We've sent a verification email to ${email}. Please check your inbox and click the verification link.`;
      case 'expired':
        return 'The verification link has expired. Please request a new one.';
      case 'error':
      default:
        return 'There was an issue verifying your email. Please try again.';
    }
  };

  const renderContent = () => {
    switch (currentStatus) {
      case 'success':
        return (
          <div className={styles.contentContainer}>
            <VerificationSuccess 
              email={email}
              onContinueToLogin={handleContinueToLogin}
            />
          </div>
        );

      case 'pending':
        return (
          <div className={styles.contentContainer}>
            <div className={styles.pendingContent}>
              <div className={styles.emailIcon}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect width="48" height="48" rx="24" fill="var(--color-primary-100)"/>
                  <path 
                    d="M16 18h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2V20a2 2 0 0 1 2-2z" 
                    stroke="var(--color-primary-600)" 
                    strokeWidth="2" 
                    fill="none"
                  />
                  <path 
                    d="M34 20l-10 6L14 20" 
                    stroke="var(--color-primary-600)" 
                    strokeWidth="2" 
                    fill="none"
                  />
                </svg>
              </div>
              
              <div className={styles.instructions}>
                <p className={styles.instructionText}>
                  Check your email and click the verification link to continue.
                </p>
                <p className={styles.emailDisplay}>
                  Sent to: <strong>{email}</strong>
                </p>
              </div>

              <div className={styles.actions}>
                <ResendEmailButton 
                  onResend={handleResendEmail}
                  isLoading={isResending}
                  disabled={isResending}
                />
              </div>

              <div className={styles.helpText}>
                <p>
                  Didn't receive the email? Check your spam folder or{' '}
                  <button 
                    type="button" 
                    className={styles.linkButton}
                    onClick={handleResendEmail}
                    disabled={isResending}
                  >
                    try a different email address
                  </button>
                </p>
              </div>
            </div>
          </div>
        );

      case 'expired':
      case 'error':
      default:
        return (
          <div className={styles.contentContainer}>
            <div className={styles.errorContent}>
              <div className={styles.errorIcon}>
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect width="48" height="48" rx="24" fill="var(--color-error-100)"/>
                  <path 
                    d="M24 16v8M24 28h.01" 
                    stroke="var(--color-error-600)" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              
              <div className={styles.errorMessage}>
                <p className={styles.errorText}>
                  {error || (currentStatus === 'expired' 
                    ? 'The verification link has expired.' 
                    : 'Unable to verify your email address.'
                  )}
                </p>
              </div>

              <div className={styles.actions}>
                <Button
                  variant="primary"
                  size="large"
                  onClick={handleRetryVerification}
                  className={styles.retryButton}
                >
                  Try Again
                </Button>
                
                <ResendEmailButton 
                  onResend={handleResendEmail}
                  isLoading={isResending}
                  disabled={isResending}
                  variant="secondary"
                />
              </div>

              <div className={styles.supportText}>
                <p>
                  Still having trouble?{' '}
                  <a href="/support" className={styles.supportLink}>
                    Contact Support
                  </a>
                </p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <AuthLayout
      title={getPageTitle()}
      subtitle={getPageSubtitle()}
      className={styles.emailVerificationLayout}
    >
      {renderContent()}
    </AuthLayout>
  );
};

export default EmailVerificationPage;
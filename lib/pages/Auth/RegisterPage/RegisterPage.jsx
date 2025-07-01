import React, { useState, useCallback } from 'react';
import AuthLayout from '../AuthLayout';
import Form from '../../../components/common/Form';
import Input from '../../../components/common/Input';
import Button from '../../../components/common/Button';
import styles from './RegisterPage.module.css';

// Password strength evaluation
const evaluatePasswordStrength = (password) => {
  let score = 0;
  let feedback = [];

  if (password.length >= 8) {
    score += 1;
  } else {
    feedback.push('At least 8 characters');
  }

  if (/[a-z]/.test(password)) {
    score += 1;
  } else {
    feedback.push('Lowercase letter');
  }

  if (/[A-Z]/.test(password)) {
    score += 1;
  } else {
    feedback.push('Uppercase letter');
  }

  if (/\d/.test(password)) {
    score += 1;
  } else {
    feedback.push('Number');
  }

  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    score += 1;
  } else {
    feedback.push('Special character');
  }

  const strength = score === 0 ? 'none' : 
                  score <= 2 ? 'weak' : 
                  score <= 3 ? 'medium' : 
                  score <= 4 ? 'strong' : 'very-strong';

  return { score, strength, feedback };
};

// Email validation
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const PasswordStrengthIndicator = ({ password, visible }) => {
  if (!visible || !password) return null;

  const { strength, feedback } = evaluatePasswordStrength(password);

  const strengthConfig = {
    weak: { color: '#d92d20', label: 'Weak' },
    medium: { color: '#f79009', label: 'Medium' },
    strong: { color: '#12b76a', label: 'Strong' },
    'very-strong': { color: '#039855', label: 'Very Strong' }
  };

  const config = strengthConfig[strength] || { color: '#6b5671', label: 'Too Short' };

  return (
    <div className={styles.passwordStrength}>
      <div className={styles.strengthHeader}>
        <span className={styles.strengthLabel}>Password strength:</span>
        <span 
          className={styles.strengthValue}
          style={{ color: config.color }}
        >
          {config.label}
        </span>
      </div>
      
      <div className={styles.strengthBar}>
        <div 
          className={styles.strengthProgress}
          style={{ 
            width: `${(evaluatePasswordStrength(password).score / 5) * 100}%`,
            backgroundColor: config.color
          }}
        />
      </div>
      
      {feedback.length > 0 && (
        <div className={styles.strengthFeedback}>
          <span className={styles.feedbackLabel}>Missing:</span>
          <span className={styles.feedbackItems}>{feedback.join(', ')}</span>
        </div>
      )}
    </div>
  );
};

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  }, [errors]);

  const handleInputBlur = useCallback((e) => {
    const { name } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));
    validateField(name, formData[name]);
  }, [formData]);

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'firstName':
        if (!value.trim()) {
          error = 'First name is required';
        } else if (value.trim().length < 2) {
          error = 'First name must be at least 2 characters';
        }
        break;
      
      case 'lastName':
        if (!value.trim()) {
          error = 'Last name is required';
        } else if (value.trim().length < 2) {
          error = 'Last name must be at least 2 characters';
        }
        break;
      
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!isValidEmail(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      
      case 'password':
        if (!value) {
          error = 'Password is required';
        } else if (value.length < 8) {
          error = 'Password must be at least 8 characters';
        }
        break;
      
      case 'confirmPassword':
        if (!value) {
          error = 'Please confirm your password';
        } else if (value !== formData.password) {
          error = 'Passwords do not match';
        }
        break;
    }

    setErrors(prev => ({
      ...prev,
      [name]: error
    }));

    return !error;
  };

  const validateForm = () => {
    const fields = ['firstName', 'lastName', 'email', 'password', 'confirmPassword'];
    let isValid = true;

    fields.forEach(field => {
      const fieldValid = validateField(field, formData[field]);
      if (!fieldValid) isValid = false;
    });

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically make an API call to register the user
      console.log('Registration data:', formData);
      
      // Success - you might redirect to login or dashboard
      alert('Registration successful! Please check your email to verify your account.');
      
    } catch (error) {
      console.error('Registration error:', error);
      setErrors({ submit: 'Registration failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const EyeIcon = ({ visible }) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      {visible ? (
        <>
          <path d="M1.5 8s3-5.5 6.5-5.5S14.5 8 14.5 8s-3 5.5-6.5 5.5S1.5 8 1.5 8z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </>
      ) : (
        <>
          <path d="M14.12 14.12l-12-12M9.9 4.24A5.5 5.5 0 0 1 14.5 8a13.82 13.82 0 0 1-1.64 2.14M6.72 6.72a2 2 0 1 0 2.56 2.56M2.5 2.5S4.5 8 8 8a7.28 7.28 0 0 0 2.64-.48" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        </>
      )}
    </svg>
  );

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join thousands of organizations using our enterprise SSO solution"
    >
      <Form onSubmit={handleSubmit} gap="lg">
        <Form.Group columns={2}>
          <Input
            name="firstName"
            label="First Name"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            errorMessage={touched.firstName ? errors.firstName : ''}
            required
            autoComplete="given-name"
          />
          <Input
            name="lastName"
            label="Last Name"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            errorMessage={touched.lastName ? errors.lastName : ''}
            required
            autoComplete="family-name"
          />
        </Form.Group>

        <Input
          name="email"
          type="email"
          label="Email Address"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          errorMessage={touched.email ? errors.email : ''}
          required
          autoComplete="email"
        />

        <div className={styles.passwordField}>
          <Input
            name="password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            placeholder="Create a strong password"
            value={formData.password}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            errorMessage={touched.password ? errors.password : ''}
            required
            autoComplete="new-password"
            endIcon={
              <button
                type="button"
                className={styles.passwordToggle}
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                <EyeIcon visible={showPassword} />
              </button>
            }
          />
          
          <PasswordStrengthIndicator 
            password={formData.password}
            visible={touched.password || formData.password.length > 0}
          />
        </div>

        <Input
          name="confirmPassword"
          type={showConfirmPassword ? 'text' : 'password'}
          label="Confirm Password"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          errorMessage={touched.confirmPassword ? errors.confirmPassword : ''}
          required
          autoComplete="new-password"
          endIcon={
            <button
              type="button"
              className={styles.passwordToggle}
              onClick={toggleConfirmPasswordVisibility}
              aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
            >
              <EyeIcon visible={showConfirmPassword} />
            </button>
          }
        />

        {errors.submit && (
          <div className={styles.submitError}>
            {errors.submit}
          </div>
        )}

        <Form.Actions align="center">
          <Button
            type="submit"
            variant="primary"
            size="large"
            fullWidth
            loading={isLoading}
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </Button>
        </Form.Actions>

        <div className={styles.loginLink}>
          <p>
            Already have an account?{' '}
            <a href="/login" className={styles.link}>
              Sign in
            </a>
          </p>
        </div>
      </Form>
    </AuthLayout>
  );
};

export default RegisterPage;
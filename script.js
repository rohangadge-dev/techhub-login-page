/**
 * TechHub Login Page - Practice Demo Script
 * Handles client-side validation, password visibility toggling, 
 * and simulated authentication.
 * 
 * Note: No credentials are saved in storage or logged to console.
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const togglePasswordBtn = document.getElementById('togglePassword');
  const eyeIcon = document.getElementById('eyeIcon');
  const eyeOffIcon = document.getElementById('eyeOffIcon');
  const submitBtn = document.getElementById('submitBtn');
  const btnText = submitBtn.querySelector('.btn-text');
  const formAlert = document.getElementById('formAlert');

  const emailGroup = document.getElementById('emailGroup');
  const passwordGroup = document.getElementById('passwordGroup');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  // Basic regex for email format verification
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  /**
   * Toggles password input visibility between 'password' and 'text'.
   */
  function handlePasswordToggle() {
    const isPassword = passwordInput.getAttribute('type') === 'password';
    const newType = isPassword ? 'text' : 'password';
    
    passwordInput.setAttribute('type', newType);
    togglePasswordBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
    togglePasswordBtn.setAttribute('title', isPassword ? 'Hide password' : 'Show password');
    togglePasswordBtn.setAttribute('aria-pressed', isPassword ? 'true' : 'false');

    // Toggle icon views
    eyeIcon.style.display = isPassword ? 'none' : 'block';
    eyeOffIcon.style.display = isPassword ? 'block' : 'none';

    // Keep focus in input
    passwordInput.focus();
  }

  /**
   * Sets an error state on a specific input group.
   * @param {HTMLElement} group - Form group container
   * @param {HTMLInputElement} input - Input element
   * @param {HTMLElement} errorElement - Error message container
   * @param {string} message - Validation message
   */
  function setFieldError(group, input, errorElement, message) {
    group.classList.add('has-error');
    input.setAttribute('aria-invalid', 'true');
    errorElement.textContent = message;
  }

  /**
   * Clears error state from a specific input group.
   * @param {HTMLElement} group - Form group container
   * @param {HTMLInputElement} input - Input element
   * @param {HTMLElement} errorElement - Error message container
   */
  function clearFieldError(group, input, errorElement) {
    group.classList.remove('has-error');
    input.setAttribute('aria-invalid', 'false');
    errorElement.textContent = '';
  }

  /**
   * Displays an alert banner at the top of the form.
   * @param {'error' | 'success'} type - Alert type
   * @param {string} message - Feedback text to display
   */
  function displayAlert(type, message) {
    formAlert.hidden = false;
    formAlert.className = `alert-banner alert-${type}`;
    formAlert.textContent = message;
  }

  /**
   * Clears the alert banner.
   */
  function clearAlert() {
    formAlert.hidden = true;
    formAlert.textContent = '';
    formAlert.className = 'alert-banner';
  }

  /**
   * Validates the email field.
   * @returns {boolean} Whether the field is valid
   */
  function validateEmail() {
    const value = emailInput.value.trim();

    if (!value) {
      setFieldError(emailGroup, emailInput, emailError, 'Email address is required.');
      return false;
    }

    if (!EMAIL_REGEX.test(value)) {
      setFieldError(emailGroup, emailInput, emailError, 'Please enter a valid email address.');
      return false;
    }

    clearFieldError(emailGroup, emailInput, emailError);
    return true;
  }

  /**
   * Validates the password field.
   * @returns {boolean} Whether the field is valid
   */
  function validatePassword() {
    const value = passwordInput.value;

    if (!value) {
      setFieldError(passwordGroup, passwordInput, passwordError, 'Password is required.');
      return false;
    }

    if (value.length < 8) {
      setFieldError(passwordGroup, passwordInput, passwordError, 'Password must be at least 8 characters.');
      return false;
    }

    clearFieldError(passwordGroup, passwordInput, passwordError);
    return true;
  }

  /**
   * Real-time validation listeners to clear errors on user correction.
   */
  emailInput.addEventListener('input', () => {
    if (emailGroup.classList.contains('has-error')) {
      validateEmail();
    }
  });

  passwordInput.addEventListener('input', () => {
    if (passwordGroup.classList.contains('has-error')) {
      validatePassword();
    }
  });

  // Password Visibility Toggle Listener
  togglePasswordBtn.addEventListener('click', handlePasswordToggle);

  /**
   * Form Submission Event Handler (Simulated Auth Flow)
   */
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearAlert();

    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    // Prevent submission if either field fails validation
    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    // Set loading state on button and disable inputs
    submitBtn.classList.add('is-loading');
    submitBtn.disabled = true;
    emailInput.disabled = true;
    passwordInput.disabled = true;
    togglePasswordBtn.disabled = true;
    btnText.textContent = 'Signing in...';

    // Simulate network delay for demo authentication (1.2s)
    setTimeout(() => {
      // Re-enable form controls
      submitBtn.classList.remove('is-loading');
      submitBtn.disabled = false;
      emailInput.disabled = false;
      passwordInput.disabled = false;
      togglePasswordBtn.disabled = false;
      btnText.textContent = 'Sign In';

      // Show simulated success feedback
      displayAlert(
        'success',
        'Demo sign-in simulated successfully! (No actual authentication was performed)'
      );

      // Reset form fields safely
      loginForm.reset();
      
      // Ensure password mask is reset if it was left toggled
      if (passwordInput.getAttribute('type') === 'text') {
        handlePasswordToggle();
      }
    }, 1200);
  });
});

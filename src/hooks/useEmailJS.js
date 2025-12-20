import { useState, useCallback } from 'react';
import emailjs from '@emailjs/browser';

export const useEmailJS = (serviceId, templateId, publicKey) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = useCallback(async (formRef) => {
    if (!formRef?.current) {
      setError('Form reference is required');
      return false;
    }

    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setSuccess(true);
      formRef.current.reset();
      return true;
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError(err.text || 'Failed to send email');
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [serviceId, templateId, publicKey]);

  const resetStatus = useCallback(() => {
    setError(null);
    setSuccess(false);
  }, []);

  return {
    sendEmail,
    isLoading,
    error,
    success,
    resetStatus
  };
}; 
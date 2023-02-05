export interface ValidationMessagesType {
  [key: string]: { type: string; message: string }[];
}

const validationMessages: ValidationMessagesType = {
  fullName: [
    { type: 'required', message: 'Full name is required' },
    {
      type: 'minLength',
      message: 'Full name must be at least 5 characters long',
    },
    {
      type: 'fullNameFormat',
      message: 'Your full name must contain only letters and  space between',
    },
  ],
  email: [
    { type: 'required', message: 'Email is required' },
    { type: 'email', message: 'Enter a valid email' },
  ],
  confirmPassword: [
    { type: 'required', message: 'Confirm password is required' },
    { type: 'passwordMismatch', message: 'Password mismatch' },
  ],
  password: [
    { type: 'required', message: 'Password is required' },
    {
      type: 'minLength',
      message: 'Password must be at least 5 characters long',
    },
    {
      type: 'passwordFormat',
      message:
        'Your password must contain at least one uppercase, one lowercase, and one number',
    },
  ],
  subject: [
    { type: 'required', message: 'Subject is required' },
    {
      type: 'minLength',
      message: 'Subject must be at least 5 characters long',
    },
  ],
  message: [
    { type: 'required', message: 'Message is required' },
    {
      type: 'minLength',
      message: 'Message must be at least 20 characters long',
    },
  ],
};
export default validationMessages;

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
      type: 'maxLength',
      message: 'Full name cannot be more than 25 characters long',
    },
    {
      type: 'pattern',
      message: 'Your full name must contain only letters',
    },
    {
      type: 'validUsername',
      message: 'Your full name has already been taken',
    },
  ],
  email: [
    { type: 'required', message: 'Email is required' },
    { type: 'pattern', message: 'Enter a valid email' },
  ],
  confirmPassword: [
    { type: 'required', message: 'Confirm password is required' },
    { type: 'areEqual', message: 'Password mismatch' },
  ],
  password: [
    { type: 'required', message: 'Password is required' },
    {
      type: 'minLength',
      message: 'Password must be at least 5 characters long',
    },
    {
      type: 'pattern',
      message:
        'Your password must contain at least one uppercase, one lowercase, and one number',
    },
  ],
};
export default validationMessages;

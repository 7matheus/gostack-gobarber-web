import { ValidationError } from 'yup';

interface ErrorsInterface {
  [key: string]: string;
}

export default function getValidationErrors(
  err: ValidationError,
): ErrorsInterface {
  const validationErrors: ErrorsInterface = {};

  err.inner.forEach((error) => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}

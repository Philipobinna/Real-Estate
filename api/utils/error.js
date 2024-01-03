export const errorHandler = (statusCode, mesage) => {
  const error = new Error();
  error.status = statusCode;
  error.message = mesage
  return error;
}


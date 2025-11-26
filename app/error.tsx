"use client";

interface ErrorHandlerProps {
  error: Error;
  reset: () => void;
}

function ErrorHandler({ error, reset }: ErrorHandlerProps) {
  return (
    <div>
      <h3>Oops. Something went wrong</h3>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}

export default ErrorHandler;

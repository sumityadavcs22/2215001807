function ErrorMessage({ message }) {
    return <div className="error">Error: {message || "Something went wrong. Please try again."}</div>
  }
  
  export default ErrorMessage
  
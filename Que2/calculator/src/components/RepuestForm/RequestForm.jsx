import React, { useState } from 'react';
import './RequestForm.css';

const RequestForm = ({ onSubmit, isLoading }) => {
  const [numberId, setNumberId] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!numberId) {
      setError('Please enter a number ID');
      return;
    }
    if (!['p', 'f', 'e', 'r'].includes(numberId)) {
      setError('Invalid number ID. Use p, f, e, or r');
      return;
    }
    setError('');
    onSubmit(numberId);
  };

  return (
    <form onSubmit={handleSubmit} className="request-form">
      <div className="form-group">
        <label htmlFor="numberId">Number ID:</label>
        <input
          type="text"
          id="numberId"
          value={numberId}
          onChange={(e) => setNumberId(e.target.value)}
          placeholder="Enter p (prime), f (fibonacci), e (even), or r (random)"
          maxLength="1"
        />
        {error && <div className="error-message">{error}</div>}
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Fetching...' : 'Fetch Numbers'}
      </button>
    </form>
  );
};

export default RequestForm;
import React, { useState } from 'react';
import RequestForm from '../../components/RequestForm/RequestForm';
import NumberDisplay from '../../components/NumberDisplay/NumberDisplay';
import { fetchNumber } from '../../services/api';
import './HomePage.css';

const HomePage = () => {
  const [responseData, setResponseData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (numberId) => {
    setIsLoading(true);
    setError('');
    try {
      const data = await fetchNumber(numberId);
      if (data) {
        setResponseData(data);
      } else {
        setError('Failed to fetch data from the server');
      }
    } catch (err) {
      setError('An error occurred while fetching data');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="home-page">
      <h1>Average Calculator Microservice</h1>
      <p className="description">
        Enter a number ID (p for prime, f for fibonacci, e for even, or r for random) to fetch numbers and calculate averages.
      </p>
      
      <RequestForm onSubmit={handleSubmit} isLoading={isLoading} />
      
      {error && <div className="error-message">{error}</div>}
      
      <NumberDisplay data={responseData} />
    </div>
  );
};

export default HomePage;
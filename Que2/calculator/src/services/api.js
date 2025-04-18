const API_BASE_URL = 'http://localhost:9876';

export const fetchNumber = async (numberId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/numbers/${numberId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching number:', error);
    return null;
  }
};
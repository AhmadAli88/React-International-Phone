import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const PhoneSubmit = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!phone) {
      setError('Phone number is required');
      return;
    }

    try {
      // Use a fake public API endpoint for testing (jsonplaceholder)
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }), // Simulate sending phone number
      });
      const result = await response.json();
      alert('Phone number saved: ' + result.phone); // Display the mock response

    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setError('Failed to save phone number');
    }
  };

  return (
    <div>
      <h2>Submit Phone Number</h2>
      <PhoneInput
        defaultCountry="us"
        value={phone}
        onChange={(phone) => setPhone(phone)}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PhoneSubmit;

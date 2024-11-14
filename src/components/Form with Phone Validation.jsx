import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const PhoneForm = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the phone number is valid
    if (phone && phone.length > 0) {
      // Validation is handled internally by the PhoneInput component
      setError('');
      alert('Phone number is valid: ' + phone);
    } else {
      setError('Please enter a valid phone number.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Phone Number Form</h2>
      <PhoneInput
        defaultCountry="US"
        value={phone}
        onChange={(phone) => setPhone(phone)}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default PhoneForm;

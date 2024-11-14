import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const CustomPhoneInput = () => {
  const [phone, setPhone] = useState('');

  return (
    <div>
      <h2>Custom Phone Input</h2>
      <PhoneInput
        defaultCountry="ca"
        value={phone}
        onChange={(phone) => setPhone(phone)}
        flagsImagePath="path/to/custom/flags.png" // Custom flags path
        style={{ border: '2px solid #ccc', borderRadius: '5px', padding: '10px' }} // Custom styling
      />
      <p>Phone: {phone}</p>
    </div>
  );
};

export default CustomPhoneInput;

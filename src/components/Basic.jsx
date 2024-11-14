import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const Basic = () => {
  const [phone, setPhone] = useState('');

  return (
    <div>
      <h2>Phone Input</h2>
      <PhoneInput
        defaultCountry="ua"
        value={phone}
        onChange={(phone) => setPhone(phone)}
      />
      <p>Phone: {phone}</p>
    </div>
  );
};

export default Basic;

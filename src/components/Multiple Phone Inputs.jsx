import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const UserProfile = () => {
  const [mobile, setMobile] = useState('');
  const [work, setWork] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Mobile: ${mobile}\nWork: ${work}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Profile</h2>
      <div>
        <label>Mobile</label>
        <PhoneInput
          defaultCountry="us"
          value={mobile}
          onChange={(phone) => setMobile(phone)}
        />
      </div>
      <div>
        <label>Work</label>
        <PhoneInput
          defaultCountry="us"
          value={work}
          onChange={(phone) => setWork(phone)}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default UserProfile;

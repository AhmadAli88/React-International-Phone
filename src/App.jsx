import './App.css';
import Basic from './components/Basic';
import CustomPhoneInput from './components/Customizing Styles and Flags';
import PhoneSubmit from './components/Dynamic Phone Number with API Submission';
import PhoneForm from './components/Form with Phone Validation';
import UserProfile from './components/Multiple Phone Inputs';

function App() {
  return (
    <div>
      <Basic />
      <PhoneForm/>
      <UserProfile/>
      <CustomPhoneInput/>
      <PhoneSubmit/>
    </div>
  );
}

export default App;


import { Route, Routes } from 'react-router-dom';
import { ForgotPassword, Home, Login, OTPVerification, Signup } from './components';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/forgot-password' element={<ForgotPassword />} />
      <Route path='/otp-verification' element={<OTPVerification />} />
    </Routes>
  );
}

export default App;

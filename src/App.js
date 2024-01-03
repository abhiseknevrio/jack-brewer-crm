import { Route, Routes } from 'react-router-dom';
import { Dashboard, ForgotPasswordPage, Home, LoginPage, NewPassword, OTPVerificationPage, ServiceHistory, SignupPage, TermsAndConditions } from './components';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path="/terms-and-conditions" element={
          <PrivateRoute>
            <TermsAndConditions />
          </PrivateRoute>
        } />
        <Route path="/service-history" element={
          <PrivateRoute>
            <ServiceHistory />
          </PrivateRoute>
        } />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<SignupPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/otp-verification' element={<OTPVerificationPage />} />
        <Route path='/new-password' element={<NewPassword />} />
      </Routes>
    </Provider>
  )
}

export default App;
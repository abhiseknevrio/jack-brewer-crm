import { Route, Routes } from 'react-router-dom';
import { HomePage, ForgotPasswordPage, LoginPage, OTPVerificationPage, SignupPage, NewPasswordPage } from './components';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        } />
        <Route path="/terms-and-conditions" element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        } />
        <Route path="/service-history" element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        } />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<SignupPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/otp-verification' element={<OTPVerificationPage />} />
        <Route path='/new-password' element={<NewPasswordPage />} />
      </Routes>
    </Provider>
  )
}

export default App;
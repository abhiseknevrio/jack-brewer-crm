import { Route, Routes } from 'react-router-dom';
import { Dashboard, Home } from './components';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Home />} />
        <Route path='/register' element={<Home />} />
        <Route path='/forgot-password' element={<Home />} />
        <Route path='/otp-verification' element={<Home />} />
        <Route path='/new-password' element={<Home />} />
      </Routes>
    </Provider>
  )
}

export default App;
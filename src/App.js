import './App.css';
import LoginPage from './Components/AdminDashboard/LoginPage/LoginPage';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' />
        <Route path='/admin' element={
          <LoginPage />

        } />

      </Routes>
    </div>
  );
};

export default App;

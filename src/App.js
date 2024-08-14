import './index.css';
import Login from './Component/Pages/Login';
import Dashboard from './Component/Pages/Dashboard';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;

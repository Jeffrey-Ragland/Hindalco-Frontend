import './index.css';
import Login from './Component/Pages/Login';
import Dashboard from './Component/Pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './Component/Pages/ProtectedRoute';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

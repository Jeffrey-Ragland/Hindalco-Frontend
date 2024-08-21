import './index.css';
import Login from './Component/Pages/Login';
import Dashboard from './Component/Pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './Component/Pages/ProtectedRoute';
import Map from './Component/Pages/Map';
import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {

  const [hindalcoData, setHindalcoData] = useState([]);

  // for line graph limit
  const getInitialHindalcoCondition = () => {
    const storedLimit = localStorage.getItem('HindalcoLimit');
    return storedLimit ? 1 : 0
  };

  const [hindalcoCondition, setHindalcoCondition] = useState(getInitialHindalcoCondition);

  useEffect(() => {
    if(hindalcoCondition === 0) {
      localStorage.setItem('HindalcoLimit', '100');
      setHindalcoCondition(1);
    };
  }, [hindalcoCondition]);

  // fetching data
  useEffect(() => {
    getHindalcoData();

    const hindalcoInterval = setInterval(getHindalcoData, 2000);

    return () => {
      clearInterval(hindalcoInterval);
    };
  },[]);

  // get data api
  const getHindalcoData = async() => {
    try {
      const hindalcoLimit = localStorage.getItem('HindalcoLimit');
      // console.log('localstorage', hindalcoLimit);
      const response = await axios.get(`http://localhost:4000/backend/getHindalcoData?limit=${hindalcoLimit}`);
      if(response.data.success) {
        setHindalcoData(response.data.data);
      } else {
        console.log('No data found');
      }
    } catch(error) {
      console.error ('Error fetching hindalco data', error);
    };
  };
  
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<Dashboard dataFromApp={hindalcoData} />} />
          <Route path="map" element={<Map />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

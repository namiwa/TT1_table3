import './App.css';
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Itinerary from './pages/Itinerary';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/itinerary" element={<Itinerary />} />
          <Route path="*" element={<Itinerary />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

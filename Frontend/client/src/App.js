import './App.css';
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
    <Header />
        <Routes>
          
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import SnackbarProvider from "./utils/SnackbarContextUtil";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <SnackbarProvider>
        <Routes>
          
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Dashboard />} />
        </Routes>
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;

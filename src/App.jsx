// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Home from './pages/Home';
import FacultySignup from './pages/auth/FacultySignup';
import AcademicSignup from './pages/auth/AcademicSignup';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect from root '/' to '/login' */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/facultysignup" element={<FacultySignup />} />
        <Route path="/academicsignup" element={<AcademicSignup />} />
      </Routes>
    </Router>
  );
}
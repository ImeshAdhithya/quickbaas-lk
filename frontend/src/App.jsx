import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import HomeownerDashboard from './pages/HomeownerDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Landing Page එක (URL: /) */}
          <Route path="/" element={<Home />} />

          {/* Login Page එක (URL: /login) */}
          <Route path="/login" element={<Login />} />

          {/* Homeowner Dashboard එක (URL: /dashboard) */}
          <Route path="/dashboard" element={<HomeownerDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
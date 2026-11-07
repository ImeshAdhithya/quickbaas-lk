import React, { useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import HomeownerDashboard from './pages/HomeownerDashboard';
import './App.css';

function App() {
  // 'home', 'login', or 'dashboard' ලෙස page එක මාරු කරගන්න state එක
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      {currentPage === 'home' && (
        <Home 
          onLoginClick={() => setCurrentPage('login')} 
        />
      )}

      {currentPage === 'login' && (
        <Login 
          onLoginSuccess={() => setCurrentPage('dashboard')}
          onNavigateToRegister={() => alert('Navigate to Register page')} 
        />
      )}

      {currentPage === 'dashboard' && (
        <HomeownerDashboard />
      )}
    </div>
  );
}

export default App;
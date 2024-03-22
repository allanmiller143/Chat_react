import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from '../Pages/LoginPage/LoginPage';
import ChatPage from '../Pages/ChatPage/ChatPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/chatPage" element={<ChatPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "react-hot-toast";

import LandingPage from './pages/LandingPage';
import Dashboard from "./pages/Home/Dashboard";
import InterviewPrep from "./pages/InterviewPrep/InterviewPrep";
import UserProvider from './context/userContext';
import ProtectedRoute from './components/ProtectedRoute'
import Forbidden from './pages/Forbidden';
const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/forbidden" element={<Forbidden />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/interview-prep/:sessionId"
            element={
              <ProtectedRoute>
                <InterviewPrep />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </UserProvider>





  )
}

export default App

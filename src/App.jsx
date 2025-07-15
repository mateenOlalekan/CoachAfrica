import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Dashboard from './Pages/Dashboard';
import DashboardOverview from './Pages/Dashboard/Overview';
import DashboardProfile from './Pages/Dashboard/Profile';
import DashboardSessions from './Pages/Dashboard/Sessions';
import DashboardSettings from './Pages/Dashboard/Settings';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import NotFound from './Pages/NotFound';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#029837]"></div>
      </div>
    );
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar isAuthenticated={isAuthenticated} />
        <main className="flex-grow">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/register" element={<Register setIsAuthenticated={setIsAuthenticated} />} />

            {/* Protected Dashboard Routes */}
            <Route
              path="/dashboard"
              element={
                isAuthenticated ? (
                  <Dashboard setIsAuthenticated={setIsAuthenticated} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            >
              <Route index element={<DashboardOverview />} />
              <Route path="overview" element={<DashboardOverview />} />
              <Route path="profile" element={<DashboardProfile />} />
              <Route path="sessions" element={<DashboardSessions />} />
              <Route path="settings" element={<DashboardSettings />} />
            </Route>

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Certify from './pages/Certify';
import Internships from './pages/Internships.jsx';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Guest from './pages/Guest';
import New from './pages/New';
import Documentation from './pages/documentation';
import Labs from './pages/Labs';
import LoadingScreen from './components/LoadingScreen';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import EventDetailsPage from './pages/EventDetails';

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';
  const isDashboardPage = location.pathname === '/dashboard';
  const hideNavbar = isLoginPage || isRegisterPage || isDashboardPage;

  return (
    <div className="min-h-screen bg-slate-900">
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/certify" element={<Certify />} />
        <Route path="/new" element={<New />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/guest" element={<Guest />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/event/:slug" element={<EventDetailsPage />} /> 
      </Routes>
      {!hideNavbar && <Footer />}
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen isLoading={isLoading} onLoadingComplete={() => setIsLoading(false)} />;
  }

  return <AppContent />;
}

export default App;

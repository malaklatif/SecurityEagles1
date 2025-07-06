import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Certify from './pages/Certify';
import Internships from './pages/Internships';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Guest from './pages/Guest';
import New from './pages/New';
import Documentation from './pages/documentation';
import Labs from './pages/Labs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/certify" element={<Certify />} />
          <Route path="/new" element={<New />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/guest" element={<Guest />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/labs" element={<Labs />} />
        </Routes>
      </div>
      <footer/>
    </Router>
  );
}

export default App;

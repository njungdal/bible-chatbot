import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import RetreatInfo from './pages/RetreatInfo';
import OnlineRetreat from './pages/OnlineRetreat';
import DayDetail from './pages/DayDetail';
import Video from './pages/Video';
import Team from './pages/Team';
import Memo from './pages/Memo';
import Chatbot from './pages/Chatbot';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1>마중물젊은이공동체 2026 겨울수련회</h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/retreat-info" element={<RetreatInfo />} />
          <Route path="/online-retreat" element={<OnlineRetreat />} />
          <Route path="/online-retreat/:day" element={<DayDetail />} />
          <Route path="/video" element={<Video />} />
          <Route path="/team" element={<Team />} />
          <Route path="/memo" element={<Memo />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

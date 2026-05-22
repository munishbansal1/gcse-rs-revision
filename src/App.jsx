import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExperiencingGod from './pages/ExperiencingGod';
import LifeAfterDeath from './pages/LifeAfterDeath';
import ExistenceOfGod from './pages/ExistenceOfGod';
import NatureOfGod from './pages/NatureOfGod';
import ProblemOfEvil from './pages/ProblemOfEvil';
import './index.css';

export default function App() {
  return (
    <HashRouter>
      <div className="site-wrap">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experiencing-god" element={<ExperiencingGod />} />
            <Route path="/life-after-death" element={<LifeAfterDeath />} />
            <Route path="/existence-of-god" element={<ExistenceOfGod />} />
            <Route path="/nature-of-god" element={<NatureOfGod />} />
            <Route path="/problem-of-evil" element={<ProblemOfEvil />} />
          </Routes>
        </main>
        <footer className="site-footer">
          <p>GCSE Religious Studies Revision &mdash; AQA Specification &mdash; Good luck in your exam!</p>
        </footer>
      </div>
    </HashRouter>
  );
}

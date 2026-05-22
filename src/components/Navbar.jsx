import { Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/experiencing-god', label: 'Experiencing God' },
  { to: '/life-after-death', label: 'Life After Death' },
  { to: '/existence-of-god', label: 'Existence of God' },
  { to: '/nature-of-god', label: 'Nature of God' },
  { to: '/problem-of-evil', label: 'Problem of Evil' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <Link to="/" className="nav-brand">GCSE RS Revision</Link>
        <div className="nav-links">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={pathname === l.to ? 'active' : ''}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

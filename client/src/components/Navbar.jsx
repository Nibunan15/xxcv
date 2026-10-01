// Port the full design from design/Navbar.dc.html (mega-menus, theme switch, mobile drawer).
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
const LINKS = [{"label":"Home","to":"/"},{"label":"Programs","to":"/programs"},{"label":"Cybernaut SaaS","to":"/saas"},{"label":"About","to":"/about"},{"label":"Events","to":"/events"},{"label":"Resources","to":"/resources"}];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #EEF2F8' }}>
      <nav style={{ maxWidth: 1280, margin: '0 auto', padding: '14px clamp(20px,5vw,56px)', display: 'flex', alignItems: 'center', gap: 24 }}>
        <Link to="/"><img src="/cybernaut-logo.webp" alt="Cybernaut" style={{ height: 34 }} /></Link>
        <ul style={{ display: 'flex', gap: 22, listStyle: 'none', marginLeft: 'auto' }} className="nav-desk">
          {LINKS.map((l) => (
            <li key={l.to}><NavLink to={l.to} end style={({ isActive }) => ({ fontSize: 14, fontWeight: 500, color: isActive ? '#2F7BFF' : '#0A1124' })}>{l.label}</NavLink></li>
          ))}
        </ul>
        <Link to="/contact" style={{ padding: '11px 20px', borderRadius: 100, background: 'linear-gradient(135deg,#2F7BFF,#1FD3E8)', color: '#fff', fontSize: 14, fontWeight: 600 }}>Get started</Link>
        <button aria-label="Menu" onClick={() => setOpen(!open)} className="nav-burger" style={{ display: 'none' }}>☰</button>
      </nav>
      {open && <div style={{ padding: 20 }}>{LINKS.map((l) => <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} style={{ display: 'block', padding: '10px 0' }}>{l.label}</NavLink>)}</div>}
    </header>
  );
}

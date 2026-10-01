// Port the full design from design/Footer.dc.html.
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer style={{ background: '#05070D', color: '#93a0b5', padding: '64px clamp(20px,5vw,56px) 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'space-between' }}>
        <img src="/footer-logo.webp" alt="Cybernaut" style={{ height: 40 }} />
        <nav style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          <Link to="/programs">Programs</Link><Link to="/saas">Cybernaut SaaS</Link><Link to="/about">About</Link><Link to="/events">Events</Link><Link to="/resources">Resources</Link><Link to="/contact">Contact</Link>
        </nav>
      </div>
      <p style={{ maxWidth: 1280, margin: '40px auto 0', fontSize: 13 }}>© {new Date().getFullYear()} Cybernaut EdTech. We Create Leaders not Employees.</p>
    </footer>
  );
}

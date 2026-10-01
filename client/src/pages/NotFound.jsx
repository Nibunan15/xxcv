import { Link } from 'react-router-dom';
export default function NotFound() {
  return (<section style={{ padding: '120px 20px', textAlign: 'center' }}><h1>Page not found</h1><p style={{ marginTop: 12 }}><Link to="/">Back to home</Link></p></section>);
}

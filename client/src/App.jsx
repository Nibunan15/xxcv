import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Programs from './pages/Programs.jsx';
import CybernautSaas from './pages/CybernautSaas.jsx';
import About from './pages/About.jsx';
import Events from './pages/Events.jsx';
import Resources from './pages/Resources.jsx';
import GetStarted from './pages/GetStarted.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/saas" element={<CybernautSaas />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<GetStarted />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

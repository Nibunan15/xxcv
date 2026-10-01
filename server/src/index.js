import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import mongoose from 'mongoose';
import leads from './routes/leads.js';
import events from './routes/events.js';
import programs from './routes/programs.js';
import resources from './routes/resources.js';
import auth from './routes/auth.js';
import { mountWeb, routes } from './web.js';

const app = express();
app.use(compression());
app.use(cors({ origin: process.env.CLIENT_ORIGIN || '*' }));
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) => res.json({ ok: true, db: mongoose.connection.readyState === 1 }));
app.use('/api/leads', leads);         // Contact + SaaS "Start a conversation"
app.use('/api/events', events);       // Events list + registration
app.use('/api/programs', programs);   // Programs marketplace
app.use('/api/resources', resources); // Resources page
app.use('/api/auth', auth);           // Login (student / college / business)

mountWeb(app);                        // the full website, pixel-identical to the design

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Server error' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Cybernaut on http://localhost:${PORT}  (${routes.length} pages)`));
if (process.env.MONGO_URI) {
  mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected')).catch((e) => console.error('MongoDB connection failed:', e.message));
} else {
  console.warn('MONGO_URI not set: website works, /api routes that need the database will fail.');
}

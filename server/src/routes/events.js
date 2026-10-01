import { Router } from 'express';
import Event from '../models/Event.js';
const r = Router();
r.get('/', async (_req, res, next) => { try { res.json(await Event.find({}, '-registrations').sort({ date: 1 })); } catch (e) { next(e); } });
r.get('/:slug', async (req, res, next) => { try { const ev = await Event.findOne({ slug: req.params.slug }, '-registrations'); ev ? res.json(ev) : res.sendStatus(404); } catch (e) { next(e); } });
r.post('/:slug/register', async (req, res, next) => {
  try {
    const ev = await Event.findOne({ slug: req.params.slug });
    if (!ev) return res.sendStatus(404);
    ev.registrations.push(req.body); await ev.save();
    res.status(201).json({ ok: true });
  } catch (e) { next(e); }
});
export default r;

import { Router } from 'express';
import Program from '../models/Program.js';
const r = Router();
r.get('/', async (req, res, next) => { try { const q = req.query.audience ? { audience: req.query.audience } : {}; res.json(await Program.find(q)); } catch (e) { next(e); } });
r.get('/:slug', async (req, res, next) => { try { const p = await Program.findOne({ slug: req.params.slug }); p ? res.json(p) : res.sendStatus(404); } catch (e) { next(e); } });
export default r;

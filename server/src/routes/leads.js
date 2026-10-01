import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import Lead from '../models/Lead.js';
const r = Router();
r.post('/',
  body('name').trim().notEmpty(), body('email').isEmail(),
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    try { const lead = await Lead.create(req.body); res.status(201).json({ id: lead._id }); } catch (e) { next(e); }
  });
r.get('/', async (_req, res, next) => { try { res.json(await Lead.find().sort({ createdAt: -1 }).limit(200)); } catch (e) { next(e); } });
export default r;

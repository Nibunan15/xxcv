import { Router } from 'express';
import Resource from '../models/Resource.js';
const r = Router();
r.get('/', async (_req, res, next) => { try { res.json(await Resource.find().sort({ createdAt: -1 })); } catch (e) { next(e); } });
export default r;

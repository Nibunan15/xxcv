import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
const r = Router();
const sign = (u) => jwt.sign({ id: u._id, role: u.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
r.post('/register', async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' });
    const user = await User.create({ name, email, role, password: await bcrypt.hash(password, 10) });
    res.status(201).json({ token: sign(user), role: user.role });
  } catch (e) { next(e); }
});
r.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({ email: (req.body.email || '').toLowerCase() });
    if (!user || !(await bcrypt.compare(req.body.password || '', user.password))) return res.status(401).json({ error: 'Login failed.' });
    res.json({ token: sign(user), role: user.role });
  } catch (e) { next(e); }
});
export default r;

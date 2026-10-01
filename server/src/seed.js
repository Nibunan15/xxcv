import 'dotenv/config';
import mongoose from 'mongoose';
import Program from './models/Program.js';
import Event from './models/Event.js';
await mongoose.connect(process.env.MONGO_URI);
await Program.deleteMany({}); await Event.deleteMany({});
await Program.insertMany([
  { slug: 'tech-trio', title: 'Tech Trio', audience: 'students', track: 'foundation' },
  { slug: 'programming-foundations', title: 'Programming Foundations', audience: 'students', track: 'foundation' },
  { slug: 'full-stack-development', title: 'Full Stack Development', audience: 'students', track: 'professional' },
  { slug: 'data-analytics', title: 'Data Analytics', audience: 'students', track: 'professional' },
  { slug: 'ui-ux-design', title: 'UI/UX Design', audience: 'students', track: 'professional' },
  { slug: 'ai-machine-learning', title: 'AI & Machine Learning', audience: 'students', track: 'professional' },
  { slug: 'cybersecurity', title: 'Cybersecurity', audience: 'students', track: 'professional' },
  { slug: 'generative-ai', title: 'Generative AI', audience: 'college', track: 'vac' },
  { slug: 'prompt-engineering', title: 'Prompt Engineering', audience: 'college', track: 'vac' },
  { slug: 'ai-agents', title: 'AI Agents', audience: 'college', track: 'vac' },
  { slug: '1-year', title: 'Placement Training, 1-Year', audience: 'college', track: 'placement' },
  { slug: '2-year', title: 'Placement Training, 2-Year', audience: 'college', track: 'placement' },
  { slug: '4-year', title: 'Placement Training, 4-Year', audience: 'college', track: 'placement' }
]);
await Event.insertMany([
  { slug: 'cyberhack-sprint', title: 'CyberHack Sprint', meta: '36-hour build weekend · Coimbatore', badge: 'TBA' },
  { slug: 'campus-innovation-drive', title: 'Campus Innovation Drive', meta: 'Partner colleges across Tamil Nadu', badge: 'TBA' },
  { slug: 'founders-mentors-session', title: 'Founders & Mentors Session', meta: 'Online · Aarvam community', badge: 'TBA' }
]);
console.log('Seeded'); process.exit(0);

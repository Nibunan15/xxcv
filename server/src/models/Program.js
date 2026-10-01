import mongoose from 'mongoose';
const Program = new mongoose.Schema({
  slug: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  audience: { type: String, enum: ['students', 'college'] },
  track: String,          // foundation | professional | vac | placement
  duration: String, level: String, summary: String, cover: String,
  modules: [String]
}, { timestamps: true });
export default mongoose.model('Program', Program);

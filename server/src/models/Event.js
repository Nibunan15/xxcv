import mongoose from 'mongoose';
const Registration = new mongoose.Schema({ name: String, email: String, phone: String, college: String }, { timestamps: true });
const Event = new mongoose.Schema({
  slug: { type: String, unique: true, required: true },
  title: { type: String, required: true },
  category: String, meta: String, badge: String,
  date: Date, location: String, cover: String, description: String,
  registrations: [Registration]
}, { timestamps: true });
export default mongoose.model('Event', Event);

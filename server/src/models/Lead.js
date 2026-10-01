import mongoose from 'mongoose';
const Lead = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  phone: { type: String, trim: true },
  role: { type: String, enum: ['student', 'college', 'business', 'other'], default: 'other' },
  interest: { type: String, trim: true },   // program / service picked
  message: { type: String, trim: true },
  source: { type: String, default: 'contact' } // contact | saas | programs | events
}, { timestamps: true });
export default mongoose.model('Lead', Lead);

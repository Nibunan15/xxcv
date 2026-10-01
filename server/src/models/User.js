import mongoose from 'mongoose';
const User = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'college', 'business'], default: 'student' }
}, { timestamps: true });
export default mongoose.model('User', User);

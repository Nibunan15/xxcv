import mongoose from 'mongoose';
const Resource = new mongoose.Schema({ title: String, type: String, url: String, tag: String, summary: String }, { timestamps: true });
export default mongoose.model('Resource', Resource);

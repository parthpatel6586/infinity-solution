import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    client: { type: String },
    year: { type: Number },
    images: [{ type: String }],
    featuredImage: { type: String },
    technologies: [{ type: String }],
    results: [{ type: String }],
  },
  { timestamps: true }
);

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);

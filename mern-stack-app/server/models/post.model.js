import mongoose from 'mongoose';
import slugify from 'slugify';

const PostSchema = new mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    image: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    date: { type: Date, default: Date.now }
  },
  {
    strict: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

PostSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true, strict: true });
  next();
});

// Export the model
export default mongoose.model('Post', PostSchema);

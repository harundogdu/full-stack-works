import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    user: {
      name: { type: String, required: true },
      surname: { type: String, required: true },
      username: { type: String, required: true, unique: true }
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now }
  },
  {
    strict: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
  }
);

// Export the model
export default mongoose.model('User', UserSchema);

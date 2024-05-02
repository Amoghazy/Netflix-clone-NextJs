import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: false,
  },
  provider: {
    type: String,
    required: true,
  },
});

export default mongoose.models.User || mongoose.model("User", userSchema);

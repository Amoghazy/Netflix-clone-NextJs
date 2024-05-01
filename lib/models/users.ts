import mongoose from "mongoose";

const schema = {
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: false,
  },
  provider: {
    type: String,
    require: true,
  },
};
export default mongoose.models.User || mongoose.model("User", schema);

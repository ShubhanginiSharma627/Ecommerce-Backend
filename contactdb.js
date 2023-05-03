
import mongoose from "mongoose";
const messageSchema = mongoose.Schema({
  name: String,
  email:String,
  message: String
});

export default mongoose.model("messagecontents", messageSchema);
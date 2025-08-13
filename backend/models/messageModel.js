import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    meta_msg_id: { type: String },
    from: String,
    to: String,
    timestamp: String,
    text: String,
    status: { type: String, default: "received" },
    name: String,
  },
  { timestamps: true }
);

export default mongoose.model(
  "ProcessedMessage",
  messageSchema,
  "processed_messages"
);

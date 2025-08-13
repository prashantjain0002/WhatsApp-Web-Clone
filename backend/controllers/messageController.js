import { createMessage, getGroupedMessages } from "../services/messageService.js";

export async function getMessages(req, res) {
  try {
    const data = await getGroupedMessages(process.env.OUR_NUMBER);
    res.json(data);
  } catch (err) {
    console.error("Error fetching conversations:", err);
    res.status(500).json({ error: "Server error" });
  }
}

export async function postMessage(req, res) {
  try {
    const { wa_id, text } = req.body;

    if (!wa_id || !text) {
      return res.status(400).json({ error: "wa_id and text are required" });
    }

    const newMessage = await createMessage(process.env.OUR_NUMBER, wa_id, text);
    res.json(newMessage);
  } catch (err) {
    console.error("Error saving message:", err);
    res.status(500).json({ error: "Server error" });
  }
}


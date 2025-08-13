import { getGroupedMessages } from "../services/messageService.js";

export async function getMessages(req, res) {
  try {
    const data = await getGroupedMessages(process.env.OUR_NUMBER);
    res.json(data);
  } catch (err) {
    console.error("Error fetching conversations:", err);
    res.status(500).json({ error: "Server error" });
  }
}

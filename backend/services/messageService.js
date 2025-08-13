import ProcessedMessage from "../models/messageModel.js";

export async function getGroupedMessages(ourNumber) {
  const messages = await ProcessedMessage.find().sort({ timestamp: 1 });

  const grouped = {};

  messages.forEach((msg) => {
    const wa_id = msg.from === ourNumber ? msg.to : msg.from;
    if (!grouped[wa_id]) {
      grouped[wa_id] = { wa_id, name: msg.name || "", messages: [] };
    }

    grouped[wa_id].messages.push({
      id: msg.id,
      from: msg.from,
      to: msg.to,
      timestamp: Number(msg.timestamp),
      text: msg.text,
      status: msg.status,
    });
  });

  return Object.values(grouped);
}

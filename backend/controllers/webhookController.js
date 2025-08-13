import ProcessedMessage from "../models/messageModel.js";

export const processPayload = async (payload) => {
  try {
    let messages = [];
    let statuses = [];

    if (payload?.metaData?.entry?.length) {
      payload.metaData.entry.forEach((entry) => {
        entry.changes?.forEach((change) => {
          const value = change.value || {};

          if (value.messages) {
            messages.push(...value.messages);
          }

          if (value.statuses) {
            statuses.push(...value.statuses);
          }
        });
      });
    }

    console.log(
      `📝 Found ${messages.length} messages and ${statuses.length} statuses`
    );

    // Insert new messages
    for (const msg of messages) {
      const contactName =
        payload.metaData?.entry?.[0]?.changes?.[0]?.value?.contacts?.[0]
          ?.profile?.name || "";

      const messageData = {
        id: msg.id,
        meta_msg_id: msg.context?.id || msg.meta_msg_id || null,
        from: msg.from,
        to: msg.to || null,
        timestamp: msg.timestamp,
        text: msg.text?.body || "",
        status: "received",
        name: contactName,
      };

      console.log("⬆️ Inserting message:", messageData);

      await ProcessedMessage.updateOne(
        { id: messageData.id },
        { $setOnInsert: messageData },
        { upsert: true }
      );
    }

    // Update message statuses
    for (const status of statuses) {
      console.log("🔄 Updating status:", status);
      const query = status.id
        ? { id: status.id }
        : { meta_msg_id: status.meta_msg_id };

      await ProcessedMessage.updateOne(query, {
        $set: { status: status.status },
      });
    }
  } catch (err) {
    console.error("❌ Error processing payload:", err);
    throw err;
  }
};

export default {
  processPayload,
};

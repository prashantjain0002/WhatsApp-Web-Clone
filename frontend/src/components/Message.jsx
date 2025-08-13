import React from "react";
import { Check, CheckCheck } from "lucide-react";

const ME = "918329446654"; // your own number for comparison

const Message = ({ message }) => {

  const isMe = message.from === ME;

  const formatTime = (ts) => {
    if (!ts) return "";
    const date = new Date(ts * 1000);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  // Decide which tick(s) to show for my messages based on status
  const renderTicks = (status) => {
    switch (status) {
      case "sent":
        return <Check size={15} className="text-gray-500" />;
      case "delivered":
        return <CheckCheck size={15} className="text-gray-500" />;
      case "read":
        return <CheckCheck size={15} className="text-blue-500" />;
      default:
        return null;
    }
  };

  // Bubble for sent messages
  if (isMe) {
    return (
      <div className="flex justify-end mb-1 px-2">
        <div
          className="bg-[#DCF8C6] text-black px-3 py-2 rounded-2xl max-w-sm shadow"
          style={{ borderBottomRightRadius: "5px" }}
        >
          <div className="text-sm">{message.text}</div>
          <div className="flex items-center justify-end mt-1 space-x-1">
            <span className="text-xs text-gray-600">
              {formatTime(message.timestamp)}
            </span>
            {renderTicks(message.status)}
          </div>
        </div>
      </div>
    );
  }

  // Bubble for received messages
  return (
    <div className="flex justify-start mb-1 px-2">
      <div
        className="bg-white text-black px-3 py-2 rounded-2xl max-w-sm shadow"
        style={{ borderBottomLeftRadius: "5px" }}
      >
        <div className="text-sm">{message.text}</div>
        <div className="text-xs text-gray-600 mt-1 text-right">
          {formatTime(message.timestamp)}
        </div>
      </div>
    </div>
  );
};

export default Message;

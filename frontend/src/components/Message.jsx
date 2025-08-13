import React from "react";
import { CheckCheck, Phone } from "lucide-react";

const Message = ({ message }) => {
  if (message.type === "date") {
    return (
      <div className="flex justify-center my-3">
        <div className="bg-white px-3 py-1 rounded text-xs text-[#808080] shadow">
          {message.content}
        </div>
      </div>
    );
  }
  if (message.type === "call") {
    return (
      <div className="flex justify-center my-2">
        <div className="bg-white px-4 py-2 rounded text-xs flex items-center shadow border border-gray-200">
          <Phone size={16} className="text-[#25D366]" />
          <span className="ml-2">
            {message.content} — {message.details}
          </span>
        </div>
      </div>
    );
  }
  if (message.type === "status") {
    return (
      <div className="flex justify-center my-2">
        <div className="bg-[#F4F4F4] px-4 py-1 rounded text-xs text-[#4A4A4A] border shadow max-w-lg text-center">
          {message.content}
        </div>
      </div>
    );
  }
  const sentBubble = (
    <div className="flex justify-end mb-1 px-2">
      <div
        className="bg-[#DCF8C6] text-black px-3 py-2 rounded-2xl rounded-br-sm max-w-sm shadow"
        style={{ borderBottomRightRadius: "5px" }}
      >
        <div className="text-sm">{message.content}</div>
        <div className="flex items-center justify-end mt-1">
          <span className="text-xs text-gray-600">{message.timestamp}</span>
          <span className="text-xs text-blue-400 ml-1"> <CheckCheck size={15}/></span>
        </div>
      </div>
    </div>
  );
  const receivedBubble = (
    <div className="flex justify-start mb-1 px-2">
      <div
        className="bg-white text-black px-3 py-2 rounded-2xl rounded-bl-sm max-w-sm shadow"
        style={{ borderBottomLeftRadius: "5px" }}
      >
        <div className="text-sm">{message.content}</div>
        <div className="text-xs text-gray-600 mt-1 text-right">
          {message.timestamp}
        </div>
      </div>
    </div>
  );
  if (message.type === "sent") return sentBubble;
  if (message.type === "received") return receivedBubble;
  return null;
};
export default Message;

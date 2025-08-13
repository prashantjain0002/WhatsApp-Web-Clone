import React from "react";

export default function MessageBubble({ message, isMe }) {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "sent":
        return (
          <svg
            className="w-4 h-4 text-[#667781]"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
          </svg>
        );
      case "delivered":
        return (
          <div className="flex">
            <svg
              className="w-4 h-4 text-[#667781]"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
            </svg>
            <svg
              className="w-4 h-4 text-[#667781] -ml-1"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
            </svg>
          </div>
        );
      case "read":
        return (
          <div className="flex">
            <svg
              className="w-4 h-4 text-[#25d366]"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
            </svg>
            <svg
              className="w-4 h-4 text-[#25d366] -ml-1"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`flex mb-4 ${isMe ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-xs lg:max-w-md ${isMe ? "order-2" : "order-1"}`}>
        <div
          className={`px-4 py-2 rounded-lg shadow-sm ${
            isMe
              ? "bg-[#dcf8c6] text-[#111b21] rounded-br-none"
              : "bg-white text-[#111b21] rounded-bl-none"
          }`}
        >
          <p className="text-sm whitespace-pre-wrap break-words">
            {message.text}
          </p>

          <div
            className={`flex items-center mt-1 gap-1 ${
              isMe ? "justify-end" : "justify-start"
            }`}
          >
            <span className="text-xs text-[#667781]">
              {formatTime(message.timestamp)}
            </span>
            {isMe && (
              <div className="flex items-center">
                {getStatusIcon(message.status)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

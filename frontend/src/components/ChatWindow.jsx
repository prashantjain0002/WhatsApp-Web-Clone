import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import MessageBubble from "./MessageBubble";

const ME = "918329446654"; // Your number (mock for frontend)

export default function ChatWindow({ conversation }) {
  const bottomRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [localMessages, setLocalMessages] = useState(
    conversation?.messages || []
  );

  // Scroll to bottom when messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [localMessages]);

  // Send message locally without backend
  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newMsg = {
      id: `temp-${Date.now()}`,
      from: ME,
      to: conversation.wa_id,
      timestamp: Math.floor(Date.now() / 1000),
      text: inputValue,
      status: "sent",
    };

    setLocalMessages((prev) => [...prev, newMsg]);
    setInputValue("");
  };

  // Send on Enter (Shift+Enter for newline)
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Check if message is from me
  const isMyMessage = (message) => {
    const normalizeNumber = (num) =>
      num?.toString().replace(/[\s\-\+]/g, "") || "";

    return normalizeNumber(ME) === normalizeNumber(message.from);
  };

  // Sort messages by time
  const messages = [...localMessages].sort(
    (a, b) => (a.timestamp || 0) - (b.timestamp || 0)
  );

  return (
    <div className="flex-1 flex flex-col h-screen">
      <Header conversation={conversation} />

      {/* Chat background */}
      <div
        className="flex-1 overflow-auto bg-[#efeae2] px-4"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d9d9d9' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="max-w-4xl mx-auto py-4">
          {messages.length === 0 && (
            <div className="text-center text-[#667781] mt-8 text-sm">
              <div className="bg-[#e7f3ff] px-4 py-2 rounded-lg inline-block border border-[#b8daff]">
                Messages are end-to-end encrypted.
              </div>
            </div>
          )}

          {messages.map((msg) => (
            <MessageBubble
              key={msg.id + msg.timestamp}
              message={msg}
              isMe={isMyMessage(msg)}
              meNumber={ME}
              conversationWaId={conversation.wa_id}
            />
          ))}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input bar */}
      <div className="bg-[#f0f2f5] px-4 py-3 border-t border-[#e9edef]">
        <div className="max-w-4xl mx-auto flex items-end gap-2">
          <div className="flex-1 bg-white rounded-lg border border-[#e9edef] px-3 py-2 focus-within:border-[#25d366] transition-colors">
            <textarea
              rows={1}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type a message"
              className="w-full resize-none outline-none text-[#111b21] placeholder-[#667781] text-sm"
              style={{ minHeight: "20px", maxHeight: "80px" }}
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height =
                  Math.min(e.target.scrollHeight, 80) + "px";
              }}
            />
          </div>

          {inputValue.trim() ? (
            <button
              onClick={handleSend}
              className="p-2 bg-[#25d366] hover:bg-[#128c7e] rounded-full transition-colors"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          ) : (
            <button className="p-2 hover:bg-[#f5f6f6] rounded-full transition-colors">
              <svg
                className="w-6 h-6 text-[#54656f]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

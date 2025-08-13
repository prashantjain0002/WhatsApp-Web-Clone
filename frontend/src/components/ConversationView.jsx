import React, { useEffect, useRef, useState } from "react";
import {
  Phone,
  Video,
  MoreVertical,
  ArrowLeft,
  Smile,
  Paperclip,
  Mic,
  Send,
} from "lucide-react";
import Message from "./Message";

const ME = "918329446654";

const ConversationView = ({ selectedChat, onBack, onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [localMessages, setLocalMessages] = useState([]);
  const endRef = useRef(null);

  // Load chat messages when a new chat is opened & scroll to bottom
  useEffect(() => {
    if (selectedChat?.messages) {
      setLocalMessages(selectedChat.messages);
      setTimeout(() => {
        endRef.current?.scrollIntoView({ behavior: "auto" });
      }, 50); 
    }
  }, [selectedChat]);

  // Scroll to bottom when new messages are appended
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [localMessages]);

  const handleSend = async () => {
    if (!message.trim()) return;

    const now = Math.floor(Date.now() / 1000);

    // temp local message for instant UI feedback
    const newMessage = {
      id: `temp-${now}`,
      from: ME,
      to: selectedChat.wa_id || null,
      text: message,
      timestamp: now,
      status: "sent",
    };

    setLocalMessages((prev) => [...prev, newMessage]);
    setMessage("");

    try {
      await onSendMessage(message); // parent will update backend
    } catch (err) {
      console.error("Send failed:", err);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!selectedChat) return null;

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header - always visible */}
      <div className="flex items-center justify-between px-4 py-3 bg-white text-black shadow flex-shrink-0">
        <div className="flex items-center flex-1">
          <button onClick={onBack} className="p-1 rounded-full mr-2 md:hidden">
            {/* md:hidden = show back button only on phone */}
            <ArrowLeft size={22} />
          </button>
          <img
            src={
              selectedChat.avatar ||
              "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
            }
            alt={selectedChat.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="ml-3">
            <h2 className="font-semibold text-black text-base">
              {selectedChat.name}
            </h2>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2">
            <Phone size={22} />
          </button>
          <button className="p-2">
            <Video size={22} />
          </button>
          <button className="p-2">
            <MoreVertical size={22} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto py-2"
        style={{
          backgroundColor: "#ECE5DD",
          backgroundImage: `url("https://i.pinimg.com/474x/50/35/be/5035be08b845784629ccd2a76119b40e.jpg")`,
        }}
      >
        <div className="space-y-1 px-2">
          {localMessages.map((msg, i) => (
            <Message key={msg.id || i} message={msg} meNumber={ME} />
          ))}
          <div ref={endRef} />
        </div>
      </div>

      {/* Input */}
      <div className="bg-[#F6F6F6] px-2 py-3 flex-shrink-0">
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-200 rounded-full">
            <Smile size={22} />
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type a message"
              className="w-full px-4 py-2 rounded-full bg-white border border-gray-300 focus:outline-none focus:border-[#25D366] text-sm"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-600">
              <Paperclip size={18} />
            </button>
          </div>
          {message.trim() ? (
            <button
              onClick={handleSend}
              className="p-3 bg-[#25D366] hover:bg-green-700 rounded-full text-white"
            >
              <Send size={18} />
            </button>
          ) : (
            <button className="p-3 hover:bg-gray-200 rounded-full text-gray-600">
              <Mic size={22} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConversationView;

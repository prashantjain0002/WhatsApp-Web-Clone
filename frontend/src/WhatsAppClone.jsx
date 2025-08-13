import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ConversationView from "./components/ConversationView";
import { MessageSquare, Lock } from "lucide-react"; // ✅ Added Lock icon

const WhatsAppClone = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  const chats = [
    {
      id: 1,
      name: "Prashant Jain (You)",
      message: "JavaScript hand Written Notes.p...",
      time: "Yesterday",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      hasAttachment: true,
      isOnline: false,
      lastSeen: "2 hours ago",
    },
    {
      id: 2,
      name: "The place of learning 2.1",
      message: "~Sunil Kumar: 📷 Image",
      time: "11:19 AM",
      avatar:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=40&h=40&fit=crop&crop=face",
      isOnline: true,
    },
    {
      id: 3,
      name: "Anand Waghel (UEC)",
      message: "Or kya chal rha h",
      time: "10:46 AM",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      hasCheckmark: true,
      isOnline: false,
      lastSeen: "1 hour ago",
    },
    {
      id: 4,
      name: "10th,12th Open admission Job...",
      message: "Sanjeev: फीस एक एप्लीकेशन न निचे...",
      time: "09:57 AM",
      avatar:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&crop=face",
      isGroup: true,
      isOnline: true,
    },
    {
      id: 5,
      name: "Ronak",
      message: "Hm",
      time: "09:54 AM",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      isOnline: true,
    },
  ];

  const handleChatSelect = (chat) => {
    console.log("Chat selected:", chat);
    setSelectedChat(chat);
  };

  const handleBack = () => {
    setSelectedChat(null);
  };

  const handleSendMessage = (message) => {
    console.log("Sending message:", message);
  };

  return (
    <div className="flex h-screen bg-gray-100 relative">
      {/* Sidebar */}
      <div
        className={`${
          selectedChat ? "hidden md:flex" : "flex"
        } w-full md:w-80 flex-col bg-white border-r border-gray-200`}
      >
        <Sidebar
          chats={chats}
          selectedChat={selectedChat}
          onChatSelect={handleChatSelect}
        />
      </div>

      {/* Main Content or Conversation */}
      <div
        className={`${
          selectedChat ? "flex" : "hidden md:flex"
        } flex-1 flex-col`}
      >
        {selectedChat ? (
          <ConversationView
            selectedChat={selectedChat}
            onBack={handleBack}
            onSendMessage={handleSendMessage}
          />
        ) : (
          <MainContent />
        )}
      </div>
    </div>
  );
};

export default WhatsAppClone;

// ✅ Moved MainContent as a named export here
export const MainContent = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 relative">
      <div className="text-center max-w-md mx-auto">
        {/* WhatsApp Logo */}
        <div className="mb-8">
          <div className="w-32 h-32 bg-green-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
            <MessageSquare size={64} className="text-white" />
          </div>
        </div>

        {/* Main Text */}
        <h2 className="text-3xl font-light text-gray-800 mb-4">
          WhatsApp for Windows
        </h2>

        <p className="text-gray-600 mb-2 text-sm leading-relaxed">
          Send and receive messages without keeping your phone online.
        </p>

        <p className="text-gray-600 text-sm leading-relaxed">
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
        </p>
      </div>

      {/* Bottom encryption notice */}
      <div className="absolute bottom-4 flex items-center text-gray-500 text-xs">
        <Lock size={12} className="mr-1" />
        <span>End-to-end encrypted</span>
      </div>
    </div>
  );
};

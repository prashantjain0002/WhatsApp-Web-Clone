import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ConversationView from "./components/ConversationView";
import { MessageSquare, Lock } from "lucide-react";
import { fetchConversations, sendMessage } from "./services/messageService";

const WhatsAppClone = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const loadChats = async () => {
      try {
        const data = await fetchConversations();
        setChats(data);
      } catch (error) {
        console.error("Error loading chats:", error);
      }
    };
    loadChats();
  }, []);

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };

  const handleBack = () => {
    setSelectedChat(null);
  };

  const handleSendMessage = async (messageText) => {
    if (!selectedChat) return;
    try {
      const newMessage = await sendMessage(selectedChat.wa_id, messageText);

      // Update chat messages locally (basic version)
      setChats((prev) =>
        prev.map((c) =>
          c.wa_id === selectedChat.wa_id
            ? { ...c, messages: [...(c.messages || []), newMessage] }
            : c
        )
      );
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };
  
  
  return (
    <div className="flex h-screen bg-gray-100 relative">
      {/* Sidebar */}{" "}
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

// MainContent component unchanged

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

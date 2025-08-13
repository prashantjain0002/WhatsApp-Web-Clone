import React from "react";
import {
  Check,
  CheckCheck,
  MessageSquare,
  MoreVertical,
  Search,
} from "lucide-react";

const Sidebar = ({ chats, selectedChat, onChatSelect }) => {
  const ChatItem = ({ chat, isSelected, onClick }) => {
    const formatTime = (timestamp) => {
      if (!timestamp) return "";
      const date = new Date(timestamp * 1000);
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    };

    const lastMessage =
      chat.messages && chat.messages.length > 0
        ? chat.messages[chat.messages.length - 1]
        : null;

    const renderTicks = (status) => {
      switch (status) {
        case "sent":
          return <Check size={15} className="text-gray-400" />;
        case "delivered":
          return <CheckCheck size={15} className="text-gray-400" />;
        case "read":
          return <CheckCheck size={15} className="text-blue-500" />;
        default:
          return null;
      }
    };

    return (
      <div
        className={`flex items-center p-3 cursor-pointer border-b border-gray-50 transition-colors ${
          isSelected ? "bg-gray-200" : "hover:bg-gray-50"
        }`}
        onClick={() => onClick(chat)}
      >
        <div className="relative flex-shrink-0">
          <img
            src={
              chat.avatar ||
              "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png"
            }
            alt={chat.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>

        <div className="ml-3 flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-gray-900 truncate text-sm">
              {chat.name}
              {chat.hasBlueCheckmark && (
                <span className="ml-1 text-blue-500">✓</span>
              )}
            </h3>
            <span className="text-xs text-gray-500 ml-2 flex-shrink-0">
              {lastMessage ? formatTime(lastMessage.timestamp) : chat.time}
            </span>
          </div>

          <div className="flex items-center mt-1">
            <p className="text-sm text-gray-600 truncate flex items-center gap-1">
              {lastMessage?.status && renderTicks(lastMessage.status)}
              {lastMessage ? lastMessage.text : ""}
            </p>
          </div>
        </div>
      </div>
    );
  };

  const ChatList = ({ chats, selectedChat, onChatSelect }) => (
    <div className="flex-1 overflow-y-auto">
      {chats.map((chat) => (
        <ChatItem
          key={chat.wa_id}
          chat={chat}
          isSelected={selectedChat?.wa_id === chat.wa_id}
          onClick={onChatSelect}
        />
      ))}
    </div>
  );

  return (
    <div
      className="
        bg-white border-r border-gray-200 
        flex flex-col 
        w-full md:w-80 
        h-full max-h-screen 
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200">
        <h1 className="text-lg md:text-xl font-semibold text-gray-800">
          Chats
        </h1>
        <div className="flex items-center space-x-1 md:space-x-2">
          <button className="p-2 hover:bg-gray-200 rounded-full">
            <MessageSquare size={20} className="text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-200 rounded-full">
            <MoreVertical size={20} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-3 border-b border-gray-100">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search or start a new chat"
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:bg-white focus:border focus:border-green-500"
          />
        </div>
      </div>

      {/* Chat List */}
      <ChatList
        chats={chats}
        selectedChat={selectedChat}
        onChatSelect={onChatSelect}
      />
    </div>
  );
};

export default Sidebar;

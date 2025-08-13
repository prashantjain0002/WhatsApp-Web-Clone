import React from "react";

export default function Header({ conversation }) {
  return (
    <div className="flex items-center gap-3 p-4 bg-[#f0f2f5] border-b border-[#e9edef]">
      <div className="relative">
        <div className="w-10 h-10 rounded-full bg-[#ddd] flex items-center justify-center text-[#667781] font-medium overflow-hidden">
          {conversation.profileImage ? (
            <img
              src={conversation.profileImage}
              alt={conversation.name}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <span className="text-sm">
              {conversation.name
                ? conversation.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")
                    .toUpperCase()
                : "U"}
            </span>
          )}
        </div>
        {/* Online status indicator */}
        {conversation.isOnline && (
          <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#25d366] border-2 border-[#f0f2f5] rounded-full"></div>
        )}
      </div>

      {/* User info */}
      <div className="flex-1 min-w-0">
        <div className="font-medium text-[#111b21] text-base truncate">
          {conversation.name || conversation.wa_id}
        </div>
        <div className="text-xs text-[#667781] truncate">
          {conversation.isOnline
            ? "Online"
            : conversation.lastSeen
            ? `Last seen ${conversation.lastSeen}`
            : conversation.wa_id}
        </div>
      </div>

      {/* Header action buttons */}
      <div className="flex items-center gap-2">
        {/* Video call button */}
        <button className="p-2 hover:bg-[#f5f6f6] rounded-full transition-colors">
          <svg
            className="w-5 h-5 text-[#54656f]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>

        {/* Voice call button */}
        <button className="p-2 hover:bg-[#f5f6f6] rounded-full transition-colors">
          <svg
            className="w-5 h-5 text-[#54656f]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
        </button>

        {/* More options button */}
        <button className="p-2 hover:bg-[#f5f6f6] rounded-full transition-colors">
          <svg
            className="w-5 h-5 text-[#54656f]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>
        </button>
      </div>
    </div>
  );
}

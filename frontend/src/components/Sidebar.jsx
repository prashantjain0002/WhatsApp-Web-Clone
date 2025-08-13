import React from "react";

function LastMessagePreview() {
  return (
    <div className="flex items-center justify-between">
      <div className="truncate text-sm text-[#667781] flex items-center gap-1">
        Last message preview here...
      </div>
      <div className="flex items-center gap-1 ml-2">
        <div className="text-xs text-[#667781]">12:00</div>
      </div>
    </div>
  );
}

export default function Sidebar() {
  const conversations = Array(5).fill({
    name: "User Name",
    wa_id: "12345",
    profileImage: null,
    isOnline: true,
  });

  return (
    <aside className="w-80 bg-white border-r border-[#e9edef] hidden md:flex flex-col h-screen">
      <div className="bg-[#f0f2f5] px-4 py-3 border-b border-[#e9edef]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#25d366] rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967..." />
              </svg>
            </div>
            <h1 className="text-xl font-normal text-[#111b21]">WhatsApp</h1>
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-[#f5f6f6] rounded-full">
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
            <button className="p-2 hover:bg-[#f5f6f6] rounded-full">
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
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-4 w-4 text-[#54656f]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0..."
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search or start new chat"
              className="w-full pl-10 pr-4 py-2 bg-[#f0f2f5] border border-[#e9edef] rounded-lg text-sm text-[#111b21]"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {conversations.map((conv, i) => (
          <div
            key={i}
            className="w-full text-left p-4 hover:bg-[#f5f6f6] flex items-start gap-3 border-b border-[#e9edef]"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-[#ddd] flex items-center justify-center text-[#667781] font-medium">
                {conv.name[0]}
              </div>
              {conv.isOnline && (
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#25d366] border-2 border-white rounded-full" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <div className="font-normal text-[#111b21] truncate text-base">
                  {conv.name}
                </div>
                <div className="text-xs text-[#667781]">01/01</div>
              </div>
              <LastMessagePreview />
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border-t border-[#e9edef] px-2 py-2">
        <div className="flex justify-around">
          <button className="flex flex-col items-center gap-1 p-2 rounded-lg bg-[#f0f2f5]">
            <span className="text-xs text-[#25d366] font-medium">Chats</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-[#f5f6f6]">
            <span className="text-xs text-[#54656f]">Status</span>
          </button>
          <button className="flex flex-col items-center gap-1 p-2 rounded-lg hover:bg-[#f5f6f6]">
            <span className="text-xs text-[#54656f]">Calls</span>
          </button>
        </div>
      </div>
    </aside>
  );
}

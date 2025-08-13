import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";

export default function App() {
  const mockConversations = [
    {
      wa_id: "12345",
      name: "Alice",
      isOnline: true,
      profileImage: null,
    },
    {
      wa_id: "67890",
      name: "Bob",
      isOnline: false,
      profileImage: null,
    },
  ];

  const [conversations, setConversations] = useState([]);
  const [selectedWaId, setSelectedWaId] = useState(null);
  const [loading, setLoading] = useState(true);

  // Simulate loading without API call
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setConversations(mockConversations);
      setSelectedWaId(mockConversations[0].wa_id);
      setLoading(false);
    }, 1000);
  }, []);

  const selectedConversation =
    conversations.find((c) => c.wa_id === selectedWaId) || null;

  return (
    <div className="min-h-screen bg-[#111b21] flex">
      <Sidebar
        conversations={conversations}
        selectedWaId={selectedWaId}
        onSelect={setSelectedWaId}
      />

      <div className="flex-1 bg-[#f0f2f5] flex flex-col">
        {loading ? (
          <div className="flex-1 flex items-center justify-center bg-[#f0f2f5]">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-[#e9edef] border-t-[#25d366] rounded-full animate-spin mx-auto mb-4"></div>
              <div className="text-[#667781] text-sm">
                Loading conversations...
              </div>
            </div>
          </div>
        ) : selectedConversation ? (
          <ChatWindow conversation={selectedConversation} />
        ) : (
          <div className="flex-1 flex items-center justify-center bg-[#f0f2f5]">
            <div className="text-center max-w-md px-8">
              <div className="w-20 h-20 bg-[#25d366] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967..." />
                </svg>
              </div>

              <h2 className="text-2xl font-light text-[#111b21] mb-3">
                WhatsApp Web
              </h2>

              <p className="text-[#667781] text-sm leading-relaxed mb-6">
                Send and receive messages without keeping your phone online.
                <br />
                Use WhatsApp on up to 4 linked devices and 1 phone at the same
                time.
              </p>

              {conversations.length === 0 ? (
                <div className="bg-[#e7f3ff] px-4 py-3 rounded-lg border border-[#b8daff]">
                  <div className="flex items-center gap-2 justify-center">
                    <span className="text-[#111b21] text-xs">
                      No conversations found. Start a new chat to get started.
                    </span>
                  </div>
                </div>
              ) : (
                <div className="bg-[#fff4e6] px-4 py-3 rounded-lg border border-[#ffcc73]">
                  <div className="flex items-center gap-2 justify-center">
                    <span className="text-[#111b21] text-xs">
                      Select a conversation from the sidebar to start messaging.
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

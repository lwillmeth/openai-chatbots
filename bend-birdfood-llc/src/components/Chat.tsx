"use client";

import { useRef, useEffect, useState } from "react";

const chatBoxStyle: React.CSSProperties = {
  position: "fixed",
  bottom: 24,
  right: 24,
  width: 320,
  height: 320,
  background: "#e3f2fd",
  border: "1px solid #ccc",
  borderRadius: 8,
  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  padding: 16,
  zIndex: 1000,
  display: "flex",
  flexDirection: "column",
  color: "#000",
};

export default function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, `You: ${input}`]);
    setLoading(true);

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_CHAT_SERVICE_URL || "", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-chat-service-api-key": process.env.NEXT_PUBLIC_CHAT_SERVICE_CLIENT_ID || "",
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: input }],
        }),
      });

      const data = await res.json();
      if (data.message) {
        setMessages((prev) => [...prev, `BirdBot: ${data.message}`]);
      } else if (data.error) {
        setMessages((prev) => [...prev, `Error: ${data.error}`]);
      }
    } catch (err: unknown) {
      console.error("Chat =>", err);
      setMessages((prev) => [...prev, "Error: Could not reach chat service."]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div style={chatBoxStyle}>
      <strong>Chat with us!</strong>
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          margin: "12px 0",
          background: "#f9f9f9",
          padding: 8,
          borderRadius: 4,
        }}
      >
        {messages.map((msg, idx) => (
          <div key={idx} style={{ marginBottom: 4 }}>
            {msg}
          </div>
        ))}
        {loading && <div style={{ color: "#888" }}>Hunt-and-pecking our reply...</div>}
        <div ref={messagesEndRef} />
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1, borderRadius: 4, border: "1px solid #ccc", padding: 4, background: "#fff" }}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
          placeholder="Send us a carrier pigeon..."
          disabled={loading}
        />
        <button onClick={sendMessage} disabled={loading || !input.trim()} style={{ borderRadius: 4, padding: "4px 12px" }}>
          Send
        </button>
      </div>
    </div>
  );
}
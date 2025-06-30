export default function Home() {
  return (
    <main style={{ fontFamily: "sans-serif", maxWidth: 600, margin: "2rem auto", padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Bakery Chat API</h1>
      <p>
        Welcome to the general Chat API backend.<br />
        This services customer service bots.
      </p>
      <h2 style={{ marginTop: "2rem", fontSize: "1.2rem" }}>POST <code>/api/chat</code></h2>
      <p>
        <strong>Description:</strong> Send a chat message with your API key, and receive a customized response from your service&apos;s bot.
      </p>
      <pre style={{
        background: "#f4f4f4",
        padding: "1rem",
        borderRadius: "8px",
        overflowX: "auto",
        color: "#000",
      }}>
{`Headers:
  Content-Type: application/json
  x-chat-service-api-key: YOUR_API_KEY

Body:
  {
    "messages": [
      { "role": "user", "content": "What are your hours&#39;?" }
    ]
  }
`}
      </pre>
      <p>
        <strong>Response:</strong> <code>{`{ "message": "..." }`}</code>
      </p>
    </main>
  );
}

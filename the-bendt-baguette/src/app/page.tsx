import Chat from "../components/Chat";

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "serif",
        padding: "2rem",
        maxWidth: 700,
        margin: "0 auto",
        minHeight: "100vh",
        position: "relative",
        background: "linear-gradient(to top, #f5e9da 0%, #e8d3b9 100%)", // warm bakery browns
        overflow: "hidden",
      }}
    >
      {/* Bakery illustration */}
      <svg
        width="180"
        height="120"
        viewBox="0 0 90 60"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        {/* Bread loaf */}
        <ellipse cx="45" cy="40" rx="40" ry="18" fill="#d2a679" />
        <ellipse cx="45" cy="36" rx="36" ry="14" fill="#f7d7b0" />
        {/* Steam lines */}
        <path d="M30,20 Q32,15 34,20" stroke="#b08b5c" strokeWidth="2" fill="none"/>
        <path d="M45,18 Q47,13 49,18" stroke="#b08b5c" strokeWidth="2" fill="none"/>
        <path d="M60,22 Q62,17 64,22" stroke="#b08b5c" strokeWidth="2" fill="none"/>
      </svg>

      <h1 style={{ fontSize: "2.5rem", color: "#8d6748", marginBottom: 0, position: "relative", zIndex: 1 }}>
        🥖 The Bendt Baguette
      </h1>
      <br></br>
      <p style={{ fontSize: "1.2rem", color: "#6b4f28", marginTop: 8, position: "relative", zIndex: 1 }}>
        Fresh bread, pastries, and warmth every morning.
      </p>
      <section style={{ margin: "2rem 0", position: "relative", zIndex: 1 }}>
        <h2 style={{ fontSize: "1.5rem", color: "#a67c52" }}>Menu changes daily - ask about our specials!</h2>
      </section>
      <section style={{ marginBottom: "2rem", position: "relative", zIndex: 1 }}>
        <h2 style={{ fontSize: "1.2rem", color: "#a67c52" }}>Hours</h2>
        <p style={{ fontSize: "1.1rem", color: "#6b4f28" }}>
          <strong>Open Early:</strong> Every day, 6:00am – 12:00pm<br />
          <span style={{ color: "#b22222" }}>Closed afternoons</span>
        </p>
      </section>
      {/* Chat box fixed to bottom right */}
      <div
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 100,
          maxWidth: 340,
        }}
      >
        <Chat />
      </div>
    </main>
  );
}

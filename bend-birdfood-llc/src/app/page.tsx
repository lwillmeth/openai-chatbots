import Image from "next/image";
import Chat from "../components/Chat";

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "sans-serif",
        padding: "2rem",
        maxWidth: 700,
        margin: "0 auto",
        minHeight: "100vh",
        position: "relative",
        background: "#fff", // Changed from gradient to solid white
        overflow: "hidden",
      }}
    >
      {/* Fun tree illustration */}
      <svg
        width="180"
        height="340"
        viewBox="0 0 90 170"
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        <rect x="38" y="90" width="14" height="60" fill="#8d6748" rx="5" />
        <ellipse cx="45" cy="90" rx="40" ry="35" fill="#7ec850" />
        <ellipse cx="25" cy="110" rx="18" ry="14" fill="#6bbf59" />
        <ellipse cx="65" cy="110" rx="18" ry="14" fill="#6bbf59" />
        {/* A simple bird on the tree */}
        <ellipse cx="60" cy="70" rx="7" ry="4" fill="#42a5f5" />
        <circle cx="65" cy="70" r="2" fill="#fff" />
        <circle cx="66" cy="70" r="0.7" fill="#222" />
        <polygon points="67,70 70,69 67,71" fill="#fbc02d" />
      </svg>

      <h1 style={{ fontSize: "2.5rem", color: "#1976d2", marginBottom: 0, position: "relative", zIndex: 1 }}>
        🐦 Bend Birdfood LLC
      </h1>
      <p style={{ fontSize: "1.2rem", color: "#444", marginTop: 8, position: "relative", zIndex: 1 }}>
        Welcome to Bend Birdfood LLC! We specialize in premium, questionable food for your feathered friends.
      </p>
      <p style={{ fontSize: "1.2rem", color: "#444", marginTop: 8, position: "relative", zIndex: 1 }}>
        Our menu is crafted for birds of all kinds—stop by in the evening to treat your flock!
      </p>
      <div style={{ margin: "2rem 0", display: "flex", justifyContent: "center", position: "relative", zIndex: 1 }}>
        <Image src="/birdfood.jpg" alt="A bowl of gourmet bird food" width={300} height={200} />
      </div>
      <section style={{ marginBottom: "2rem", position: "relative", zIndex: 1 }}>
        <h2 style={{ fontSize: "1.5rem", color: "#1976d2" }}>Menu</h2>
        <ul style={{ fontSize: "1.1rem", color: "#333", listStyle: "disc inside" }}>
          <li>
            <strong>Sunflower Supreme Mix</strong> – A hearty blend of sunflower seeds, millet, and cracked corn.
          </li>
          <li>
            <strong>Berry & Nut Delight</strong> – Dried berries, almonds, and pumpkin seeds for a sweet treat.
          </li>
          <li>
            <strong>Gourmet Finch Feast</strong> – Tiny seeds and grains perfect for finches and small songbirds.
          </li>
        </ul>
      </section>
      <section style={{ marginBottom: "2rem", position: "relative", zIndex: 1 }}>
        <h2 style={{ fontSize: "1.2rem", color: "#1976d2" }}>Hours</h2>
        <p style={{ fontSize: "1.1rem", color: "#333" }}>
          <strong>Open Evenings Only:</strong> Monday – Friday, 5:00pm – 9:00pm<br />
          <span style={{ color: "#b22222" }}>Closed on weekends</span>
        </p>
      </section>
      <div
        style={{
          position: "fixed",
          bottom: 24,
          left: 24,
          zIndex: 100,
          maxWidth: 340,
        }}
      >
        <Chat />
      </div>
    </main>
  );
}

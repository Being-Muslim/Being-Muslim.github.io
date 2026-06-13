const concepts = [
  { slug: "a", name: "Concept A", isNew: false },
  { slug: "b", name: "Concept B", isNew: false },
  { slug: "c", name: "Concept C", isNew: false },
  { slug: "d", name: "Concept D", isNew: true },
  { slug: "e", name: "Concept E", isNew: true },
  { slug: "f", name: "Concept F", isNew: true },
];

export default function ConceptIndex() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, margin: "0 0 40px" }}>The Being Muslim Project</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 16,
        }}
      >
        {concepts.map((c) => (
          <a
            key={c.slug}
            href={`/${c.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "40px 22px",
              border: "1px solid #e8e4de",
              borderRadius: 12,
              textDecoration: "none",
              color: "#2d3748",
              fontWeight: 600,
              fontSize: 18,
            }}
          >
            {c.name}
            {c.isNew && (
              <span
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  background: "#8b2e36",
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  padding: "3px 8px",
                  borderRadius: 999,
                }}
              >
                New
              </span>
            )}
          </a>
        ))}
      </div>
    </main>
  );
}

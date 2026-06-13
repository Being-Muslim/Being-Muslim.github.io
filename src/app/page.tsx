import Link from "next/link";

const concepts = [
  { slug: "a", name: "Concept A", note: "Cards · classic stacked layout" },
  { slug: "b", name: "Concept B", note: "Glassmorphism · bento articles" },
  { slug: "c", name: "Concept C", note: "Scroll-reveal animations" },
  { slug: "d", name: "Concept D", note: "Parallax hero" },
  { slug: "e", name: "Concept E", note: "Split hero · wave dividers" },
  { slug: "a-staging", name: "A — Staging", note: "Full-site build" },
  { slug: "b-staging", name: "B — Staging", note: "Full-site build" },
];

export default function ConceptIndex() {
  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, margin: "0 0 8px" }}>The Being Muslim Project</h1>
      <p style={{ color: "#6b7a8d", margin: "0 0 40px" }}>Website refresh — design concepts (Next.js).</p>
      <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
        {concepts.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/${c.slug}`}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "18px 22px",
                border: "1px solid #e8e4de",
                borderRadius: 12,
                textDecoration: "none",
                color: "#2d3748",
              }}
            >
              <span style={{ fontWeight: 600 }}>{c.name}</span>
              <span style={{ fontSize: 13, color: "#6b7a8d" }}>{c.note}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

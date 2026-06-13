import "./concept-c.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ConceptCLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bm-root">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

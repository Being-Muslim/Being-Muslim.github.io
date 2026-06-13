import "./concept-e.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ConceptDLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bm-root">
      <div className="bm-viewport-frame" aria-hidden="true" />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

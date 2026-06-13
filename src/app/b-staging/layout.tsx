import "./concept-b-staging.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ConceptBStagingLayout({
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

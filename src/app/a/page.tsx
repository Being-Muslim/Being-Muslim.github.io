import { redirect } from "next/navigation";

// Style A now lives at the site root; keep old /a links working.
export default function ConceptARedirect() {
  redirect("/");
}

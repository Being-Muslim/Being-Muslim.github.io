"use client";

import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { forgetCart } from "../actions";

export default function SignOut() {
  const router = useRouter();
  return (
    <button
      type="button"
      className="st-btn ghost"
      onClick={async () => {
        await authClient.signOut();
        await forgetCart();
        router.refresh();
      }}
    >
      Sign out
    </button>
  );
}

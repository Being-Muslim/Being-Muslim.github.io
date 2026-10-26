"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function AuthForms({ next }: { next: string }) {
  const router = useRouter();
  const [mode, setMode] = useState<"sign-in" | "sign-up">("sign-in");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setBusy(true);
    const f = new FormData(e.currentTarget);
    const email = String(f.get("email"));
    const password = String(f.get("password"));
    const res =
      mode === "sign-in"
        ? await authClient.signIn.email({ email, password })
        : await authClient.signUp.email({ email, password, name: String(f.get("name")) });
    setBusy(false);
    if (res.error) {
      setError(res.error.message ?? "Something went wrong. Please try again.");
      return;
    }
    router.replace(next);
    router.refresh();
  }

  return (
    <>
      <div className="st-tabs" role="tablist">
        {(["sign-in", "sign-up"] as const).map((m) => (
          <a
            key={m}
            href="#"
            role="tab"
            aria-selected={mode === m}
            aria-current={mode === m ? "page" : undefined}
            onClick={(e) => {
              e.preventDefault();
              setMode(m);
              setError(null);
            }}
          >
            {m === "sign-in" ? "Sign in" : "Create account"}
          </a>
        ))}
      </div>
      <form className="st-form" onSubmit={onSubmit}>
        {mode === "sign-up" ? (
          <label>
            Name
            <input className="st-input" name="name" autoComplete="name" required />
          </label>
        ) : null}
        <label>
          Email
          <input className="st-input" type="email" name="email" autoComplete="email" required />
        </label>
        <label>
          Password
          <input
            className="st-input"
            type="password"
            name="password"
            minLength={10}
            autoComplete={mode === "sign-in" ? "current-password" : "new-password"}
            required
          />
          {mode === "sign-up" ? <span className="st-muted" style={{ fontSize: 13, fontWeight: 400 }}>At least 10 characters.</span> : null}
        </label>
        {error ? (
          <p className="st-error" role="alert">
            {error}
          </p>
        ) : null}
        <button className="st-btn" type="submit" disabled={busy}>
          {busy ? "Please wait…" : mode === "sign-in" ? "Sign in" : "Create account"}
        </button>
      </form>
    </>
  );
}

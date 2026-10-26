import { toNextJsHandler } from "better-auth/next-js";
import { auth } from "@/lib/auth";

const handler = toNextJsHandler(auth);

// trailingSlash: true hands us /api/auth/sign-in/email/, which Better Auth's
// router does not match. Strip the slash before passing the request on.
function withoutTrailingSlash(req: Request) {
  const url = new URL(req.url);
  if (!url.pathname.endsWith("/")) return req;
  url.pathname = url.pathname.replace(/\/+$/, "");
  return new Request(url, req);
}

export const GET = (req: Request) => handler.GET(withoutTrailingSlash(req));
export const POST = (req: Request) => handler.POST(withoutTrailingSlash(req));

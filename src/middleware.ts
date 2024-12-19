import createMiddleware from "next-intl/middleware";
import { type NextRequest } from "next/server";

import { routing } from "@/config/intl";

const intlMiddleware = createMiddleware(routing);

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    /\.(.*)$/.test(pathname) ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/icon") ||
    pathname.startsWith("/api")
  ) {
    return;
  }

  const res = intlMiddleware(req);

  return res;
}

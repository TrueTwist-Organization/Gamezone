import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  createAdminSessionToken,
  getAdminCookieOptions,
  verifyAdminCredentials,
} from "@/lib/admin-auth";

export async function POST(request: Request) {
  if (!process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { error: "Admin is not configured. Set ADMIN_PASSWORD in your environment." },
      { status: 503 },
    );
  }

  const body = (await request.json()) as { username?: string; password?: string };
  if (!body.username || !body.password || !verifyAdminCredentials(body.username, body.password)) {
    return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_SESSION_COOKIE, await createAdminSessionToken(), getAdminCookieOptions());
  return response;
}

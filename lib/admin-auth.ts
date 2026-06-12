import { timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import {
  ADMIN_SESSION_COOKIE,
  createAdminSessionToken,
  getAdminCookieOptions,
  verifyAdminSessionToken,
} from "@/lib/admin-session";

export { ADMIN_SESSION_COOKIE, createAdminSessionToken, getAdminCookieOptions };

function safeEqualString(left: string, right: string) {
  const provided = Buffer.from(left);
  const target = Buffer.from(right);
  if (provided.length !== target.length) {
    return false;
  }

  return timingSafeEqual(provided, target);
}

export function verifyAdminCredentials(username: string, password: string) {
  const expectedUsername = (process.env.ADMIN_USERNAME ?? "Admin").trim();
  const expectedPassword = (process.env.ADMIN_PASSWORD ?? "").trim();

  if (!expectedPassword || !username.trim()) {
    return false;
  }

  if (!safeEqualString(username.trim(), expectedUsername)) {
    return false;
  }

  return safeEqualString(password, expectedPassword);
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  return verifyAdminSessionToken(cookieStore.get(ADMIN_SESSION_COOKIE)?.value);
}

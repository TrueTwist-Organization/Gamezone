export const ADMIN_SESSION_COOKIE = "gamezone_admin_session";
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000;

function getAdminSecret() {
  return (process.env.ADMIN_SECRET ?? process.env.ADMIN_PASSWORD ?? "").trim();
}

function bufferToHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function signPayload(payload: string) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(getAdminSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  return bufferToHex(signature);
}

function timingSafeEqualHex(left: string, right: string) {
  if (left.length !== right.length) {
    return false;
  }

  let mismatch = 0;
  for (let index = 0; index < left.length; index += 1) {
    mismatch |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }

  return mismatch === 0;
}

export async function createAdminSessionToken() {
  const expiresAt = Date.now() + SESSION_TTL_MS;
  const payload = JSON.stringify({ exp: expiresAt });
  const signature = await signPayload(payload);
  return `${Buffer.from(payload).toString("base64url")}.${signature}`;
}

export async function verifyAdminSessionToken(token: string | undefined) {
  if (!token || !getAdminSecret()) {
    return false;
  }

  const [encodedPayload, signature] = token.split(".");
  if (!encodedPayload || !signature) {
    return false;
  }

  const payload = Buffer.from(encodedPayload, "base64url").toString("utf8");
  const expected = await signPayload(payload);
  if (!timingSafeEqualHex(signature, expected)) {
    return false;
  }

  try {
    const parsed = JSON.parse(payload) as { exp?: number };
    return typeof parsed.exp === "number" && parsed.exp > Date.now();
  } catch {
    return false;
  }
}

export function getAdminCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_TTL_MS / 1000,
  };
}

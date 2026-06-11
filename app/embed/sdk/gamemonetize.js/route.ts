import { embedContentSecurityPolicy, gamemonetizeSdkStubSource } from "@/lib/embed-shield";

export async function GET() {
  return new Response(gamemonetizeSdkStubSource, {
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Content-Security-Policy": embedContentSecurityPolicy,
      "Cache-Control": "public, max-age=86400",
    },
  });
}

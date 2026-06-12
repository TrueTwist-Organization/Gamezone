import { NextResponse } from "next/server";
import { getSiteSettings } from "@/lib/settings-store";

export async function GET() {
  const settings = await getSiteSettings();
  return NextResponse.json(settings, {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

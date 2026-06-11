const SHARED_SCRIPTS_ORIGIN = "https://html5.gamemonetize.com/scripts";

type RouteParams = {
  params: Promise<{ path: string[] }>;
};

export async function GET(_request: Request, { params }: RouteParams) {
  const { path } = await params;
  const target = `${SHARED_SCRIPTS_ORIGIN}/${path.join("/")}`;

  const upstream = await fetch(target, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; GameZoneEmbed/1.0)" },
    redirect: "follow",
  });

  if (!upstream.ok) {
    return new Response("Script not found", { status: upstream.status });
  }

  return new Response(upstream.body, {
    headers: {
      "Content-Type": upstream.headers.get("content-type") ?? "application/javascript",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

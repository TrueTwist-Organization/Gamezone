import {
  embedAdBlockerScript,
  embedGamemonetizeSdkBootstrap,
  embedGameplayAdHooks,
} from "./embed-shield";

function rewriteRelativeUrls(html: string, prefix: string): string {
  return html
    .replace(/\ssrc="(?!https?:|\/\/|data:|\/embed\/)([^"]+)"/gi, (_, path) => {
      const clean = path.startsWith("/") ? path.slice(1) : path;
      return ` src="${prefix}${clean}"`;
    })
    .replace(/\shref="(?!https?:|\/\/|data:|\/embed\/)([^"]+)"/gi, (_, path) => {
      const clean = path.startsWith("/") ? path.slice(1) : path;
      return ` href="${prefix}${clean}"`;
    })
    .replace(
      /\ssrc="https?:\/\/html5\.gamemonetize\.com\/([^"]+)"/gi,
      (_, path) => ` src="${prefix}${path}"`,
    );
}

function stripAdScripts(html: string): string {
  return html
    .replace(
      /<script[^>]*src="[^"]*(googlesyndication|doubleclick|adservice|adsystem|adnxs|taboola|outbrain|api\.gamemonetize\.com|imasdk|googletagmanager|google-analytics)[^"]*"[^>]*>\s*<\/script>/gi,
      "",
    )
    .replace(/<iframe[^>]*src="[^"]*(googlesyndication|doubleclick|adservice|adsystem|imasdk|goog_)[^"]*"[^>]*>\s*<\/iframe>/gi, "")
    .replace(/<link[^>]*href="[^"]*(googlesyndication|doubleclick|api\.gamemonetize\.com)[^"]*"[^>]*>/gi, "");
}

function stripServiceWorkerScripts(html: string): string {
  return html.replace(/<script[^>]*src="[^"]*register-sw\.js[^"]*"[^>]*>\s*<\/script>/gi, "");
}

export function prepareEmbeddedHtml(html: string, embedPrefix: string): string {
  const withoutAds = stripAdScripts(stripServiceWorkerScripts(html));
  const rewritten = rewriteRelativeUrls(withoutAds, embedPrefix);
  const baseTag = `<base href="${embedPrefix}">`;
  return rewritten.replace(
    /<head>/i,
    `<head>\n${baseTag}\n${embedGamemonetizeSdkBootstrap}\n${embedGameplayAdHooks}\n${embedAdBlockerScript}`,
  );
}

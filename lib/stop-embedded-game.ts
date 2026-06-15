export function stopEmbeddedGame(iframe: HTMLIFrameElement | null) {
  if (!iframe) {
    return;
  }

  try {
    iframe.contentWindow?.postMessage({ type: "GM_STOP_GAME" }, "*");
  } catch {
    // Ignore cross-origin access errors before the blank navigation.
  }

  iframe.src = "about:blank";
}

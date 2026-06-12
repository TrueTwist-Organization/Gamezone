"use client";

import { useState } from "react";
import { STICKY_ANCHOR_SLOT_ID } from "@/lib/google-pubads";

export function StickyAnchorAd() {
  const [collapsed, setCollapsed] = useState(false);

  if (collapsed) {
    return (
      <button
        type="button"
        className="sticky-anchor-reopen"
        aria-label="Show bottom ad"
        onClick={() => setCollapsed(false)}
      >
        <span aria-hidden="true">▲</span>
      </button>
    );
  }

  return (
    <aside className="sticky-anchor-bar" aria-label="Advertisement">
      <button
        type="button"
        className="sticky-anchor-collapse"
        aria-label="Collapse bottom ad"
        onClick={() => setCollapsed(true)}
      >
        <span aria-hidden="true">▼</span>
      </button>
      <div id={STICKY_ANCHOR_SLOT_ID} className="sticky-anchor-slot" />
    </aside>
  );
}

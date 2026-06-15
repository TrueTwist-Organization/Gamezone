window.sdk = {
  showBanner: function() {
    console.log("Mock showBanner called");
  }
};

// Automatically trigger SDK events to bypass wait/ad state
function checkAndTrigger() {
  if (window.SDK_OPTIONS && typeof window.SDK_OPTIONS.onEvent === 'function') {
    console.log("Triggering SDK_READY and SDK_GAME_START");
    window.SDK_OPTIONS.onEvent({ name: 'SDK_READY' });
    window.SDK_OPTIONS.onEvent({ name: 'SDK_GAME_START' });
  } else {
    setTimeout(checkAndTrigger, 100);
  }
}

checkAndTrigger();

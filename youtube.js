// Shield Pro - YouTube Handler
function handleAds() {
    const video = document.querySelector('video');
    const skipBtn = document.querySelector('.ytp-ad-skip-button, .ytp-ad-skip-button-modern');
    
    // 1. Auto-click the "Allow YouTube Ads" or "Close" popup if it blocks the screen
    const popup = document.querySelector('ytd-enforcement-message-view-model');
    const dismissBtn = document.querySelector('#dismiss-button');
    if (popup && dismissBtn) {
        dismissBtn.click();
        console.log('Shield: Closed Anti-Adblock Popup');
    }

    // 2. Click Skip Button
    if (skipBtn) {
        skipBtn.click();
        console.log('Shield: Skipped Ad');
    }

    // 3. Simple Speed Up (Safe Mode)
    const adShowing = document.querySelector('.ad-showing');
    if (adShowing && video) {
        video.playbackRate = 16; // Fast forward
        video.muted = true;      // Mute
    }
}

setInterval(handleAds, 500);
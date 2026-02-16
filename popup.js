document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-blocker');
    const statusText = document.getElementById('status-text');
    const statusBadge = document.getElementById('status-badge');

    // 1. Load saved state from storage
    chrome.storage.local.get(['enabled'], function(result) {
        // Default to true if not set
        const isEnabled = result.enabled !== undefined ? result.enabled : true;
        updateUI(isEnabled);
    });

    // 2. Handle toggle change
    toggleButton.addEventListener('change', function() {
        const isEnabled = this.checked;
        
        // Save state
        chrome.storage.local.set({ enabled: isEnabled });
        updateUI(isEnabled);

        // Update blocking rules
        if (isEnabled) {
            chrome.declarativeNetRequest.updateEnabledRulesets({
                enableRulesetIds: ['ruleset_1']
            });
        } else {
            chrome.declarativeNetRequest.updateEnabledRulesets({
                disableRulesetIds: ['ruleset_1']
            });
        }
    });

    function updateUI(isEnabled) {
        toggleButton.checked = isEnabled;
        if (isEnabled) {
            statusText.textContent = "Ad Blocking is Active";
            statusBadge.textContent = "Protected";
            statusBadge.classList.remove('disabled');
        } else {
            statusText.textContent = "Protection Paused";
            statusBadge.textContent = "Paused";
            statusBadge.classList.add('disabled');
        }
    }
});
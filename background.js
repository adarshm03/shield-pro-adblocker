let blockedCount = 0;

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({
        enabled: true,
        blockedCount: 0,
        whitelist: []
    });
});

// Count blocked requests
chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((info) => {
    blockedCount++;

    chrome.storage.local.set({ blockedCount });

    chrome.action.setBadgeText({ text: blockedCount.toString() });
    chrome.action.setBadgeBackgroundColor({ color: "#d93025" });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

    if (message.type === "toggle") {
        if (!message.value) {
            chrome.declarativeNetRequest.updateEnabledRulesets({
                disableRulesetIds: ["default"]
            });
            chrome.action.setBadgeText({ text: "" });
        } else {
            chrome.declarativeNetRequest.updateEnabledRulesets({
                enableRulesetIds: ["default"]
            });
        }
    }

    if (message.type === "whitelist") {
        chrome.storage.local.get(["whitelist"], (data) => {
            const list = data.whitelist || [];
            list.push(message.domain);
            chrome.storage.local.set({ whitelist: list });
        });
    }

});

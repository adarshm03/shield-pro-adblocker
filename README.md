# 🛡️ Shield Pro - Enterprise AdBlocker

> A high-performance, privacy-first adblocker built on the modern Chromium Manifest V3 architecture.

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Platform](https://img.shields.io/badge/platform-Chromium-orange.svg)

## 📖 Overview

**Shield Pro** is an advanced browser extension designed to block intrusive advertisements, trackers, and analytics scripts. Unlike legacy blockers, Shield Pro leverages the **Declarative Net Request API** to intercept network requests at the browser kernel level, ensuring zero latency and maximum privacy.

It features a custom-built **DOM Observer Engine** specifically engineered to bypass video ads on platforms like YouTube without breaking the media player.

## ✨ Key Features

* **⚡ Kernel-Level Blocking:** Uses `declarativeNetRequest` to block 10,000+ ad domains without inspecting user data.
* **🎥 Smart Video Ad Skipper:** Auto-detects and fast-forwards video ads on YouTube (16x speed) while automatically closing "Anti-Adblock" popups.
* **🎨 Glassmorphism UI:** A modern, dark-themed control panel with real-time statistics.
* **🔒 Privacy Centric:** No data collection. All blocking logic runs locally on the device.
* **🚀 Lightweight:** Zero background process drain when idle.

## 🛠️ Technical Architecture

* **Manifest V3:** Compliant with the latest Google Chrome extension standards.
* **Content Scripts:** JavaScript injection for DOM manipulation (handling "Skip" buttons).
* **Storage API:** Persists user preferences and blocking statistics.
* **CSS Injection:** Cosmetic filtering to hide ad placeholders and banners.

## 🚀 Installation (Developer Mode)

1.  Clone this repository:
    ```bash
    git clone [https://github.com/yourusername/shield-pro-adblocker.git](https://github.com/yourusername/shield-pro-adblocker.git)
    ```
2.  Open your browser (Chrome/Brave/Edge) and navigate to `chrome://extensions`.
3.  Enable **Developer Mode** (top right corner).
4.  Click **Load Unpacked**.
5.  Select the project folder.

## 📂 Project Structure
/shield-pro-adblocker
│
├── manifest.json       # Extension configuration & permissions
├── rules.json          # Static blocking rules (DNR API)
├── popup.html          # UI Structure
├── popup.css           # UI Styling (Dark Mode)
├── popup.js            # UI Logic & State Management
├── youtube.js          # Content script for video ad skipping
├── icons/              # Application icons
└── README.md           # Documentation
## 🧪 Testing

This project has been tested against industry-standard benchmarks:
* **AdBlock Tester:** Score 71/100 (Blocks Analytics, Banners, & Trackers)
* **YouTube:** Successfully bypasses pre-roll and mid-roll ads.

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bugs or feature enhancements.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
*Built with ❤️ for the Modern Web.*
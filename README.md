# Mobile App Automation Project with WebdriverIO + Mocha + TypeScript + Appium

# 📱 App Automation Project
This project demonstrates mobile automation testing using **WebdriverIO**, **Mocha**, **TypeScript**, and **Appium** for both **Android Emulator** and **iOS Simulator**.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mobile-wdio-appium.git
cd mobile-wdio-appium
```

---

## 🧰 Prerequisites

Ensure the following tools are installed:

- Node.js (v18+) to check if its already installed node -v
- Java JDK --> java --version
- Android Studio (with emulator setup) 
- Xcode (macOS only, for iOS Simulator)
- Appium (v2.x) --> 'appium' in the term

---

## 📦 Install Project Dependencies

```bash
npm install
```

---

## ⚙️ Install Appium & Drivers

```bash
npm install -g appium
appium driver install uiautomator2
appium driver install xcuitest
```

---

## 🛠 Project Configuration

### TypeScript

Ensure `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "moduleResolution": "node",
    "types": ["node", "@wdio/globals/types"]
  }
}
```

### WebdriverIO Configuration (`wdio.conf.ts`)

Update capabilities for Android and iOS:

#### Android Emulator

```ts
capabilities: [{
  platformName: 'Android',
  'appium:deviceName': 'Android Emulator',
  'appium:platformVersion': '13.0',
  'appium:automationName': 'UiAutomator2',
  'appium:app': '/absolute/path/to/app.apk',
}]
```

#### iOS Simulator

```ts
capabilities: [{
  platformName: 'iOS',
  'appium:deviceName': 'iPhone 14',
  'appium:platformVersion': '16.0',
  'appium:automationName': 'XCUITest',
  'appium:app': '/absolute/path/to/app.app',
}]
```

---

## 📱 Launch Emulator/Simulator

### Android Emulator

```bash
emulator -avd <your_avd_name>
```

### iOS Simulator (macOS only)

```bash
xcrun simctl boot "iPhone 14"
```

---

## ▶️ Start Appium Server

```bash
appium
```

---

## 🧪 Run Tests

```bash
npx wdio run wdio.conf.ts
```

---

## 📁 Project Structure

```
mobile-wdio-appium/
├── test/
│   └── specs/
│       └── sample.e2e.ts
├── wdio.conf.ts
├── tsconfig.json
└── package.json
```

---

## 🆘 Troubleshooting

- Ensure emulators/simulators are running before executing tests.
- Use absolute paths for app files in capabilities.
- Check Appium logs for device connection issues.

---
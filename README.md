# Mobile App Automation Project with WebdriverIO + Mocha + TypeScript + Appium

# 📱 App Automation Project
This project demonstrates mobile automation testing using **WebdriverIO**, **Mocha**, **TypeScript**, and **Appium** for both **Android Emulator** and **iOS Simulator**.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/webdriverio-appium-ts.git
cd webdriverio-appium-ts
```

---

## 🧰 Prerequisites

Ensure the following tools are installed:

- **Node.js (v18+)** - Check: `node -v`
- **Java JDK** - Check: `java --version`
- **Android Studio** (with emulator setup)
- **Xcode** (macOS only, for iOS Simulator)
- **Appium (v2.x)** - Check: `appium --version`

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

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

### TypeScript Configuration

The project uses TypeScript with strict settings in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "es2022",
    "module": "commonjs",
    "strict": true,
    "moduleResolution": "node",
    "types": ["node", "@wdio/mocha-framework"]
  }
}
```

### WebdriverIO Configurations

The project includes separate configuration files:

- `wdio.conf.ts` - Base configuration with both Android and iOS capabilities
- `wdio.android.conf.ts` - Android-specific configuration
- `wdio.ios.conf.ts` - iOS-specific configuration

#### Android Configuration

```ts
capabilities: [{
  platformName: 'Android',
  'appium:deviceName': 'emulator-5554',
  'appium:udid': 'emulator-5554',
  'appium:platformVersion': '13.0',
  'appium:automationName': 'UiAutomator2',
  'appium:app': path.join(process.cwd(), 'app', 'android', 'app-appstore-release-dexguard.apk'),
  'appium:autoGrantPermissions': true,
  'appium:noReset': false
}]
```

#### iOS Configuration

```ts
capabilities: [{
  platformName: 'iOS',
  'appium:deviceName': 'iPhone 15 Pro',
  'appium:platformVersion': '17.5',
  'appium:automationName': 'XCUITest',
  'appium:app': path.join(process.cwd(), 'app', 'ios', 'wdiodemoapp.app'),
  'appium:autoAcceptAlerts': true,
  'appium:noReset': false
}]
```

---

## 📱 Launch Emulator/Simulator

### Android Emulator

```bash
emulator -avd <your_avd_name>
# or use Android Studio AVD Manager
```

### iOS Simulator (macOS only)

```bash
xcrun simctl boot "iPhone 15 Pro"
# or use Xcode Simulator
```

---

## ▶️ Start Appium Server

```bash
appium
# Server will start on http://localhost:4723
```

---

## 🧪 Run Tests

### Run All Tests (Android + iOS)
```bash
npm test
# or
npx wdio run wdio.conf.ts
```

### Run Android Tests Only
```bash
npm run test:android
# or
npx wdio run wdio.android.conf.ts
```

### Run iOS Tests Only
```bash
npm run test:ios
# or
npx wdio run wdio.ios.conf.ts
```

---

## 📁 Project Structure

```
webdriverio-appium-ts/
├── app/
│   ├── android/
│   │   └── app-appstore-release-dexguard.apk
│   └── ios/
│       └── wdiodemoapp.app/
├── test/
│   ├── data/
│   │   └── testData.ts
│   ├── helpers/
│   │   └── utils.ts
│   ├── pageobjects/
│   │   ├── page.ts
│   │   ├── login.page.ts
│   │   └── secure.page.ts
│   └── specs/
│       ├── app.test.ts
│       └── ios.test.ts
├── .env.example
├── .nvmrc
├── wdio.conf.ts
├── wdio.android.conf.ts
├── wdio.ios.conf.ts
├── tsconfig.json
└── package.json
```

---

## 🔧 Services & Features

- **Appium Service**: Automatically manages Appium server
- **Visual Service**: Screenshot comparison capabilities
- **VSCode Service**: Enhanced debugging support
- **Page Object Model**: Organized test structure
- **TypeScript**: Full type safety
- **Mocha Framework**: BDD-style testing

---

## 🆘 Troubleshooting

- **Emulator Issues**: Ensure emulators/simulators are running before executing tests
- **App Path**: The project uses relative paths with `path.join()` for cross-platform compatibility
- **Port Conflicts**: Default Appium port is 4723, ensure it's available
- **Node Version**: Use Node.js v18+ (check `.nvmrc` file)
- **Appium Logs**: Check Appium server logs for device connection issues
- **Permissions**: Ensure proper permissions for Android (`autoGrantPermissions: true`)

---

## 📚 Additional Resources

- [WebdriverIO Documentation](https://webdriver.io/)
- [Appium Documentation](https://appium.io/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Mocha Documentation](https://mochajs.org/)

---
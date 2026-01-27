# WebdriverIO Automation Project

![WebdriverIO](https://img.shields.io/badge/Framework-WebdriverIO-red)
![NodeJS](https://img.shields.io/badge/Node.js-16%2B-green)
![NPM](https://img.shields.io/badge/Package%20Manager-npm-blue)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow)

A modern end-to-end test automation framework built using **WebdriverIO** and **Node.js**. This project is designed to automate web and mobile applications following best practices, with support for multiple browsers, reporters, and environments.

---

## 🛠 Prerequisites

Before starting with WebdriverIO, make sure you have the following tools installed on your machine:

### 🔹 Required

- **Node.js 16+**  
  WebdriverIO runs on Node.js.  
  👉 Download: https://nodejs.org/

- **npm 8+** (comes bundled with Node.js)  
  Used to manage project dependencies.

- **Git**  
  Required to clone the repository and manage version control.  
  👉 Download: https://git-scm.com/

### 🔹 Optional / Recommended

- **Java JDK 11+**  
  Required only if you plan to use Selenium Standalone, Appium, or certain reporters.  
  👉 Download: https://www.oracle.com/java/technologies/downloads/

- **IDE / Code Editor**  
  Any modern editor will work, but these are recommended:
  - IntelliJ IDEA
  - Visual Studio Code
  - WebStorm

---

## ✅ Verify Installation

Run the following commands to confirm everything is installed correctly:

```bash
node -v
npm -v
git --version
java -version
```

---

## ⚙️ Environment Configuration

This project uses environment variables to manage configuration such as base URLs, credentials, and execution modes.

**Environment variables can be set via:**

- `.env` files
- Command line
- CI pipelines

### Example usage in `wdio.conf.js`:

```javascript
baseUrl: process.env.BASE_URL || '[https://demo.test.app](https://demo.test.app)',
```

---

### 🚀 How to Run Tests

Via Terminal
Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npm run test
```

Run a specific spec file:

```bash
npx wdio run wdio.conf.js --spec test/specs/login.spec.js
```

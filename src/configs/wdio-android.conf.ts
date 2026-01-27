import { sharedConfig } from './wdio-shared.conf';

export const config = {
  ...sharedConfig,
  specs: ['../tests/mobile/android.*.ts'],
  capabilities: [
    {
      platformName: 'Android',
      'appium:deviceName': process.env.ANDROID_DEVICE,
      'appium:platformVersion': process.env.ANDROID_VERSION,
      'appium:automationName': 'UiAutomator2',
      'appium:app': process.env.ANDROID_APP,
      'appium:autoGrantPermissions': true,
      'appium:noReset': false,
      'wdio:maxInstances': 1,
    },
  ],
  framework: 'mocha',
  services: ['appium', 'visual'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
};

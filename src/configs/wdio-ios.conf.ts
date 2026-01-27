import { sharedConfig } from './wdio-shared.conf';

export const config = {
  ...sharedConfig,
  specs: ['../tests/mobile/ios.*.ts'],
  capabilities: [
    {
      platformName: 'IOS',
      'appium:deviceName': process.env.IOS_DEVICE,
      'appium:platformVersion': process.env.IOS_VERSION,
      'appium:automationName': 'XCUITest',
      'appium:app': process.env.IOS_APP,
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

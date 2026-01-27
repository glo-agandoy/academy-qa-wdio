import { sharedConfig } from './wdio-shared.conf';

export const config = {
  ...sharedConfig,

  specs: ['../tests/web/*.spec.ts'],
  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['--disable-gpu', '--no-sandbox'],
      },
    },
  ],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'https://the-internet.herokuapp.com/',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['visual'],
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
};

exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'nithyamani3',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'P4JKysg5WuchQxBfKQu1',

  updateJob: false,
  specs: [
    './tests/specs/multiple_test.js'
  ],
  exclude: [],

  capabilities: [{
    browser: 'chrome',
    name: 'multiple_test',
    build: 'webdriver-browserstack'
  }],

  logLevel: 'warn',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  host: 'hub.browserstack.com',
  
  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd'
  }
}

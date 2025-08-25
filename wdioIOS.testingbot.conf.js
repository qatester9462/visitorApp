import * as base from './wdioIOS.conf.js';

console.log('TestingBot credentials:', process.env.TB_KEY, process.env.TB_SECRET);

export const config = {
  // Inherit base config if needed
  ...base.config,

  user: process.env.TB_KEY,
  key: process.env.TB_SECRET,

  protocol: 'https',
  hostname: 'hub.testingbot.com',
  port: 443,
  path: '/wd/hub',

  services: ['testingbot'],
  testingbot: {
    key: process.env.TB_KEY,
    secret: process.env.TB_SECRET,
  },

  connectionRetryTimeout: 180000, // 3 minutes
  connectionRetryCount: 3,

  // ✅ Reporters for Mochawesome and JUnit
  reporters: [
  ['mochawesome', {
    outputDir: './mochawesome-report',
    reportFilename: 'report',
    quiet: true,
    json: true,
    html: false,
    overwrite: false,
    timestamp: 'yyyy-mm-dd-HHMMss'
  }],
  ['junit', {
    outputDir: './test-results/junit',
    outputFileFormat: options => `results-${options.cid}.xml`
  }]
],

  // ✅ Test Capabilities
  capabilities: [{
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 16',
    'appium:platformVersion': '18',
    'appium:app': 'tb://d1587286ce46347c58017969',  // Replace with your actual TestingBot app ID
    'appium:automationName': 'XCUITest',
    'appium:autoAcceptAlerts': true,
    'appium:settings[acceptAlertButtonSelector]': "**/XCUIElementTypeButton[`label CONTAINS[c] 'Allow Once'`]",
    'tb:options': {
      build: 'TB Build-01',
      name: 'GateKeeperApp iOS Tests',
      tags: ['azure', 'appium', 'ios']
    }
  }]
};

import * as base from './wdio.conf.js'

console.log('TestingBot credentials:', process.env.TB_KEY, process.env.TB_SECRET);

export const config = {

  user: process.env.TB_KEY,
  key: process.env.TB_SECRET,
  
  ...base.config,
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

  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Galaxy S21',
    'appium:platformVersion': '11',
    'appium:app': 'tb://9667b62edf3d8bef70e2aef0',  // or your .apk upload URL
    'appium:automationName': 'UiAutomator2',
    'tb:options': {
     build: 'TB Build-01',
     name: 'VisitorApp Tests',
     tags: ['azure', 'appium', 'android']
  },
  }],
};

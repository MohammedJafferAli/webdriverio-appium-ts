import path from 'path';
import { config as baseConfig } from './wdio.conf';

export const config: WebdriverIO.Config = {
    ...baseConfig,
    capabilities: [{
        platformName: 'iOS',
        'appium:deviceName': 'iPhone 15 Pro',
        'appium:platformVersion': '17.5',
        'appium:automationName': 'XCUITest',
        'appium:app': path.join(process.cwd(), 'app', 'ios', 'wdiodemoapp.app'),
        'appium:autoAcceptAlerts': true,
        'appium:noReset': false
    }]
};
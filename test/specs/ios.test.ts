describe('iOS App Test', () => {
    it('should install and launch the iOS app', async () => {
        // Wait for app to load
        await browser.pause(3000);
        
        // Verify app is running
        const bundleId = await browser.execute('mobile: activeAppInfo');
        console.log('Active App:', bundleId);
        
        // Check if app content is displayed
        const appElement = await $('~WebdriverIO Demo');
        await expect(appElement).toBeDisplayed();
    });
});
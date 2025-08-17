describe('Android App Test', () => {
    it('should install and launch the APK', async () => {
        // Wait for app to load
        await browser.pause(3000);
        
        // Verify app is installed and running
        const currentActivity = await browser.getCurrentActivity();
        console.log('Current Activity:', currentActivity);
        
        // Check if app content is displayed
        const appElement = await $('android=new UiSelector().resourceId("android:id/content")');
        await expect(appElement).toBeDisplayed();
    });
});
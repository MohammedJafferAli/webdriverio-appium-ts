export class Utils {
    static async waitForElement(element: WebdriverIO.Element, timeout = 10000) {
        await element.waitForDisplayed({ timeout });
        return element;
    }

    static async tapElement(element: WebdriverIO.Element) {
        await this.waitForElement(element);
        await element.click();
    }

    static async enterText(element: WebdriverIO.Element, text: string) {
        await this.waitForElement(element);
        await element.setValue(text);
    }

    static async isElementDisplayed(element: WebdriverIO.Element): Promise<boolean> {
        try {
            return await element.isDisplayed();
        } catch {
            return false;
        }
    }
}
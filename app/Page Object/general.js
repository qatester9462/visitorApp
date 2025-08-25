class General {
    // Async methods to locate elements
    async locationPopup() {
        return await $('//android.widget.Button[@text="While using the app"]');
    }

    async nextButton() {
        return await $('//android.view.ViewGroup[@content-desc="Next"]');
    }

    async simplifyButton() {
        return await $("~Let's simplify your visits!");
    }
    
    

    // Method to accept location popup
    async acceptLocationPopup() {
        const popup = await this.locationPopup();
        if (await popup.isDisplayed()) {
            await popup.click();
            console.log("Location popup clicked");
        }
    }

    // Method to click next button
    async clickNextButton() {
        const next = await this.nextButton();
        await next.waitForExist({ timeout: 5000 });
        await next.click();
    }

    // Method to click simplify button
    async clickSimplifyButton() {
        const simplify = await this.simplifyButton();
        await simplify.waitForExist({ timeout: 1000 });
        await simplify.click();
    }
    

    // Combined method for going to home screen
    async gotoHome() {
        await this.acceptLocationPopup();
        await this.clickNextButton();
        await this.clickSimplifyButton();

        const englLangBtn = await driver.$("//android.view.ViewGroup[@content-desc='English']");
        
        if(englLangBtn.isDisplayed())
        {
            await englLangBtn.click()
            const saveButton = await driver.$("//android.widget.TextView[@text='SAVE' and @clickable='false' and @enabled='true']");
            await saveButton.click();

        }
    }

    async clickonAllow()
    {
       
        try {
            const allowButton = await driver.$('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]');
    
            // Wait for the element up to 5 seconds, but don't throw if not found
            const exists = await allowButton.waitForExist({ timeout: 5000, timeoutMsg: '', interval: 500 }).catch(() => false);
    
            if (exists && await allowButton.isDisplayed()) {
                await allowButton.click();
                console.log("Permission allow button clicked.");
            } else {
                console.log("Permission allow button not displayed, clicking on Profile...");
            }
        } catch (err) {
            console.log("Something went wrong while handling permission or navigating to Profile:", err.message);
            }
    

    }

    // Method to close and delete app from device
    async closeandDeleteAppFromDevice() {
        await driver.pause(1500);
        await driver.terminateApp("visitor.mygatepass.com");
        await driver.removeApp("visitor.mygatepass.com");
    }
}

export default new General();

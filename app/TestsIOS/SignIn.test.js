import General from "../Page Object/generalIOS"

describe('SignIn cases', async()=>
{


    it('SignIn 001- Go to Home Screen', async () => 
    {
    await General.gotoHome()
    })

    it('SignIn 002- SignIn without email',async () => 
    {
    
    await driver.$('//XCUIElementTypeTextField[@name="app-input-email"]').clearValue()
    await driver.$('~Welcome to MyGatePass').click()
    await driver.$('~app-button-Continue').click();
    })
    
    it('SignIn 003- SignIn with invalid Email',async () => 
        {
            await driver.$('//XCUIElementTypeTextField[@name="app-input-email"]').setValue("testabc");
            await driver.$('~Welcome to MyGatePass').click()
            await driver.$('~app-button-Continue').click();
            await driver.$('//XCUIElementTypeTextField[@name="app-input-email"]').clearValue()
            await driver.$('~Welcome to MyGatePass').click()
        
        })

        it('SignIn 004- SignIn with valid Email',async () => 
    {
        await driver.$('//XCUIElementTypeTextField[@name="app-input-email"]').setValue("visitor007@yopmail.com");
        await driver.$('~Welcome to MyGatePass').click()
        await driver.$('~app-button-Continue').click();
        await driver.$('(//XCUIElementTypeTextField[@name="textInput"])[1]').setValue("0")
        await driver.$('(//XCUIElementTypeTextField[@name="textInput"])[2]').setValue("8")
        await driver.$('(//XCUIElementTypeTextField[@name="textInput"])[3]').setValue("5")
        await driver.$('(//XCUIElementTypeTextField[@name="textInput"])[4]').setValue("2")
        await driver.$('~app-button-VERIFY').click()
        await driver.acceptAlert()


        // try {
        //     const allowButton = await driver.$('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]');
        
        //     // Wait for the element up to 5 seconds, but don't throw if not found
        //     const exists = await allowButton.waitForExist({ timeout: 5000, timeoutMsg: '', interval: 500 }).catch(() => false);
        
        //     if (exists && await allowButton.isDisplayed()) {
        //         await allowButton.click();
        //         console.log("Permission allow button clicked.");
        //     } else {
        //         console.log("Permission allow button not displayed, clicking on Profile...");
        //         await driver.$('//android.widget.TextView[@text="Profile"]').click();
        //     }
        // } catch (err) {
        //     console.log("Something went wrong while handling permission or navigating to Profile:", err.message);
        // }

        
    })

    it('SignIn 005- Logout',async () => 
    {
        await driver.$('~').click();
        await driver.$('~app-button-SIGN OUT').click()
        
       
    })

    it('SignIn 006- Close and delete the app', async()=>
    {
        await General.closeandDeleteAppFromDevice()
    })
    


})
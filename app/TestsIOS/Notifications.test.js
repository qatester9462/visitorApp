import General from "../Page Object/generalIOS"

describe('Notifications Tests', () => {

    it('Notifications 001- Go to Home Screen', async () => {
        
        await General.gotoHome()

    
    })


    it('Notifications 002- SignIn with valid Email',async () => 
        {
        
        await driver.$('//XCUIElementTypeTextField[@name="app-input-email"]').clearValue()
        await driver.$('//XCUIElementTypeTextField[@name="app-input-email"]').setValue("visitor007@yopmail.com");
        await driver.$('~Welcome to MyGatePass').click()
        await driver.$('~app-button-Continue').click();
        await driver.$('(//XCUIElementTypeTextField[@name="textInput"])[1]').setValue("0")
        await driver.$('(//XCUIElementTypeTextField[@name="textInput"])[2]').setValue("8")
        await driver.$('(//XCUIElementTypeTextField[@name="textInput"])[3]').setValue("5")
        await driver.$('(//XCUIElementTypeTextField[@name="textInput"])[4]').setValue("2")
        await driver.$('~app-button-VERIFY').click()
        await driver.acceptAlert()
            
           
            
        })


    it('Notifications 003-Go to notification', async () => {
    
       
        
    await driver.$('~').click()
    await driver.$('//XCUIElementTypeButton[@name=" Notifications"]').click();
    await driver.pause(1500)
   
    })

    it('Notifications 004- Close and Delete the app', async()=>
    {
         await General.closeandDeleteAppFromDevice()

    })
    
  

})
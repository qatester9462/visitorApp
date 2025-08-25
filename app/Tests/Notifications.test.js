import General from "../Page Object/general"

describe('Notifications Tests', () => {

    it('Notifications 001- Go to Home Screen', async () => {
        
        await General.gotoHome()

    
    })


    it('Notifications 002- SignIn with valid Email',async () => 
        {
            await driver.$('//android.widget.EditText[@text="Your email address"]').setValue("visitor007@yopmail.com");;
            await driver.$("//android.widget.TextView[@text='CONTINUE' and @clickable='false' and @enabled='true']").click();
            await driver.$('(//android.widget.EditText[@resource-id="textInput"])[1]').setValue("0");
            await driver.$('(//android.widget.EditText[@resource-id="textInput"])[2]').setValue("8");
            await driver.$('(//android.widget.EditText[@resource-id="textInput"])[3]').setValue("5");
            await driver.$('(//android.widget.EditText[@resource-id="textInput"])[4]').setValue("2");
            await driver.$("//android.widget.TextView[@text='VERIFY' and @clickable='false' and @enabled='true']").click();
            await General.clickonAllow()
        })


    it('Notifications 003-Go to notification', async () => {
    
       
        
    await driver.$("//android.widget.TextView[@text='' and @clickable='false' and @enabled='true']").click()
       // await driver.$('android=new UiSelector().text("")').click();

        await driver.$("(//android.widget.TextView[@text='Notifications' and @clickable='false' and @enabled='true'])").click();

      await General.closeandDeleteAppFromDevice()

    })
    
  

})
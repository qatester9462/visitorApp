import General from "../Page Object/generalIOS"

describe('Profile Tests', () => {


     
    
    it('Profile 001- Go to Home Screen', async () => {
    
      await General.gotoHome()
        
        
    
    
    })

    it('Profile 002-Go to Profile', async () => {
    
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
      await driver.$('~profileTab, tab, 3 of 3').click()
      

    
    })


    it('Profile 003- Try with no Number', async() => {


        await driver.$('//XCUIElementTypeTextField[@value="3051467928"]').clearValue()
        await driver.$('~app-button-CHANGE NUMBER').click()



    })

    
    it('Profile 003- Try with invalid number', async() => {

      //  await driver.$("//android.widget.TextView[@text='' and @clickable='false' and @enabled='true']").click()
      //  await driver.$("(//android.widget.TextView[@text='Profile' and @clickable='false' and @enabled='true'])[2]").click();

        
        await driver.$('//XCUIElementTypeTextField[@value="Phone Number"]').setValue("31231231231123")
        await driver.$('~app-button-CHANGE NUMBER').click()
        
        

    })


   /* it('Profile 004- Changing the number', async() => {

     //   await driver.$("//android.widget.TextView[@text='' and @clickable='false' and @enabled='true']").click()
      //  await driver.$("(//android.widget.TextView[@text='Profile' and @clickable='false' and @enabled='true'])[2]").click();

        const phoneNumberField = await driver.$('//android.widget.EditText[@text="31231231231123"]');
        await driver.$('//android.view.ViewGroup[@content-desc="🇦🇪"]/android.widget.ImageView').click()
        await driver.pause(1000)
        await driver.$('//android.widget.EditText[@resource-id="text-input-country-filter"]').setValue('United')
        await driver.pause(2000)
        const country =  await driver.$('//android.widget.TextView[@text="United Arab Emirates (+971)"]');
        country.click()
        
        
        await driver.$('//android.widget.EditText[@text="31231231231123"]').setValue("557322693")
    
       // await driver.$("//android.widget.TextView[@text='CHANGE NUMBER' and @enabled='true']").click()
        
        await driver.$('(//android.widget.EditText[@resource-id="textInput"])[1]').setValue("0");
        await driver.$('(//android.widget.EditText[@resource-id="textInput"])[2]').setValue("8");
        await driver.$('(//android.widget.EditText[@resource-id="textInput"])[3]').setValue("5");
        await driver.$('(//android.widget.EditText[@resource-id="textInput"])[4]').setValue("2");
        await driver.$("//android.widget.TextView[@text='VERIFY' and @clickable='false' and @enabled='true']").click();

    }) */

      it('Profile 005-  Cancel Deletion of Account', async() => {

      //  await driver.$("//android.widget.TextView[@text='' and @clickable='false' and @enabled='true']").click()
       // await driver.$("(//android.widget.TextView[@text='Profile' and @clickable='false' and @enabled='true'])[2]").click();
       
        

        // const deleteAccountutton = await driver.$('//android.widget.TextView[@text="DELETE MY ACCOUNT"]');
        // await deleteAccountutton.scrollIntoView();

        await driver.execute('mobile: scroll', {
          direction: 'down'
        });

        await driver.$('~app-button-DELETE MY ACCOUNT').click()
        await driver.$('~Cancel').click()

        
        

       
        


    })

    it('Profile 006-  Delete the Account without entering email', async() => {

      
      await driver.$('~app-button-DELETE MY ACCOUNT').click()
      await driver.$('~app-button-YES, I AM SURE, DELETE').click()
      await driver.$('~DELETE MY ACCOUNT').click()



    })

    it('Profile 007-  Delete the Account with invalid email', async() => {

       
        await driver.$('//XCUIElementTypeTextField[@name="app-input-email" and @value="Email"]').setValue('randemail')
        await driver.$('~DELETE MY ACCOUNT').click()
        await driver.$('//XCUIElementTypeTextField[@name="app-input-email" and @value="randemail"]').clearValue()

    })

    it('Profile 008-  Delete the Account', async() => {

      await driver.$('//XCUIElementTypeTextField[@name="app-input-email" and @value="Email"]').setValue("visitor007@yopmail.com")
        //await driver.$('//android.widget.TextView[@text="DELETE MY ACCOUNT"]').click()
      
       


    }) 

    it('Profile 009- Close and Delete the App',async ()=>
    {
       await General.closeandDeleteAppFromDevice() 
    })
     

    } )
import General from "../Page Object/general"

describe('Profile Tests', () => {


     
    
    it('Profile 001- Go to Home Screen', async () => {
    
    
       await General.gotoHome()
        
        
    
    
    })

    it('Profile 002-Go to Profile', async () => {
    
        await driver.$('//android.widget.EditText[@text="Your email address"]').setValue("visitor007@yopmail.com");;
        await driver.$("//android.widget.TextView[@text='CONTINUE' and @clickable='false' and @enabled='true']").click();
        await driver.$('(//android.widget.EditText[@resource-id="textInput"])[1]').setValue("0");
        await driver.$('(//android.widget.EditText[@resource-id="textInput"])[2]').setValue("8");
        await driver.$('(//android.widget.EditText[@resource-id="textInput"])[3]').setValue("5");
        await driver.$('(//android.widget.EditText[@resource-id="textInput"])[4]').setValue("2");
        await driver.$("//android.widget.TextView[@text='VERIFY' and @clickable='false' and @enabled='true']").click();

        
     
      await General.clickonAllow()

      await driver.$('//android.view.View[@content-desc="Profile"]').click()
      

    
    })


    it('Profile 003- Try with no Number', async() => {

        //await driver.$("//android.widget.TextView[@text='' and @clickable='false' and @enabled='true']").click()
        //await driver.$("(//android.widget.TextView[@text='Profile' and @clickable='false' and @enabled='true'])[2]").click();

        const phoneNumberField = await driver.$("(//android.widget.EditText)[1]");
        await phoneNumberField.click();
        await driver.hideKeyboard()
        await driver.$("//android.widget.TextView[@text='CHANGE NUMBER' and @enabled='true']").click()



    })

    
    it('Profile 003- Try with invalid number', async() => {

      //  await driver.$("//android.widget.TextView[@text='' and @clickable='false' and @enabled='true']").click()
      //  await driver.$("(//android.widget.TextView[@text='Profile' and @clickable='false' and @enabled='true'])[2]").click();

        const phoneNumberField = await driver.$("(//android.widget.EditText)[1]");
        await phoneNumberField.click();
        await phoneNumberField.clearValue()
        
        phoneNumberField.setValue("31231231231123")
        await driver.hideKeyboard()
        await driver.$("//android.widget.TextView[@text='CHANGE NUMBER' and @enabled='true']").click()

        
        

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

        const deleteAccountButton = await $(
            'android=new UiScrollable(new UiSelector().className("android.view.ViewGroup").instance(31)).scrollIntoView(new UiSelector().textContains("DELETE MY"))'
          );
          await deleteAccountButton.click();
        
        
        

        await driver.$('//android.widget.TextView[@text="Cancel"]').click()

        


    })

    it('Profile 006-  Delete the Account without entering email', async() => {

      //  await driver.$("//android.widget.TextView[@text='' and @clickable='false' and @enabled='true']").click()
      // await driver.$("(//android.widget.TextView[@text='Profile' and @clickable='false' and @enabled='true'])[2]").click();
       
        

    //   const deleteAccountButton = await $(
    //     'android=new UiScrollable(new UiSelector().className("android.view.ViewGroup").instance(31)).scrollIntoView(new UiSelector().textContains("DELETE MY"))'
    //   );
    //   await deleteAccountButton.click();
        
        await driver.$('//android.widget.TextView[@text="DELETE MY ACCOUNT"]').click()
        await driver.$('//android.widget.TextView[@text="YES, I AM SURE, DELETE"]').click()
        await driver.$('//android.widget.TextView[@text="DELETE MY ACCOUNT"]').click()



    })

    it('Profile 007-  Delete the Account with invalid email', async() => {

       // await driver.$("//android.widget.TextView[@text='' and @clickable='false' and @enabled='true']").click()
       // await driver.$("(//android.widget.TextView[@text='Profile' and @clickable='false' and @enabled='true'])[2]").click();
       
      
       
        await driver.$('//android.widget.EditText[@text="Email"]').setValue('randemail')
        await driver.$('//android.widget.TextView[@text="DELETE MY ACCOUNT"]').click()
        await driver.$('//android.widget.EditText[@text="randemail"]').clearValue()



    })

    it('Profile 008-  Delete the Account', async() => {

      //  await driver.$("//android.widget.TextView[@text='' and @clickable='false' and @enabled='true']").click()

     //   const emailText = await $('//android.widget.TextView[@text="visitor007@yopmail.com"]').getText()

      
       
        await driver.$('//android.widget.EditText[@text="Email"]').click()
        await driver.$('//android.widget.EditText[@text="Email"]').clearValue()
        await driver.$('//android.widget.EditText[@text="Email"]').setValue("testvisitor007@yopmail.com")
        //await driver.$('//android.widget.TextView[@text="DELETE MY ACCOUNT"]').click()

        
       await General.closeandDeleteAppFromDevice() 


    }) 
     

    } )
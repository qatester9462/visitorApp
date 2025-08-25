

import General from "../Page Object/generalIOS"

describe('Sign Up Cases', () => {


    it('SignUp 001- Go to Home Screen', async () => {


   await General.gotoHome()
    
    } )


    it('Sign up 002- Sign UP Process',async () => {

        

    const randomNumber = Math.floor(Math.random() * 50)
       
      await driver.$('//XCUIElementTypeTextField[@name="app-input-email"]').clearValue()
       await driver.$('//XCUIElementTypeTextField[@name="app-input-email"]').setValue("testvisitor"+randomNumber+"@yopmail.com");
       const emailText = "testvisitor"+randomNumber+"@yopmail.com";
       console.log("Email Text is: "+ emailText)
       await driver.$('~Welcome to MyGatePass').click()
        await driver.$('//XCUIElementTypeButton[@name="app-button-Continue"]').click();
        await driver.pause(3000)
        await driver.$('//XCUIElementTypeTextField[@name="app-input-code"]').setValue('0852')
        await driver.$('~Verify your Email').click()
        await driver.$('~app-button-VERIFY').click()
        await driver.pause(1500)
        await driver.$('~🇦🇪').click()
       await driver.$('~text-input-country-filter').setValue('Pak')
       await driver.$('//XCUIElementTypeScrollView').click()
        await driver.$('//XCUIElementTypeOther[@name="country-selector-PK"]').click()
        await driver.pause(1500)
        await driver.$('XCUIElementTypeTextField').setValue('3051467928')
        await driver.$('~Enter your phone number').click()
        await driver.$('~app-button-NEXT').click()
       
        await driver.$('(//XCUIElementTypeTextField[@name="textInput"])[1]').setValue("0")
        await driver.$('(//XCUIElementTypeTextField[@name="textInput"])[2]').setValue("8")
        await driver.$('(//XCUIElementTypeTextField[@name="textInput"])[3]').setValue("5")
        await driver.$('(//XCUIElementTypeTextField[@name="textInput"])[4]').setValue("2")
        await driver.$('~app-button-VERIFY').click()
        await driver.$('~app-button-NEXT').click()
       
      

        const valueSelection = Math.floor(Math.random() * 2);

        if(valueSelection==0)
        {await driver.$('~Male').click()}
        if(valueSelection==1)
        {await driver.$('~Male').click()}

        await driver.$('~app-button-NEXT').click()

        await driver.$('//XCUIElementTypeTextField[@name="app-input-first name"]').setValue('Visitor')
        await driver.$('//XCUIElementTypeTextField[@name="app-input-last name"]').setValue('v'+randomNumber)
        await driver.$('~What can we call you?').click()
        await driver.$('~app-button-NEXT').click() 

    


        const today = new Date();
        const currentDay = today.getDate();         
        const currentMonth = today.getMonth() + 1; 
        const currentYear = today.getFullYear(); 
        const formattedDate = `${currentDay} / ${currentMonth} / ${currentYear}`;
        const randomYear = Math.floor(Math.random() * (2012 - 2000 + 1)) + 2000;
        const targetYear = randomYear.toString()

        const randomDate = Math.floor(Math.random() * 5) + 1; // 1 to 5
        const targetDate = randomDate.toString();
        
        await driver.$(`//XCUIElementTypeOther[@name="${formattedDate}"]`).click();
        
    
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const randomMonth = months[Math.floor(Math.random() * months.length)];
        const targetMonth = randomMonth.toString()

        let monthDigitalVal

        if(targetMonth=="January")
        {monthDigitalVal =1}
        if(targetMonth=="February")
            {monthDigitalVal =2}
        if(targetMonth=="March")
            {monthDigitalVal =3}
        if(targetMonth=="April")
            {monthDigitalVal =4}
        if(targetMonth=="May")
            {monthDigitalVal =5}
        if(targetMonth=="June")
            {monthDigitalVal =6}
        if(targetMonth=="July")
            {monthDigitalVal =7}
        if(targetMonth=="August")
            {monthDigitalVal =8}
        if(targetMonth=="September")
            {monthDigitalVal =9}
        if(targetMonth=="October")
            {monthDigitalVal =10}
        if(targetMonth=="November")
            {monthDigitalVal =11}
        if(targetMonth=="December")
            {monthDigitalVal =12}
   

    let wheels = await $$('//XCUIElementTypePickerWheel');
    await wheels[2].addValue(targetYear);
    await driver.pause(500);
    
    //3. Reopen picker (it may close after setting year)
   // const formattedDate1 = `${currentDay} / ${currentMonth} / ${targetYear}`;
   // await driver.$(`//XCUIElementTypeOther[@value="${formattedDate1}"]`).click(); // value will have updated
    
   // 4. Set month and day
    await wheels[1].addValue(targetMonth);
    await driver.pause(500);
    const formattedDate2 = `${currentDay} / ${monthDigitalVal} / ${targetYear}`;

   await wheels[0].addValue(targetDate);
   await driver.pause(500);
   await driver.$('~Confirm').click()
   await driver.$('~app-button-NEXT').click()

 
 
        await driver.$('~NATIONALITY Select Country').click()
        await driver.$('~text-input-country-filter').setValue('Pak')
        await driver.$('//XCUIElementTypeScrollView').click()
        await driver.$('~country-selector-PK').click()
        await driver.$('~app-button-NEXT').click()


       await driver.$('//XCUIElementTypeOther[@name="I agree to the Terms and Conditions and Privacy Policy"]/XCUIElementTypeOther').click()
        await driver.$("~app-button-Let's Start").click()
        
        await driver.acceptAlert();

        await driver.$('~profileTab, tab, 3 of 3').click()




await driver.execute('mobile: scroll', {
    direction: 'down'
  });

  await driver.$('~app-button-DELETE MY ACCOUNT').click()  
  await driver.$('~app-button-YES, I AM SURE, DELETE').click()
      


 await driver.$('//XCUIElementTypeTextField[@name="app-input-email" and @value="Email"]').setValue('testvisitor2@yopmail.com')
 await driver.$('~DELETE MY ACCOUNT').click() 
 await driver.pause(1000) 
 


})

it('SignUp 003- Close and Delete the App', async()=>
{
await General.closeandDeleteAppFromDevice()
})




})
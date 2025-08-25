class General {
    // Async methods to locate elements
    async locationPopup() {
        
        // const buttons = await driver.execute('mobile: alert', { action: 'getButtons' });

        // if (buttons.includes('Allow While Using App')) {
        // // iOS might put it at different position; map the layout
        // // Accept if it's at the right, dismiss if at left
        // if (buttons[buttons.length - 1] === 'Allow While Using App') {
        //     await driver.execute('mobile: alert', { action: 'accept' });
        // } 
        // else if (buttons[0] === 'Allow While Using App') {
        //     await driver.execute('mobile: alert', { action: 'dismiss' });
        // } 
        // else {
        //     // Neither? Use manual tap
        //     await driver.execute('mobile: tap', { x: 215, y: 470 });
        // }
        // }

//         const windowSize = await driver.getWindowSize();
//         const screenWidth = windowSize.width;
//         const screenHeight = windowSize.height;
//         await driver.execute('mobile: tap', {
//         x: Math.floor(screenWidth * 0.5),  // 50% width
//         y: Math.floor(screenHeight * 0.65) // 65% height
// });

     //   await driver.execute('mobile: tap', { x: 215, y: 570});   //as per iPhone 16
     //  await driver.execute('mobile: tap', { x: 215, y: 530 });  //As per iPhone 16 Pro


       const screenSize = await driver.getWindowSize(); // Gets screen dimensions dynamically
       const x = screenSize.width * 0.547; // 215 relative to your local width
       const y = screenSize.height * 0.587; // 500 relative to your local height

       console.log(`Tapping at: x=${x}, y=${y}`);
       await driver.execute('mobile: tap', { x, y });

    //   await driver.updateSettings({
    // acceptAlertButtonSelector: "**/XCUIElementTypeButton[`label CONTAINS[c] 'Allow While Using App'`]"
    // });


    }


//     async  locationPopup2() {
//  let attempts = 0;
//   let handled = false;

//   while (attempts < 5 && !handled) {
//     try {
//       const buttons = await driver.execute('mobile: alert', { action: 'getButtons' });

//       if (buttons && buttons.length > 0) {
//         console.log("System alert detected:", buttons);

//         // Try to find the correct button
//         const allowOnceButton = buttons.find(b => b.toLowerCase().includes('allow once')) || buttons[0];

//         console.log("Clicking alert button:", allowOnceButton);

//         await driver.execute('mobile: alert', {
//           action: 'accept',
//           buttonLabel: allowOnceButton,
//         });

//         handled = true;
//       } else {
//         console.log("Alert found, but no buttons returned.");
//       }
//     } catch (err) {
//       console.warn(`Attempt ${attempts + 1}: No alert detected. Retrying...`);
//       await driver.pause(1500); // wait 1.5 seconds before retrying
//     }

//     attempts++;
//   }

//   if (!handled) {
//     console.warn("Location alert not handled after multiple attempts.");
//   }

// }


    async nextButton() {
        return await $('~app-button-Next');
    }

    async simplifyButton() {
        return await $("~app-button-Let's simplify your visits!");
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
       
       // await this.acceptLocationPopup();
        
       

      await driver.pause(5000);
    
        await this.clickNextButton();
        await this.clickSimplifyButton();
 

        const englLangBtn = await driver.$('//XCUIElementTypeOther[@name="English"]'); //dasdasdada
        
        if(englLangBtn.isDisplayed())
        {
            await englLangBtn.click()
            const saveButton = await driver.$('~app-button-Save');
            await saveButton.click();

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

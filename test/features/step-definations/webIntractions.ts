import { Given, When, Then } from "@wdio/cucumber-framework";
import * as chai from "chai";

/**
 * Web Intractions
 */

Given(/^A web page is opened$/, async function () {
  await browser.url("https://the-internet.herokuapp.com/frames");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

When(/^perform web Intractions$/, async function () {
  /**
   * Input box
   * Actions
   * 1: Type into Input box
   * 2: Clear the field and Add value
   * 3: Click and type
   * 4: Slow typing
   */

//   let ele = await $("[type=number]");
//   await ele.click();

//   let num = 12355;
//   let strNum = num.toString();

// //   await ele.setValue(123421);
// //   await browser.pause(5000);

//   for (let index = 0; index < strNum.length; index++) {
//     let charStr = strNum.charAt(index);
//     await browser.pause(1000);
//     await browser.keys(charStr);
//   }


/**
 * Dropdown
 * Assert the default option is selected
 * Select by attribute , text , index
 * Get a list of options
 * 
 */

// let ele = await $('//select/option[@selected="selected"]')
// let val = await ele.getText();
// chai.expect(val).to.equal("Please select an option")
// await browser.pause(4000)

//Select by attribute , text , index
// let ddele = await $('#dropdown');
// await ddele.selectByIndex(2);
// await browser.pause(4000)

//Get a list of options
// let arr = [];
// let eleArr = await $$(`select > option`);
// for(let i=0; i < await eleArr.length; i++){
//   let ele = eleArr[i];
//   let val  = await ele.getText();
//   arr.push(val)
//   console.log(val);
// }
// console.log(`>>Options Array:: ${arr}`);
// await browser.pause(3000)

/**
 * Checkboxes
 * Actions:
 * Select a checkbox option
 * Unselect a checkbox option
 * Assert if option is selected
 * Select All options
 * 
 */

// let eleArr = await $$(`//form[@id="checkboxes"]/input`);
// for(let i=0; i< await eleArr.length; i++){
//   let ele = eleArr[i];

//   if(!await ele.isSelected()){
//     ele.click();
//   }
// }

// let isChecked = await ele.isSelected();
// chai.expect(isChecked).to.be.false
// await browser.pause(2000)


/**
 * Window Handling
 * Steps
 *  1: Launch the browser
 *  2: Open another windows 
 *  3: Switch to the window based on title
 *  4: Switch back to the main window
 *
 * Methods Used:
 * 1: getTitle()
 * 2: getWindowHandle()
 * 3: getWindlowHandles()
 * 4: SwitchToWindow()
 * 
 */

// //Opened new windows
//  await $(`=Click Here`).click();
//  await $(`=Elemental Selenium`).click();
 
//  let currentWindowTitle = await browser.getTitle();
//  let parentWindowHandle = await browser.getWindowHandle();
//  console.log(`>>Current Win Title:: ${currentWindowTitle}`);

// // Switch to Specific window
// let windowHandles = await browser.getWindowHandles();
// for (let i=0; i <  await windowHandles.length; i++){
//   console.log(`>>Window handle:: ${windowHandles}`);
//   await browser.switchToWindow(windowHandles[i])
//   currentWindowTitle = await browser.getTitle();
//   if(currentWindowTitle === "Home | Elemental Selenium"){
//     await browser.switchToWindow(windowHandles[i])
//     let headTextEleSel = await $(`<h1>`).getText();
//     console.log(`>>headTextEleSel :: ${headTextEleSel}`);
//     break;
//   }
// }

// //Switch back to Parent window
// await browser.switchToWindow(parentWindowHandle)
// let parentWindowText = await $(`<h3>`).getText();
// console.log(`>>parentWindowText:: ${parentWindowText}`);

// await browser.pause(3000)

// 

/**
 * Alerts
 * Methods used
 * 
 * 1: isAlertOpen()
 * 2: acceptAlert()
 * 3: dismissAlert()
 * 4: getAlertText()
 * 5: sendAlertText()
 * 
 */

// await $(`button=Click for JS Prompt`).click();
// await browser.pause(2000)

// if(await browser.isAlertOpen()){
//   let alertText = browser.getAlertText();
//   console.log(`>>alertText ${alertText}`);
//   await browser.sendAlertText("Hello JS BRO")
//   await browser.pause(2000)
//   await browser.acceptAlert();   
// }

/**
 * File Upload
 *  D:/WDIO-E2E-Framework/data/dummydata.txt
 */

//console.log(process.cwd());
//  await $(`#file-upload`).addValue(`${process.cwd()}/data/dummydata.txt`)
//  await $(`#file-submit`).click();

// await browser.pause(3000)

//=iFrame

/**
 * 6.Frames
 * Methods used
 * SwitchToFrame
 * SwitchToParentFrame
//  */

// await $(`=iFrame`).click();
// let ele = await $(`#mce_0_ifr`);
// await browser.switchFrame(ele);

// //Interaction with Frme
// await $(`.tox-icon`).click();
// await $(`#tinymce`).setValue(`Typing into a frame`);
// await browser.switchToParentFrame();
// await browser.pause(3000);

});



import { Given } from "@wdio/cucumber-framework";
import * as chai from "chai";


Given(/^Login to inventory web app$/, async function () {
    //1.Login to app
    await browser.url("https://www.saucedemo.com");
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
    await browser.maximizeWindow();
    
    await $(`#user-name`).setValue("standard_user")
    await $(`#password`).setValue("secret_sauce")
    await $(`#login-button`).click();

  
  });
  
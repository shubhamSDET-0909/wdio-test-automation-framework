import { Given,When,Then } from "@wdio/cucumber-framework";
import * as chai from "chai";


Given(/^Use opened Google Search$/, function(){
    browser.url("https://google.com");
    browser.pause(10000);
})

When(/^Search with (.*)$/, async function(SearchItem){
    console.log(`>> searchItem: ${SearchItem}`);
    let ele = await $(`[name=q]`);
    await ele.setValue(SearchItem);
    await browser.keys("Enter");
})

Then(/^Click on first Search result$/, async function () {
    let ele = await $(`<h3>`)
    ele.click();
})

Then(/^URL Should match (.*)$/, async function(ExpectedURL){
    console.log(`>>Expected URL:: ${ExpectedURL}`);
    let url = await browser.getUrl();
    chai.expect(url).to.equal(ExpectedURL);
})
import { Then } from "@wdio/cucumber-framework";
import * as chai from "chai";

Then(/^Inventory page should list (.*)$/, async function (noOfProdcuts) {
  if (!noOfProdcuts)
    throw console.error(`Invalid product number provided: ${noOfProdcuts}`);

  let eleArr = await $$(`.inventory_item`);
  chai.expect(eleArr.length).to.equal(parseInt(noOfProdcuts));
});

Then(/^Validate all products have valid price$/, async function () {
  let priceArr = await $$(`.inventory_item_price`);
  let priceStrArr = [];
  for (let i = 0; i < (await priceArr.length); i++) {
    let priceStr = await priceArr[i].getText();
    priceStrArr.push(priceStr);
  }
  console.log(`>> Price with $:: ${priceStrArr}`);

  let priceNumArr = priceStrArr.map((ele) => +ele.replace("$", ""));
  console.log(`Price in Numbers ${priceNumArr}`);

  let InvalidPriceArr = priceNumArr.filter((ele) => ele <= 0);
  chai.expect(InvalidPriceArr.length).equal(0);
});

import test, { chromium } from "@playwright/test";

test(`Create Salesforce account`, async () => {
    const browser = await chromium.launch({ headless: false, channel: "chrome" })

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("https://login.salesforce.com/");
    await page.getByLabel(`Username`).fill(`maanjhushreegovindan1304@salesforcesandbox.com`);
    await page.getByLabel(`Password`).fill(`Hope@1304#`);
    await page.locator("#Login").click();

    await page.waitForTimeout(2000);

    const URL=page.url(); // get page URL
    console.log(`The URL of the page is ${URL}`); // print URL

    const TITLE =await page.title(); // get page title
    console.log(`The Title of the page is ${TITLE}`); // print title

   
    await page.locator(`.slds-icon-waffle`).click();
    
    await page.getByText(`View All`).click();
    
    await page.locator(`.slds-input`).fill("Service");

    await page.locator("//div[@class='slds-truncate']").click();
    
    await page.getByText(`Accounts`).click();    
    await page.getByText(`New`).click();
    await page.locator("#input-585").fill(`Test Account`);
    await page.locator("//button[@class='slds-button slds-button_brand']").click();
    await page.waitForTimeout(20000);
   
    console.log(`Toast Message is:` + ` `+ await page.locator("//span[contains(@class,'toastMessage slds-text-heading--small')]").textContent());
    page.close();
    context.close();
    browser.close();
});
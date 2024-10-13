import test, { chromium } from "@playwright/test";

//using page fixtures
test(`Create Salesforce account`, async ({page}) => {
        await page.goto("https://login.salesforce.com/");
    await page.getByLabel(`Username`).fill(`maanjhushreegovindan1304@salesforcesandbox.com`);
    await page.getByLabel(`Password`).fill(`Hope@1304#`);
    await page.locator("#Login").click();

    await page.waitForTimeout(2000);

    console.log(page.url());
    console.log(await page.title());
   
    await page.getByTitle("App Launcher").click();    
    await page.locator("(//button[@class='slds-button'])[2]").click();
    await page.getByPlaceholder(`Search apps or items...`).fill("Service");
    await page.locator("(//mark[text()='Service'])[1]").click();
    await page.locator("//span[text()='Accounts']").click();    
    await page.locator("//div[@title='New']").click();
    await page.locator("(//input[@class='slds-input'])[2]").fill("Test Account");
    await page.locator("//button[@class='slds-button slds-button_brand']").click();
    await page.waitForTimeout(2000);   
    type toast = [];
    type toast1 = [];

    
    const toast = await page.locator("//div[@class='toastContent slds-notify__content']").textContent();
    const toast1 = toast?.split(".");  
    console.log(toast1)

    
});
import test, { chromium } from "@playwright/test";

test(`Edit an existing Lead`, async () => {
    const browser = await chromium.launch({ headless: false, channel: "chrome" })

    const context = await browser.newContext();

    const page = await context.newPage();

    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.locator("#username").fill("Demosalesmanager");

    await page.locator("#password").fill("crmsfa");

    await page.locator("//input[@value='Login']").click();

    await page.locator("//div[@class='crmsfa']").click();

    await page.locator("//a[@href='/crmsfa/control/leadsMain']").click();

    await page.locator("//a[@href='/crmsfa/control/findLeads']").click();

    await page.locator("(//input[@name='firstName'])[3]").fill("MGFirstName");

    await page.locator("//button[text()='Find Leads']").click();

    await page.waitForTimeout(2000);

    await page.locator("//a[text()='12570']").click();
    await page.waitForTimeout(2000);

    await page.locator("//a[text()='Edit']").click();

    await page.locator("#updateLeadForm_companyName").clear();

    await page.locator("#updateLeadForm_companyName").fill("Test Lead Company MG");

    await page.locator("#updateLeadForm_annualRevenue").clear();

    await page.locator("#updateLeadForm_annualRevenue").fill("200000");

    await page.locator("#updateLeadForm_departmentName").clear();

    await page.locator("#updateLeadForm_departmentName").fill("Test Dept");

    await page.locator("#updateLeadForm_description").fill("Test Description");

    await page.locator("//input[@value='Update']").click();

    await page.waitForTimeout(2000);

    console.log("Updated Company Name is "+await page.locator('#viewLead_companyName_sp').textContent());

    console.log("Updated Annual Revnue is "+await page.locator('#viewLead_annualRevenue_sp').textContent());

    console.log("Updated Department is "+await page.locator('#viewLead_departmentName_sp').textContent());

    console.log("Updated Descript is "+await page.locator('#viewLead_description_sp').textContent());

    page.close;

    context.close;

    browser.close;
}
)

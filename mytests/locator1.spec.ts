import {test, expect, type Browser, type Page, type Locator, type BrowserContext} from "@playwright/test";
import { webkit, chromium, firefox } from "playwright";

test('browser context approach', async () => {
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    // const context_1:BrowserContext = await browser.newContext();
    const page:Page = await browser.newPage();

    //browser context 1
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    //id locator
    const firstName: Locator = page.locator('id=input-firstname');
    const lastName: Locator = page.locator('id=input-lastname');
    await firstName.fill('Atul Automation');
    await lastName.fill('Mishra');


    //class locator
    const logo: Locator = page.locator('.img-responsive');
    const logoExist = await logo.isEnabled();
    console.log(logoExist);
    

    //Text locator
    const header: Locator = page.locator('text = Register Account');
    const headerExist = await header.isEnabled();
    console.log(headerExist);

    const continueButton: Locator = page.locator('text = Continue');
    const continueButtonExist = await continueButton.isEnabled();
    console.log(continueButtonExist);

    const forgottenPasswordButton: Locator = page.locator('text = Forgotten Password');
    const forgottenPasswordButtonExist = await forgottenPasswordButton.isEnabled();
    console.log(forgottenPasswordButtonExist);

    //CSS locator
    const emailId: Locator = page.locator('css = input#input-email');
    const telephone: Locator = page.locator("css = input[name = 'telephone']");
    const privacyCheckbox: Locator = page.locator('css = input[type="checkbox"]');

    await emailId.fill("test@gmail.com");
    await telephone.fill("1234567890");
    await privacyCheckbox.check();

    //XPath locator
    const password: Locator = page.locator('xpath = //input[@name="password"]');
    const confirmPassword: Locator = page.locator('xpath = //input[@name="confirm"]');
    await password.fill("Test@12345");
    await confirmPassword.fill("Test@12345");


    //await new Promise(()=>{});  //prevents the browser from closing after test execution. We can also use "await page.pause();" instead of this line to achieve the same result.
    //Important locators:
    //ID
    //Class
    //Text
    //CSS
    //XPath
});
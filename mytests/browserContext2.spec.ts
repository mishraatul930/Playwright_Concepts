import {test, expect, type Browser, type Page, type Locator, type BrowserContext} from "@playwright/test";
import { webkit, chromium, firefox } from "playwright";

test('browser context approach', async () => {
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const context_1:BrowserContext = await browser.newContext();
    const page1:Page = await context_1.newPage();

    //browser context 1
    await page1.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    const emailId1:Locator = page1.locator('[name = "email"]');
    const password1:Locator = page1.locator('[name = "password"]');
    const loginBtn1:Locator = page1.locator('input[value="Login"]');
    await emailId1.fill('testaccount1@gmail.com');
    await password1.fill('Test@12345');
    await loginBtn1.click();

    //browser context 2
    const context_2:BrowserContext = await browser.newContext();
    const page2:Page = await context_2.newPage();
    await page2.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    const emailId2:Locator = page2.locator('[name = "email"]');
    const password2:Locator = page2.locator('[name = "password"]');
    const loginBtn2:Locator = page2.locator('input[value="Login"]');
    await emailId2.fill('testaccount2@gmail.com');
    await password2.fill('Test@12345');
    await loginBtn2.click();

});
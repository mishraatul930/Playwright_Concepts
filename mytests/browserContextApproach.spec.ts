import {test, expect, type Browser, type Page, type Locator} from "@playwright/test";
import { webkit, chromium, firefox } from "playwright";

test('browser context approach', async () => {
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const context = await browser.newContext();
    const page:Page = await context.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    const emailId:Locator = page.locator('[name = "email"]');
    const password:Locator = page.locator('[name = "password"]');
    const loginBtn:Locator = page.locator('input[value="Login"]');
    await emailId.fill('testaccount1@gmail.com');
    await password.fill('Test@12345');
    await loginBtn.click();

    const title = await page.title();
    console.log(title);

    expect(title).toBe('My Account');

    await page.screenshot({path: 'browserContextLogin.png', fullPage: true});

    await browser.close();
});
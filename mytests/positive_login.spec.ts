import {test, expect}  from "@playwright/test";
import { log } from "node:console";

test('positive login test', async ({page}) => {
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    const emailId = page.locator('[name = "email"]');
    const password = page.locator('[name = "password"]');
    const loginBtn = page.locator('input[value="Login"]');
    await emailId.fill('testaccount1@gmail.com');
    await password.fill('Test@12345');
    await loginBtn.click();

    const title = await page.title();
    console.log(title);

    expect(title).toBe('My Account');

    await page.screenshot({path: 'positive_login.png', fullPage: true});
});
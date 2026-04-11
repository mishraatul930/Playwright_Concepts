import {test}  from "@playwright/test";

test('login test', async ({page}) => {
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    const emailId = page.locator('[name = "email"]');
    const password = page.locator('[name = "password"]');
    const loginBtn = page.locator('input[value="Login"]');
    await emailId.fill('naveen@gmail.com');
    await password.fill('naveen@123');
    await loginBtn.click();

    const title = await page.title();
    console.log(title);
    await page.screenshot({path: 'login.png', fullPage: true});
});
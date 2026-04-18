import {test, expect, type Browser, type Page, type Locator, type BrowserContext} from "@playwright/test";
import { webkit, chromium, firefox } from "playwright";

test('browser context approach', async () => {
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    // const context_1:BrowserContext = await browser.newContext();
    const page:Page = await browser.newPage();

    //browser context 1
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await expect(page.getByRole('heading', {name: 'Register Account'})).toBeVisible();
    await expect(page.getByRole('button', {name: 'Continue'})).toBeVisible();
    await expect(page.getByRole('link', {name: 'Forgotten Password'})).toBeVisible();
    await page.getByRole('radio', {name: 'Yes'}).check();
});
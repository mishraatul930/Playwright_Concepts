import {test, expect, type Browser, type Page, type Locator, type BrowserContext} from "@playwright/test";
import { webkit, chromium, firefox } from "playwright";

test('Chaining Selectors Test', async () => {
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    // const context_1:BrowserContext = await browser.newContext();
    const page:Page = await browser.newPage();
    await page.goto('https://orangehrm.com/30-day-free-trial/');
    // await page.locator('form#Form_getForm >> #Form_getForm_Name').fill('Atul Automation');
    // await page.locator('form#Form_getForm >> text= Get Your Free Trial').click();

    //Chaining Locators
    const form = page.locator('form#Form_getForm');
    await form.locator('#Form_getForm_Name').fill('Atul Automation');
    await form.locator('text= Get Your Free Trial').click();

    // const getYourFreeTrialButton = page.getByRole('button', {name: 'Get Your Free Trial'});
    // await form.locator(getYourFreeTrialButton).click();
    // playwright.$('form#Form_getForm >> form#Form_getForm_Name')
});
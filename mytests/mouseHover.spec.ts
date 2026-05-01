import {test, expect, type Browser, type Page, type Locator, type BrowserContext} from "@playwright/test";
import { webkit, chromium, firefox } from "playwright";

test('mouse hover test', async () => {
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    // const context_1:BrowserContext = await browser.newContext();
    const page:Page = await browser.newPage();
    await page.goto('https://spicejet.com/');
    await page.getByText('Add-ons').first().hover();
    await page.getByText('Visa Services').first().click();
});

test('mouse hover on big basket', async () => {
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    // const context_1:BrowserContext = await browser.newContext();
    const page:Page = await browser.newPage();
    await page.goto('https://www.bigbasket.com/');
    await page.locator("button[id='headlessui-menu-button-:Ramkj6:']").click();
    // Hover over the Beverages link
    await page.locator("//a[text()='Beverages']").first().hover();
    // await page.getByText('Tea').first().hover();
    // await page.getByText('Green Tea').first().click();
    await browser.close();
});

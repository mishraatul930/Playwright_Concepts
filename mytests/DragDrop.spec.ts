import {test, expect, type Browser, type Page, type Locator, type BrowserContext} from "@playwright/test";
import { webkit, chromium, firefox } from "playwright";

test('Drag Drop test', async () => {
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    // const context_1:BrowserContext = await browser.newContext();
    const page:Page = await browser.newPage();
    await page.goto('https://jqueryui.com/resources/demos/droppable/default.html');

    //Singe line drag and drop
    
    // page.locator('#draggable').dragTo(page.locator('#droppable'));


    //multiple line drag and drop
    await page.locator('#draggable').hover();
    await page.mouse.down();
    await page.locator('#droppable').hover();
    await page.mouse.up();
    
    await page.waitForTimeout(3000);

});
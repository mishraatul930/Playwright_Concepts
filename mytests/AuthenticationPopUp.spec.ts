import {test, expect, type Browser, type Page, type Locator} from "@playwright/test";
import { webkit, chromium, firefox } from "playwright";


//hardcoding in the URL
test('browser approach', async () => {
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const context = await browser.newContext();
    const page:Page = await context.newPage();
    await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
});



//Check for the Postman method for basic authentication
test('btoa method', async () => {
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const context = await browser.newContext();
    const page:Page = await context.newPage();
    const username: String = 'admin';
    const password: String = 'admin';
    const credentials = 'Basic ' + btoa(`${username}:${password}`);
    page.setExtraHTTPHeaders({Authorization: credentials});
    await page.goto('https://the-internet.herokuapp.com/basic_auth');
});
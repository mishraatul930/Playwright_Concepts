import {test, expect, type Browser, type Page, type Locator, type BrowserContext} from "@playwright/test";
import { webkit, chromium, firefox } from "playwright";

test('No Incognito Test', async () => {

    //OPening the browser in non incognito mode
    const browser:BrowserContext = await chromium.launchPersistentContext('',{headless: false, channel: 'chrome'});
    const pages = browser.pages(); // Get all the open pages in the browser context
    const page:Page = pages[0]!;

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
});
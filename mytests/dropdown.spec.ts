import {test, expect, type Browser, type Page, type Locator, type BrowserContext} from "@playwright/test";
import { webkit, chromium, firefox } from "playwright";

test('browser context approach', async () => {
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    // const context_1:BrowserContext = await browser.newContext();
    const page:Page = await browser.newPage();
    await page.goto('https://www.magupdate.co.uk/magazine-subscription/phrr');

    // const countryDropdown: Locator = page.locator('id=country');
    // await countryDropdown.selectOption('India');

    // const selectedOption = await countryDropdown.inputValue();
    // console.log(selectedOption);

    const countryDropdown = 'select#Contact_CountryCode';
    // await page.selectOption(countryDropdown, {value: 'AD'});

    // await page.selectOption(countryDropdown, {label: 'India'});

    // await page.selectOption(countryDropdown, {index: 50});
    const options = await page.$$(countryDropdown + '>option');
    console.log(options.length);
    
    for (const e of options) {
        const optionText = await e.textContent();
        console.log(optionText);
        if(optionText==='India') {
            await page.selectOption(countryDropdown, {label: optionText});
            break;
        }
    }
});
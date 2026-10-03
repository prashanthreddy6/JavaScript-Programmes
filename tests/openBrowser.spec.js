import { chromium } from '@playwright/test'
import {test} from '@playwright/test'

test('open browser',async ()=>{

    const browser=await chromium.launch({headless:false});
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://www.flipkart.com");
})
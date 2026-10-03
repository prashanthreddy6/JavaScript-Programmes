
// import { test, expect } from '@playwright/test';
// const {tezt,expect} =require('@playwright/test');

import {test,expect} from '@playwright/test';
import fs from 'fs';

if(!fs.existsSync('./screenshots')){
    fs.mkdirSync('./screenshots');
}

test('screenshot',async({page})=>{

    await page.goto("https://www.stepcampus.in/playground?utm_source=chatgpt.com");

    await page.screenshot({path:"./screenshots/"+Date.now()+"/home.png",fullPage:true})
})

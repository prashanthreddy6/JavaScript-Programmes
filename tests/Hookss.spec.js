
import {test,expect} from '@playwright/test';

// not posssible --> "context" and "page" fixtures are not supported in "beforeAll" since they are created on a per-test basis.
// test.beforeAll('open browser',async ({page})=>{

//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
// })

test.beforeEach('open browser',async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})


test('login',async ({page})=>{

    const userName=page.locator("[name='username']")
    const password=page.locator("[name='password']")
    const submit=page.locator("//button")

    console.log(await page.url());
    console.log(await page.title());

    await userName.fill("Admin");
    await password.fill("admin123");
    await submit.click();

})

test.afterEach('takes Screenshot',async ({page})=>{

    const filename="john";
    const date=new Date().toISOString().split('T')[0].replace('/','-');
    // const date=new Date().toLocaleDateString('en-Us',{
    //     day:'2-digit',
    //     month:'2-digit',
    //     year:'numeric'
    // })
    console.log(date)

    await expect(page).toHaveTitle("OrangeHRM");
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

    page.screenshot({path:`./screenshot/${filename}-${date}.png`,fullPage:true});
})
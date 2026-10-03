const{test,expect}=require('@playwright/test');



test.skip('Multiple locators',async ({page})=>{

  await page.goto("https://www.flipkart.com/");

  // await page.pause();

  const closeTab=page.locator("//span[@class='b3wTlE']");
  await closeTab.click();
  // await page.waitForTimeout(3000);

  const search=page.locator("input[name='q']:not([readonly])");
  await search.fill("Mobiles 5G");
  await search.press('Enter');

  await page.waitForLoadState();
  // await page.pause();

  // const phones=await page.locator(".RG5Slk").allTextContents();
  const phones=page.locator(".RG5Slk");
  // console.log(phones);
  const count=await phones.count();
  console.log(count);

  await phones.first().waitFor();

  let bool=false;
  for(let i=0;i<count;i++){
    const phone=await phones.nth(i).textContent();
    console.log(phone);
    if(phone==="POCO M8 (Carbon Black, 128 GB)"){
      bool=true;
    }
  }

  await expect(bool).toBeTruthy();



  // await expect(phones).toContain('HMD VIBE2 5G');

  // const phones1=await page.locator(".RG5Slk").allTextContents();
  // for(const phone of phones1){
  //   console.log(phone);
  // }

  // const phones=await page.$$(".RG5Slk");
  // const count=await phones.length;
  // console.log(count);

  
  
 
  // let bool=false;
  // for(const phone of phones){
  //   const text=await phone.textContent();
  //   console.log(text);
  //   if(text=="HMD VIBE2 5G (Nordic Blue, 128 GB)"){
  //       bool=true;
  //       break;
  //   }
  // }

  // await expect(bool).toBeTruthy();
  




})

test.skip('RADIO BUTTONS',async ({page})=>{

  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  const radio3=page.locator("input[value='radio3']");
  const radio2=page.locator("input[value='radio3']");

  await radio3.check();
  await expect(radio3).toBeChecked();
  await expect(radio3.isChecked()).toBeTruthy();

  await page.reload();

  await radio3.uncheck();
  // const radio2Promise=await radio2.isChecked();
  await expect(await radio2.isChecked()).toBeFalsy();


})

test.skip('check boxes',async ({page})=>{

  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  // const option3=page.locator("#checkBoxOption3");

  // await option3.check();

  // await expect(option3).toBeChecked();
  // await expect(option3.isChecked()).toBeTruthy();
  const checkboxes=await page.locator('input[type="checkbox"]:not([id="myonoffswitch4"])');
  const count=await checkboxes.count();
  console.log(count);

  for(let i=0;i<count;i++){
    await checkboxes.nth(i).check();
  
  }

  for(let i=0;i<count;i++){
    expect(await checkboxes.nth(i).isChecked).toBeTruthy();
    expect(await checkboxes.nth(i)).toBeChecked();
  }
  // await expect()

})


test.skip('alert handling',async ({page})=>{

  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  // const alertButton= page.locator("#alertbtn");

  // await alertButton.click();

  // // page.on('dialog',dialog=>dialog.accept());

  // page.on('dialog',dialog=>{

  //   expect(dialog.type()).toContain("alert");
  //   expect(dialog.message()).toContain("Hello , share this practice page and share your knowledge");
  //   dialog.accept();
  // })

  const confirmbtn=page.locator("#confirmbtn");
  

  // page.on('dialog',dialog=>{
  //   expect(dialog.type()).toContain('confirm');
  //   expect(dialog.message()).toContain('Hello , Are you sure you want to confirm?')
  //   dialog.dismiss();
  // });

  const inputbox=page.getByPlaceholder('Enter Your Name');
  await page.pause();
  await inputbox.fill("prashanth");
  await confirmbtn.click();
  page.on('dialog',dialog=>{
    expect(dialog.type()).toContain('confirm')
    expect(dialog.message()).toContain('Hello prashanth, share this practice page and share your knowledge')
    dialog.accept()
  })


})

test.only('right & left click',async ({page})=>{

    await page.goto("https://www.stepcampus.in/playground?utm_source=chatgpt.com");
    // const rightClick=page.getByRole('button','Right Click');
    const doubleClick=page.getByRole('button',{name:'Double Click'});

    const rightClick1=page.getByLabel('Right Click');
    const doubleClick1=page.getByLabel('Double Click');

    // await rightClick.click();
    // await expect();

    await doubleClick.click();

    await page.waitForTimeout(5000);
    const text=page.locator("//div[text()='Double click triggered.']");
    console.log(await text.textContent());
    await expect(text).toContain('Double');


})

 
const fs =require('fs');

if(!fs.existsSync("./screenshots")){
  fs.mkdirSync('./screenshots')

}



test.skip('screenshot',async ({page})=>{
  await page.goto("https://www.stepcampus.in/playground?utm_source=chatgpt.com");

  const fileName="john";

  await page.screenshot({path:`./screenshots/${fileName}-${Date.now()}.png`,fullPage:true});

})





test.skip('mouse hover',async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const hover1=page.locator("#mousehover");
    await page.pause();
    await hover1.hover();
    const top=page.locator("[href*='top']");
    await top.click();
})
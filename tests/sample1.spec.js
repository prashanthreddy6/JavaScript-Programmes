
import testData123 from '../test_data/testData.json';

test('Getting Date from Json',async ({page})=>{

    console.log(testData123.CT);
    
    const firstName1=testData123.CT.firstName;
    const lastName1=testData123.CT.lastName;
    const city1=testData123.CT.city;


    const firstName=page.locator("#firstName");
    const lastName=page.locator("#lastName");
    const city=page.locator("#city");
    const address=page.locator("#address");
    const zipcode=page.locator("#zipcode");


    await firstName.fill(firstName);
    

    



})

import {test,expect} from '@playwright/test';

test.beforeAll('Hooks',async ()=>{
    console.log("Before All");
})

test.afterAll('afterall',async ()=>{
    console.log("after all");
})


test.beforeEach('before each',async ({page})=>{
    console.log('before each')
})

test.afterEach('after each', async({page})=>{
    console.log('after each')
})

test('sample',({page})=>{
    console.log("sample test")
})
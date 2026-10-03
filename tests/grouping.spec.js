
import {test,expect} from '@playwright/test';
import { dir } from 'node:console';
import path from 'node:path';

test.describe('GroupA', ()=>{

    test('Test 1', async ()=>{
        console.log("This is Test1")
    })


    test('Test 2', async ()=>{
        console.log("This is Test2")
    })

})



test.describe('Group B',async()=>{

    

    test('Test 3', async ()=>{
        console.log("This is Test3")
    })
    test('Test 4', async ({page})=>{
        console.log("This is Test4")
    })

})
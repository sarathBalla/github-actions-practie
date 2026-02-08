import { test, expect } from '@playwright/test';

test.describe('GitHub Actions Practice Tests', () => {
    test('Practice Test 1', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        const title = await page.title();
        expect(page).toHaveTitle(title);
        console.log("Title is " + title);
        console.log("Practice Test 1 executed successfully");
    });

    test('Practice Test 2', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        const title = await page.title();
        expect(page).toHaveTitle(title);
        console.log("Title is " + title);
        console.log("Practice Test 2 executed successfully");
    });

    test('Practice Test 3', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        const title = await page.title();
        expect(page).toHaveTitle(title);
        console.log("Title is " + title);
        console.log("Practice Test 3 executed successfully");
    });
});
test('Practice Test 4', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/m');
    const title = await page.title();
    expect(page).toHaveTitle(title);
    console.log("Title is " + title);
    console.log("Practice Test 4 executed successfully");
});
test('Practice Test 5', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const title = await page.title();
    expect(page).toHaveTitle(title);
    console.log("Title is " + title);
    console.log("Practice Test 5 executed successfully");
});
test('Practice Test 6', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const title = await page.title();
    expect(page).toHaveTitle(title);
    console.log("Title is " + title);
    console.log("Practice Test 6 executed successfully");
});
test('Practice Test 7', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const title = await page.title();
    expect(page).toHaveTitle(title);
    console.log("Title is " + title);
    console.log("Practice Test 7 executed successfully");
});
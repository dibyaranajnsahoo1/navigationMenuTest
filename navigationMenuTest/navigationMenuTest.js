const { Builder, By, Key, until } = require('selenium-webdriver');
const chai = require('chai');
const assert = chai.assert;

describe('Amazon Navigation Menu Test', function () {
  let driver;

  before(async function () {
    this.timeout(10000); // Set the timeout to 10 seconds
    try {
      driver = await new Builder().forBrowser('chrome').build();
      await driver.get('https://www.amazon.com/');
    } catch (error) {
      console.error('Error during setup:', error);
    }
  });
  

  after(async function () {
    await driver.quit();
  });

  it('should navigate to Home on Amazon logo click', async function () {
    // Implement test steps here
  });

  it('should display Departments dropdown', async function () {
    // Implement test steps here
  });

  it('should search for products and display results', async function () {
    // Implement test steps here
  });

  // Add more test cases following the same pattern as above
});

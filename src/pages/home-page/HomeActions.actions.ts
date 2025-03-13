import { Page } from '@playwright/test';
import { HomeLocators } from './HomeLocators.locators';
import { BASE_URL } from '../../data/TestData.data';

export class HomeActions {
  readonly page: Page;
  readonly locators: HomeLocators;

  constructor(page: Page, locators: HomeLocators) {
    this.page = page;
    this.locators = locators;
  }

  async navigateToHomePage() {
    await this.page.goto(BASE_URL);
    await this.page.waitForLoadState('load');
    await this.locators.productLinks.first().waitFor({ state: 'visible' });
  }

  async clickOnProduct(index: number = 0) {
    await this.locators.productLinks.nth(index).waitFor({ state: 'visible' });
    await this.locators.productLinks.nth(index).click();
    await this.page.waitForLoadState('load');
    await this.page.locator('.btn-success:has-text("Add to cart")').waitFor({ state: 'visible' });
  }

  async goToCart() {
    await this.locators.cartLink.waitFor({ state: 'visible' });
    await this.locators.cartLink.click();
    await this.page.waitForLoadState('load');
    await this.page.locator('.table').waitFor({ state: 'visible' });
  }
}
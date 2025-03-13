import { Locator, Page } from '@playwright/test';

export class HomeLocators {
  readonly page: Page;
  readonly productLinks: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productLinks = page.locator('h4.card-title a')
    this.cartLink = page.getByText('Cart', { exact: true });
  }
}
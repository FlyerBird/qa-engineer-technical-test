import { Locator, Page } from '@playwright/test';

export class ProductLocators {
  readonly page: Page;
  readonly productNameLocator: Locator;
  readonly addToCartButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productNameLocator = page.locator('.name'); 
    this.addToCartButton = page.getByRole('link', { name: 'Add to cart' });
  }
}
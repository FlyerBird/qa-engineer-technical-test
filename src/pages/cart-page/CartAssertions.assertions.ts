import { Page, expect } from '@playwright/test';
import { CartLocators } from './CartLocators.locators';

export class CartAssertions {
  readonly page: Page;
  readonly locators: CartLocators;

  constructor(page: Page, locators: CartLocators) {
    this.page = page;
    this.locators = locators;
  }

  async verifyProductInCart(expectedProductName: string) {
    await this.locators.productNameInCart.waitFor({ state: 'visible' });
    const cartProductName = await this.locators.productNameInCart.textContent();
    expect(cartProductName?.trim()).toBe(expectedProductName.trim());
  }
}
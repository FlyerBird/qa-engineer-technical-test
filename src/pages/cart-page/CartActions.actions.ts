import { Page } from '@playwright/test';
import { CartLocators } from './CartLocators.locators';

export class CartActions {
  readonly page: Page;
  readonly locators: CartLocators;

  constructor(page: Page, locators: CartLocators) {
    this.page = page;
    this.locators = locators;
  }

  async getProductNameInCart(): Promise<string> {
    await this.locators.productNameInCart.waitFor({ state: 'visible' });
    return (await this.locators.productNameInCart.textContent()) || '';
  }

  async clickPlaceOrder() {
    await this.locators.placeOrderButton.waitFor({ state: 'visible' });
    await this.locators.placeOrderButton.click();
  }
}
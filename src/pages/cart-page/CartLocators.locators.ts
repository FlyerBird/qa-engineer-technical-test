import { Locator, Page } from '@playwright/test';

export class CartLocators {
  readonly page: Page;
  readonly productNameInCart: Locator;
  readonly placeOrderButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productNameInCart = page.locator('.success td:nth-child(2)'); 
    this.placeOrderButton = page.getByRole('button', { name: 'Place Order' });
  }
}
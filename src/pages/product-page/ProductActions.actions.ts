import { Page } from '@playwright/test';
import { ProductLocators } from './ProductLocators.locators';

export class ProductActions {
  readonly page: Page;
  readonly locators: ProductLocators;

  constructor(page: Page, locators: ProductLocators) {
    this.page = page;
    this.locators = locators;
  }

  async getProductName(): Promise<string> {
    await this.locators.productNameLocator.waitFor({ state: 'visible' });
    return (await this.locators.productNameLocator.textContent()) || '';
  }

  async addToCart() {
    await this.locators.addToCartButton.waitFor({ state: 'visible' });
    await this.locators.addToCartButton.click();
    
    this.page.once('dialog', dialog => dialog.accept());
    await this.page.waitForTimeout(500); 
   
  }
}
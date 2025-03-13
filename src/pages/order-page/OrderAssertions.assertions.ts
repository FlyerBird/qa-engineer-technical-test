import { Page, expect } from '@playwright/test';
import { OrderLocators } from './OrderLocators.locators';

export class OrderAssertions {
  readonly page: Page;
  readonly locators: OrderLocators;

  constructor(page: Page, locators: OrderLocators) {
    this.page = page;
    this.locators = locators;
  }

  async verifyPurchaseConfirmation() {
    await this.locators.confirmationMessage.waitFor({ state: 'visible' });
    const confirmationMessage = await this.locators.confirmationMessage.textContent();
    expect(confirmationMessage).toBe('Thank you for your purchase!');
    
    await this.locators.okButton.waitFor({ state: 'visible' });
    await expect(this.locators.okButton).toBeVisible();
    
    const confirmationDetails = await this.locators.confirmationDetails.textContent();
    expect(confirmationDetails).toContain('Id:');
  }
}
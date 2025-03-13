import { Locator, Page } from '@playwright/test';

export class OrderLocators {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly countryInput: Locator;
  readonly cityInput: Locator;
  readonly creditCardInput: Locator;
  readonly monthInput: Locator;
  readonly yearInput: Locator;
  readonly purchaseButton: Locator;
  readonly confirmationMessage: Locator;
  readonly confirmationDetails: Locator;
  readonly okButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator('#name');
    this.countryInput = page.locator('#country');
    this.cityInput = page.locator('#city');
    this.creditCardInput = page.locator('#card');
    this.monthInput = page.locator('#month');
    this.yearInput = page.locator('#year');
    this.purchaseButton = page.getByRole('button', { name: 'Purchase' });
    this.confirmationMessage = page.getByText('Thank you for your purchase!'); 
    this.confirmationDetails = page.locator('.sweet-alert p.lead'); 
    this.okButton = page.getByRole('button', { name: 'OK' });
  }
}
import { Page } from '@playwright/test';
import { OrderLocators } from './OrderLocators.locators';
import { Customer } from '../../models/Customer.model';

export class OrderActions {
  readonly page: Page;
  readonly locators: OrderLocators;

  constructor(page: Page, locators: OrderLocators) {
    this.page = page;
    this.locators = locators;
  }

  async fillOrderForm(customer: Customer) {
    await this.locators.nameInput.waitFor({ state: 'visible' });
    await this.locators.nameInput.fill(customer.name);
    await this.locators.countryInput.fill(customer.country);
    await this.locators.cityInput.fill(customer.city);
    await this.locators.creditCardInput.fill(customer.creditCard);
    await this.locators.monthInput.fill(customer.month);
    await this.locators.yearInput.fill(customer.year);
  }

  async clickPurchase() {
    await this.locators.purchaseButton.waitFor({ state: 'visible' });
    await this.locators.purchaseButton.click();
    await this.locators.confirmationMessage.waitFor({ state: 'visible', timeout: 5000 });
  }

  async getConfirmationMessage(): Promise<string> {
    await this.locators.confirmationMessage.waitFor({ state: 'visible' });
    return (await this.locators.confirmationMessage.textContent()) || '';
  }

  async getConfirmationDetails(): Promise<string> {
    await this.locators.confirmationDetails.waitFor({ state: 'visible' });
    return (await this.locators.confirmationDetails.textContent()) || '';
  }

  async clickOkButton() {
    await this.locators.okButton.waitFor({ state: 'visible' });
    await this.locators.okButton.click();
  }
}
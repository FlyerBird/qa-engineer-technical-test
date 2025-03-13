import { test as base } from '@playwright/test';
import { HomeActions } from '../pages/home-page/HomeActions.actions';
import { ProductActions } from '../pages/product-page/ProductActions.actions';
import { CartActions } from '../pages/cart-page/CartActions.actions';
import { CartAssertions } from '../pages/cart-page/CartAssertions.assertions';
import { OrderActions } from '../pages/order-page/OrderActions.actions';
import { OrderAssertions } from '../pages/order-page/OrderAssertions.assertions';
import { HomeLocators } from '../pages/home-page/HomeLocators.locators';
import { ProductLocators } from '../pages/product-page/ProductLocators.locators';
import { CartLocators } from '../pages/cart-page/CartLocators.locators';
import { OrderLocators } from '../pages/order-page/OrderLocators.locators';

type MyFixtures = {
  homeActions: HomeActions;
  productActions: ProductActions;
  cartActions: CartActions;
  cartAssertions: CartAssertions;
  orderActions: OrderActions;
  orderAssertions: OrderAssertions;
};

export const test = base.extend<MyFixtures>({
  homeActions: async ({ page }, use) => {
    const locators = new HomeLocators(page);
    await use(new HomeActions(page, locators));
  },
  productActions: async ({ page }, use) => {
    const locators = new ProductLocators(page);
    await use(new ProductActions(page, locators));
  },
  cartActions: async ({ page }, use) => {
    const locators = new CartLocators(page);
    await use(new CartActions(page, locators));
  },
  cartAssertions: async ({ page }, use) => {
    const locators = new CartLocators(page);
    await use(new CartAssertions(page, locators));
  },
  orderActions: async ({ page }, use) => {
    const locators = new OrderLocators(page);
    await use(new OrderActions(page, locators));
  },
  orderAssertions: async ({ page }, use) => {
    const locators = new OrderLocators(page);
    await use(new OrderAssertions(page, locators));
  }
});

export { expect } from '@playwright/test';
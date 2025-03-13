import { test } from '../src/fixtures/BaseTest';
import { TEST_CUSTOMER } from '../src/data/TestData.data';

test.describe('Demo Blaze Purchase Flow', () => {
  test('should add a product to cart and complete purchase', async ({ 
    homeActions, productActions, cartActions, cartAssertions, orderActions, orderAssertions 
  }) => {
    await homeActions.navigateToHomePage();
     
    await homeActions.clickOnProduct(0);
    
    const productName = await productActions.getProductName();
    
    await productActions.addToCart();
    
    await homeActions.goToCart();
    await cartAssertions.verifyProductInCart(productName);
    
    await cartActions.clickPlaceOrder();
    await orderActions.fillOrderForm(TEST_CUSTOMER);
    await orderActions.clickPurchase();
    
    await orderAssertions.verifyPurchaseConfirmation();
  });
});
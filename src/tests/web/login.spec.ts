import LoginPage from '../../pages/web/LoginPage';
import SecureAreaPage from '../../pages/web/SecureAreaPage';

describe('Login', () => {
  it('should display success message', async () => {
    await LoginPage.navigate();

    await LoginPage.login(process.env.USERNAME!, process.env.PASSWORD!);

    await expect(SecureAreaPage.successMessage).toBeDisplayedInViewport();
  });
});

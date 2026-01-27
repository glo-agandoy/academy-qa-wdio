import { WebBasePage } from './WebBasePage';

class SecureAreaPage extends WebBasePage {
  private readonly locSuccessMessage = '#flash';

  public get successMessage() {
    return this.getSelector(this.locSuccessMessage);
  }
}

export default new SecureAreaPage();

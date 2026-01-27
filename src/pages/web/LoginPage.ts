import { WebBasePage } from './WebBasePage';

class LoginPage extends WebBasePage {
  private readonly locUsernamelInput = '#username';
  private readonly locPasswordInput = '#password';
  private readonly locSubmitButton = 'button[type = submit]';

  public async navigate(): Promise<void> {
    await super.navigate('login');
  }

  public async login(username: string, password: string): Promise<void> {
    await this.setValue(this.locUsernamelInput, username);
    await this.setValue(this.locPasswordInput, password);

    await this.click(this.locSubmitButton);
  }
}

export default new LoginPage();

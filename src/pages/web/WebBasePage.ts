export class WebBasePage {
  protected async navigate(url: string): Promise<void> {
    await browser.url(url);
  }

  protected getSelector(selector: string): ReturnType<WebdriverIO.Browser['$']> {
    if (!selector) throw new Error('Selector is not defined');

    return $(selector);
  }

  protected async setValue(selector: string, input: string): Promise<void> {
    if (!input) throw new Error('Input is not defined');

    const element = this.getSelector(selector);
    await element.setValue(input);
  }

  protected async click(selector: string): Promise<void> {
    const element = this.getSelector(selector);
    await element.click();
  }
}

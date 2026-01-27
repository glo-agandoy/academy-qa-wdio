export default abstract class MobileBasePage {
  private readonly ANDROID_UI_SELECTOR = 'android=new UiSelector().';

  private readonly androidSelector = {
    androidUiText: (text: string) => `${this.ANDROID_UI_SELECTOR}text("${text}")`,
    androidUiAccesibilityId: (id: string) => `~${id}`,
    androidUiClassDescription: (clazz: string, description: string) => `${this.ANDROID_UI_SELECTOR}className("${clazz}").description("${description}")`,
  };

  private readonly iosSelector = {
    getXcuiButtonByName: (name: string) => `**/XCUIElementTypeButton[\`name == "${name}"\`]`,
  };

  protected getSelector(selector: string): ReturnType<WebdriverIO.Browser['$']> {
    if (!selector) throw new Error('Selector is not defined');

    return $(selector);
  }

  protected getByXCUIElementTypeButtonName(name: string) {
    return this.getSelector(this.iosSelector.getXcuiButtonByName(name));
  }

  protected getByAccesibilityId(id: string): ReturnType<WebdriverIO.Browser['$']> {
    if (!id) throw new Error('Id is not defined');

    return this.getSelector(this.androidSelector.androidUiAccesibilityId(id));
  }

  protected getByMobileText(text: string): ReturnType<WebdriverIO.Browser['$']> {
    if (!text) throw new Error('Text is not defined');

    return this.getSelector(this.androidSelector.androidUiText(text));
  }

  protected getByClazzDescription(clazz: string, description: string): ReturnType<WebdriverIO.Browser['$']> {
    if (!clazz || !description) throw new Error('Class or description is not defined');

    return this.getSelector(this.androidSelector.androidUiClassDescription(clazz, description));
  }

  protected async click(element: ChainablePromiseElement): Promise<void> {
    await element?.click();
  }

  protected async setValue(element: ChainablePromiseElement, value: string): Promise<void> {
    await element?.setValue(value);
  }
}

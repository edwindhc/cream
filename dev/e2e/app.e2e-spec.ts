import { CreamPage } from './app.po';

describe('cream App', () => {
  let page: CreamPage;

  beforeEach(() => {
    page = new CreamPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

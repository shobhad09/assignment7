import { AngulardirPage } from './app.po';

describe('angulardir App', () => {
  let page: AngulardirPage;

  beforeEach(() => {
    page = new AngulardirPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

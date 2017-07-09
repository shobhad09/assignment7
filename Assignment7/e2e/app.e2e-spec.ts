import { Assignment7Page } from './app.po';

describe('assignment7 App', () => {
  let page: Assignment7Page;

  beforeEach(() => {
    page = new Assignment7Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

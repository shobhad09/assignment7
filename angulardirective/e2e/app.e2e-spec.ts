import { AngulardirectivePage } from './app.po';

describe('angulardirective App', () => {
  let page: AngulardirectivePage;

  beforeEach(() => {
    page = new AngulardirectivePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

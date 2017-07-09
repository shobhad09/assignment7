import { AngularQuickstartPage } from './app.po';

describe('angular-quickstart App', () => {
  let page: AngularQuickstartPage;

  beforeEach(() => {
    page = new AngularQuickstartPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

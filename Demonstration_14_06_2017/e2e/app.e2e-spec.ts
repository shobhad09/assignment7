import { AngularQuickstartProjectPage } from './app.po';

describe('angular-quickstart-project App', () => {
  let page: AngularQuickstartProjectPage;

  beforeEach(() => {
    page = new AngularQuickstartProjectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

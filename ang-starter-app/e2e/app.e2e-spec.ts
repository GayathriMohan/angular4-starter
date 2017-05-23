import { AngStarterAppPage } from './app.po';

describe('ang-starter-app App', function() {
  let page: AngStarterAppPage;

  beforeEach(() => {
    page = new AngStarterAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

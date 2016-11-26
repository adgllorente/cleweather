import { CleweatherPage } from './app.po';

describe('cleweather App', function() {
  let page: CleweatherPage;

  beforeEach(() => {
    page = new CleweatherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

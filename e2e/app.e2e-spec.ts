import { JsonplaceholderPage } from './app.po';

describe('jsonplaceholder App', () => {
  let page: JsonplaceholderPage;

  beforeEach(() => {
    page = new JsonplaceholderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { Proyect2Page } from './app.po';

describe('proyect2 App', () => {
  let page: Proyect2Page;

  beforeEach(() => {
    page = new Proyect2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

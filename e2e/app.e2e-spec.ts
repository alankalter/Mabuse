import { MabuseDynamitePage } from './app.po';

describe('mabuse-dynamite App', function() {
  let page: MabuseDynamitePage;

  beforeEach(() => {
    page = new MabuseDynamitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

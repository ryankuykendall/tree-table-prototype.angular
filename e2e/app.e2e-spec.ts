import { TreeTablePrototypePage } from './app.po';

describe('tree-table-prototype App', function() {
  let page: TreeTablePrototypePage;

  beforeEach(() => {
    page = new TreeTablePrototypePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

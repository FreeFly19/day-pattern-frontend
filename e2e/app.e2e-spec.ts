import { DayPatternPage } from './app.po';

describe('day-pattern App', () => {
  let page: DayPatternPage;

  beforeEach(() => {
    page = new DayPatternPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

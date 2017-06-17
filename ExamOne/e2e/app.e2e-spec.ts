import { ExamOnePage } from './app.po';

describe('exam-one App', () => {
  let page: ExamOnePage;

  beforeEach(() => {
    page = new ExamOnePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

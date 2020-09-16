//querySelector and querySelectorAll 

describe ('DOM Test', () => {
  beforeEach(() => {
    global.document = {}
    chai.spy.on(document, ['querySelector', 'querySelectorAll'], () => {
      return { innerText: '' }
    });
  });
});
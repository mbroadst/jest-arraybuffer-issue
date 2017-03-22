import 'isomorphic-fetch';

describe('fetch', () => {
  it('should fetch a document', () => {
    return fetch('https://google.com')
      .then(response => response.buffer())
      .then(buf => {
        expect(buf.buffer).toBeInstanceOf(ArrayBuffer);
      });
  });
});

import { PipedaPipe } from './pipeda.pipe';

describe('PipedaPipe', () => {
  it('create an instance', () => {
    const pipe = new PipedaPipe();
    expect(pipe).toBeTruthy();
  });
});

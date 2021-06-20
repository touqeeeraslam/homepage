import { render, cleanup } from '@testing-library/react';
import Image from '../image'

describe('An Image', () => {
  afterEach(cleanup);

  describe('with a src property', () => {
    let container;
    const img = () => container.firstChild;
    beforeEach(() => {
      const image = (
        <Image
          src={'https://example.com/image.jpg'}
          className='pic'
          alt='example-image'
        />
      );
      ({ container } = render(image));
    });
    describe('after src resolves to be a url', () => {
      it('is an img', () => {
        expect(img().tagName).toMatch(/^img$/i);
      });

      it('has the resolved src', () => {
        expect(img()).toHaveAttribute('src', 'https://example.com/image.jpg');
      });

      it('copies other properties', () => {
        expect(img()).toHaveAttribute('alt', 'example-image');
      });
    });
  });
});

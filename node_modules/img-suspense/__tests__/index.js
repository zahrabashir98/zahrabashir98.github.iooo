import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import ImgSuspense from '../src/index.tsx';
// afterEach(cleanup);
const Fallback = () => <p data-testid="fallback">Pending...</p>;

test('[Main] Before & After image load, it should render', () => {
  const { container, getByTestId } = render(
    <ImgSuspense src="Somewhere" fallback={<Fallback />} />
  );
  const img = container.querySelector('img');
  const getFallback = () => {
    try {
      return getByTestId('fallback');
    } catch (e) {
      return null;
    }
  };
  expect(getFallback() !== null).toEqual(true);
  // Fallback still exists
  expect(img.style.display === 'none').toEqual(true);
  // Before load, image still not display

  fireEvent.load(img);
  expect(img.style.display !== 'none').toEqual(true);
  // Image show (display maybe block,inline-block whatever)
  expect(getFallback() === null).toEqual(true);
  // Fallback would not exist
});
test('[Props] onLoad should be call', () => {
  const mockFunc = jest.fn();
  const { container } = render(
    <ImgSuspense src="Somewhere" onLoad={mockFunc} fallback={<Fallback />} />
  );
  expect(mockFunc).toHaveBeenCalledTimes(0);
  const img = container.querySelector('img');
  fireEvent.load(img);
  expect(mockFunc).toHaveBeenCalled();
});
test('[Props] onError should be replace', () => {
  const mockFunc = jest.fn();
  const { container } = render(
    <ImgSuspense src="Somewhere" onError={mockFunc} fallback={<Fallback />} />
  );
  expect(mockFunc).toHaveBeenCalledTimes(0);
  const img = container.querySelector('img');
  fireEvent.error(img);
  expect(mockFunc).toHaveBeenCalled();
});
test('[Exception] should throw exception if onError did not replace', () => {
  const { container } = render(
    <ImgSuspense src="Somewhere" fallback={<Fallback />} />
  );
  const img = container.querySelector('img');
  console.error = () => {};
  expect(() => fireEvent.error(img)).toThrowError();
});

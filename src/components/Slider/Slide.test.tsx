import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Slide, { SlideData } from './Slide';

const slideData: SlideData = {
  index: 0,
  src: 'test-image.jpg',
  headline: 'Test Headline',
  direction: 'Test Direction',
  tags: [{ name: 'Tag 1' }, { name: 'Tag 2' }],
  links: [
    { name: 'Link 1', url: 'http://test.com' },
    { name: 'Link 2', url: 'http://test2.com' },
  ],
};

describe('Slide component', () => {
  test('renders with slide data', () => {
    const { getByText, getByAltText } = render(
      <Slide
        slide={slideData}
        index={0}
        current={0}
        handleSlideClick={jest.fn()}
      />,
    );
    expect(getByAltText('Test Headline')).toBeInTheDocument();
    expect(getByText('Test Headline')).toBeInTheDocument();
    expect(getByText('Test Direction')).toBeInTheDocument();
    expect(getByText('Tags:')).toBeInTheDocument();
    expect(getByText('Tag 1')).toBeInTheDocument();
    expect(getByText('Tag 2')).toBeInTheDocument();
    expect(getByText('Link 1')).toHaveAttribute('href', 'http://test.com');
    expect(getByText('Link 2')).toHaveAttribute('href', 'http://test2.com');
  });

  test('adds slide--current class when current prop matches index prop', () => {
    const { container } = render(
      <Slide
        slide={slideData}
        index={0}
        current={0}
        handleSlideClick={jest.fn()}
      />,
    );
    expect(container.firstChild).toHaveClass('slide slide--current');
  });

  test('adds slide--next class when current prop is 1 less than index prop', () => {
    const { container } = render(
      <Slide
        slide={slideData}
        index={1}
        current={0}
        handleSlideClick={jest.fn()}
      />,
    );
    expect(container.firstChild).toHaveClass('slide slide--next');
  });

  test('adds slide--previous class when current prop is 1 more than index prop', () => {
    const { container } = render(
      <Slide
        slide={slideData}
        index={0}
        current={1}
        handleSlideClick={jest.fn()}
      />,
    );
    expect(container.firstChild).toHaveClass('slide slide--previous');
  });

  test('calls handleSlideClick function when clicked', () => {
    const mockHandleSlideClick = jest.fn();
    const { container } = render(
      <Slide
        slide={slideData}
        index={0}
        current={0}
        handleSlideClick={mockHandleSlideClick}
      />,
    );
    fireEvent.click(container.firstChild!);
    expect(mockHandleSlideClick).toHaveBeenCalled();
  });
});

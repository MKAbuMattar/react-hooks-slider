import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import SliderControl from './SliderControl';

describe('SliderControl component', () => {
  it('should render the correct title and type', () => {
    const handleClick = jest.fn();
    const { getByTitle } = render(
      <SliderControl
        type="prev"
        title="Previous slide"
        handleClick={handleClick}
      />,
    );

    expect(getByTitle('Previous slide')).toBeInTheDocument();
    expect(getByTitle('Previous slide')).toHaveClass('btn--prev');
  });

  it('should call the handleClick function when clicked', () => {
    const handleClick = jest.fn();
    const { getByTitle } = render(
      <SliderControl
        type="next"
        title="Next slide"
        handleClick={handleClick}
      />,
    );

    fireEvent.click(getByTitle('Next slide'));
    expect(handleClick).toHaveBeenCalled();
  });
});

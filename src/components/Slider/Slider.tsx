import React, { useState, MouseEvent } from 'react';
import Slide, { SlideData } from './Slide';
import SliderControl from './SliderControl';

export type SliderProps = {
  slides: SlideData[];
  heading: string;
};

const Slider = ({ slides, heading }: SliderProps) => {
  const [current, setCurrent] = useState(0);
  const headingId = `slider-heading__${heading
    .replace(/\s+/g, '-')
    .toLowerCase()}`;
  const wrapperTransform = {
    transform: `translateX(-${current * (100 / slides.length)}%)`,
  };

  const handlePreviousClick = () => {
    const previous = current - 1;

    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;

    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (e: MouseEvent<HTMLDivElement>) => {
    const index = e.currentTarget?.getAttribute('data-index');
    if (index && current !== +index) {
      setCurrent(+index);
    }
  };

  return (
    <>
      <div className={'slider'} aria-labelledby={headingId}>
        <div className={'slider__wrapper'} style={wrapperTransform}>
          <h3 id={headingId} className={'visuallyhidden'}>
            {heading}
          </h3>

          {slides.map((slide, index: number) => (
            <Slide
              key={index}
              index={index}
              slide={slide}
              current={current}
              handleSlideClick={handleSlideClick}
            />
          ))}
        </div>
      </div>

      <div className={'slider__controls'}>
        <SliderControl
          type={'previous'}
          title={'Go to previous slide'}
          handleClick={handlePreviousClick}
        />

        <SliderControl
          type={'next'}
          title={'Go to next slide'}
          handleClick={handleNextClick}
        />
      </div>
    </>
  );
};

export default Slider;

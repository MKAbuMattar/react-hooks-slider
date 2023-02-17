import React from 'react';
import Slider from './Slider';
import { SlideData } from './Slide';
import './style.scss';

const SliderComponent = ({
  slides,
  heading,
}: {
  slides: SlideData[];
  heading: string;
}) => {
  return (
    <div>
      <Slider slides={slides} heading={heading} />
    </div>
  );
};

export default SliderComponent;

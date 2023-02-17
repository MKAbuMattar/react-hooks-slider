import React from 'react';
import './style.scss';

// Import the slider component
import Slider from './components/Slider';

// Import the slider data
import sliderData from './data/slider.data.json';

// Import the slide data type
import { SlideData } from './components/Slider/Slide';

const App = () => {
  return (
    <div className="app">
      <Slider
        slides={sliderData.slides as SlideData[]}
        heading={sliderData.heading}
      />
    </div>
  );
};

export default App;

import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import Slider from './Slider';
import { SlideData } from './Slide';

describe('Slider', () => {
  const slides = [
    {
      src: 'img1.jpg',
      headline: 'Test Headline',
      direction: 'Test Direction',
      tags: [{ name: 'Tag 1' }, { name: 'Tag 2' }],
      links: [
        { name: 'Link 1', url: 'http://test.com' },
        { name: 'Link 2', url: 'http://test2.com' },
      ],
    },
    {
      src: 'img2.jpg',
      headline: 'Test Headline 2',
      direction: 'Test Direction 2',
      tags: [{ name: 'Tag 3' }, { name: 'Tag 4' }],
      links: [
        { name: 'Link 3', url: 'http://test3.com' },
        { name: 'Link 4', url: 'http://test4.com' },
      ],
    },
    {
      src: 'img3.jpg',
      headline: 'Test Headline 3',
      direction: 'Test Direction 3',
      tags: [{ name: 'Tag 5' }, { name: 'Tag 6' }],
      links: [
        { name: 'Link 5', url: 'http://test5.com' },
        { name: 'Link 6', url: 'http://test6.com' },
      ],
    },
  ] as SlideData[];

  it('should render a slider with slides and controls', () => {
    const { getByText, getAllByRole } = render(
      <Slider slides={slides} heading={'Test Slider'} />,
    );

    expect(getByText('Test Slider')).toBeInTheDocument();
    expect(getAllByRole('img').length).toBe(3);
    expect(getAllByRole('button').length).toBe(2);
  });

  it('should go to the next slide when clicking the "next" control', () => {
    const { getAllByRole } = render(
      <Slider slides={slides} heading={'Test Slider'} />,
    );
    const nextButton = getAllByRole('button')[1];

    fireEvent.click(nextButton);
    expect(getAllByRole('img')[1]).toHaveAttribute('alt', 'Test Headline 2');
  });

  it('should go to the previous slide when clicking the "previous" control', () => {
    const { getAllByRole } = render(
      <Slider slides={slides} heading={'Test Slider'} />,
    );
    const previousButton = getAllByRole('button')[0];

    fireEvent.click(previousButton);
    expect(getAllByRole('img')[2]).toHaveAttribute('alt', 'Test Headline 3');
  });

  it('should go to the clicked slide when clicking a slide', () => {
    const { getAllByRole } = render(
      <Slider slides={slides} heading={'Test Slider'} />,
    );
    const slide = getAllByRole('img')[1];

    fireEvent.click(slide);
    expect(getAllByRole('img')[1]).toHaveAttribute('alt', 'Test Headline 2');
  });
});

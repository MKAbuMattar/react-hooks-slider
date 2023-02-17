import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import RightArrowIcon from './RightArrowIcon';

describe('RightArrowIcon', () => {
  test('renders', () => {
    const { container } = render(<RightArrowIcon />);
    expect(container.firstChild).toBeInTheDocument();
  });

  test('has correct fill', () => {
    const { container } = render(<RightArrowIcon fill="red" />);
    expect(container.firstChild).toHaveAttribute('fill', 'red');
  });

  test('has correct size', () => {
    const { container } = render(<RightArrowIcon size="24" />);
    expect(container.firstChild).toHaveAttribute('width', '24');
    expect(container.firstChild).toHaveAttribute('height', '24');
  });
});

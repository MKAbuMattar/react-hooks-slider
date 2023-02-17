import React from 'react';

// type
export type Props = {
  fill?: string;
  size?: string;
  [x: string]: any;
};

const index = (props: Props) => {
  const { fill = 'currentColor', size = '24', ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      {...otherProps}
    >
      <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
    </svg>
  );
};

export default index;

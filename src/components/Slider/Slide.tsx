import React, { useRef, useEffect, MouseEvent } from 'react';

// icons
import RightArrowIcon from '../Icons/RightArrowIcon';

// types
export type Tag = {
  name: string;
};

export type Link = {
  name: string;
  url: string;
};

export type SlideData = {
  index: number;
  src: string;
  headline: string;
  direction?: string;
  tags?: Tag[];
  links?: Link[];
};

export type SlideProps = {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (e: MouseEvent<HTMLDivElement>) => void;
};

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = slideRef.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)));
    el.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)));
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    slideRef.current.style.setProperty('--x', 0);
    slideRef.current.style.setProperty('--y', 0);
  };

  useEffect(() => {
    const el = slideRef.current.querySelector('img');
    el.style.opacity = 1;
  }, []);

  const { src, headline, direction, tags, links } = slide;
  let classNames = 'slide';

  if (current === index) classNames += ' slide--current';
  else if (current - 1 === index) classNames += ' slide--previous';
  else if (current + 1 === index) classNames += ' slide--next';

  return (
    <div
      ref={slideRef}
      className={classNames}
      onClick={handleSlideClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-index={index}
    >
      <div className={'slide__image-wrapper'}>
        <img className={'slide__image'} alt={headline} src={src} />
      </div>

      <div className={'slide__overlay'}>
        <div className={'slide__content'}>
          <h2 className={'slide__content--headline'}>{headline}</h2>

          {direction && <p className={''}>{direction}</p>}

          {tags && (
            <div className={'slide__content--tag-wrapper'}>
              Tags:{' '}
              {tags.map((tag: Tag, index: number) => (
                <span key={index} className={'slide__content--tag'}>
                  {tag?.name}
                </span>
              ))}
            </div>
          )}

          <div className={'slide__content--button-wrapper'}>
            {links?.map((link: Link, index: number) => (
              <a
                key={index}
                className={'slide__content--button'}
                href={link?.url}
                target={'__blank'}
              >
                {link?.name}{' '}
                <span className={'slide__content--button__icon'}>
                  <RightArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;

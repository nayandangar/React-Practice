import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://wp.w3layouts.com/workcore/wp-content/themes/workcore/assets/images/banner3.jpg',
    altText: 'Slide 1',
    caption: '"A great presentation gives smart ideas an advantage."',
    key: 1,
  },
  {
    src: 'https://wp.w3layouts.com/workcore/wp-content/themes/workcore/assets/images/banner1.jpg',
    altText: 'Slide 2',
    caption: 'Somewhere, something incredible is waiting to be known.',
    key: 2,
  },
  {
    src: 'https://wp.w3layouts.com/workcore/wp-content/themes/workcore/assets/images/banner4.jpg',
    altText: 'Slide 3',
    caption: 'If you’re too comfortable, it’s time to move on. Terrified of what’s next? You’re on the right track.',
    key: 3,
  },
];

function Carausol(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default Carausol;
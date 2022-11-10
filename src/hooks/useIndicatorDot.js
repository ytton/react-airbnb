import { useRef, useState } from 'react';

export function useIndicatorDot(dotLength) {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrow: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const [index, setIndex] = useState(0);

  const changeIndex = i => {
    //动态改变Indicator
    i = i < 0 ? dotLength - 1 : i;
    i = i >= dotLength ? 0 : i;
    sliderRef.current.slickGoTo(i);
    setIndex(i);
  };
  return {
    sliderRef,
    settings,
    index,
    changeIndex
  };
}

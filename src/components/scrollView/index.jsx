import React, { memo, useRef, useState } from 'react';
import ScrollViewWrapper from './style';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useEffect } from 'react';
const ScrollView = memo(props => {
  const { children } = props;
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [offsetX, setOffsetX] = useState(0);
  useEffect(() => {
    const showRight = contentRef.current.clientWidth <= contentRef.current.scrollWidth;
    setShowRight(showRight);
  }, []);
  const changeIndex = function (n) {
    setCurrentIndex(n);
    setShowLeft(n !== 0);
    let offsetX = contentRef.current.children[n]?.offsetLeft ?? 0;
    setOffsetX(offsetX);
    const showRight = contentRef.current.clientWidth + offsetX < contentRef.current.scrollWidth;
    setShowRight(showRight);
  };

  return (
    <ScrollViewWrapper offsetX={offsetX}>
      <div className="content-wrapper">
        <div className="content" ref={contentRef}>
          {children}
        </div>
      </div>
      <div
        className="btn-wrapper left"
        hidden={!showLeft}
        onClick={() => currentIndex >= 1 && changeIndex(currentIndex - 1)}
      >
        <div className="btn">
          <KeyboardArrowLeftIcon size="large" />
        </div>
      </div>
      <div className="btn-wrapper right" hidden={!showRight} onClick={() => changeIndex(currentIndex + 1)}>
        <div className="btn">
          <ChevronRightIcon size="large" />
        </div>
      </div>
    </ScrollViewWrapper>
  );
});

export default ScrollView;

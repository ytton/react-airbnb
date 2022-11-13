import PropTypes from 'prop-types';
import React, { memo, useEffect } from 'react';
import { useRef } from 'react';
import IndicatorWrapper from './style';

const Indicator = memo(props => {
  const { index, children } = props;
  const itemsRef = useRef();
  useEffect(() => {
    const activeEl = itemsRef.current.children[index];
    const containerWidth = itemsRef.current.clientWidth;
    const activeElWidth = activeEl.clientWidth;
    let offsetX = activeEl.offsetLeft - containerWidth / 2 + activeElWidth / 2;
    const maxOffsetX = itemsRef.current.scrollWidth - containerWidth;
    offsetX = offsetX < 0 ? 0 : offsetX;
    offsetX = offsetX > maxOffsetX ? maxOffsetX : offsetX;
    itemsRef.current.style.transform = `translateX(${-offsetX + 'px'})`;
  }, [index, children]);
  return (
    <IndicatorWrapper {...props}>
      <div className="items" ref={itemsRef}>
        {children}
      </div>
    </IndicatorWrapper>
  );
});

Indicator.propTypes = {
  index: PropTypes.number.isRequired,
  maxNumber: PropTypes.number
};
Indicator.defaultProps = {
  maxNumber: 7
};

export default Indicator;

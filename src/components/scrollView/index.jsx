import PropTypes from 'prop-types';
import React, { memo, useRef } from 'react';
import ScrollViewWrapper from './style';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
const ScrollView = memo(props => {
  const { children } = props;
  const contentRef = useRef();
  return (
    <ScrollViewWrapper>
      <div className="content-wrapper">
        <div className="content" ref={contentRef}>
          {children}
        </div>
      </div>
      <div className="btn-wrapper left">
        <div className="btn">
          <KeyboardArrowLeftIcon size="large" />
        </div>
      </div>
      <div className="btn-wrapper right">
        <div className="btn">
          <ChevronRightIcon size="large" />
        </div>
      </div>
    </ScrollViewWrapper>
  );
});

ScrollView.propTypes = {};

export default ScrollView;

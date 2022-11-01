import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { SectionTitleWrapper } from './style';

const SectionTitle = memo(props => {
  return (
    <SectionTitleWrapper>
      <span className="title">{props.title}</span>
      {props.subTitle && (
        <>
          <br />
          <span className="sub-title">{props.subTitle}</span>
        </>
      )}
    </SectionTitleWrapper>
  );
});

SectionTitle.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
};

export default SectionTitle;

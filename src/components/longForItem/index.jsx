import PropTypes from 'prop-types';
import React, { memo } from 'react';
import LongForWrapper from './style';

const LongForItem = memo(props => {
  const { data } = props;
  return (
    <LongForWrapper>
      <div className="cover">
        <img src={data.picture_url} alt="" />
        <div className="shadow"></div>
        <div className="info">
          <div className="city">{data.city}</div>
          <div>均价 {data.price}</div>
        </div>
      </div>
    </LongForWrapper>
  );
});

LongForItem.propTypes = {
  data: PropTypes.object.isRequired
};

export default LongForItem;

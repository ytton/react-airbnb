import { Rating } from '@mui/material';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import RoomItemWrapper from './style';

const RoomItem = memo(props => {
  const { data, width } = props;
  return (
    <RoomItemWrapper
      roomInfoColor={data.verify_info?.text_color}
      width={width}
      rateColor={data.bottom_info?.content_color}
    >
      <div className="linked">
        <div className="cover">
          <img src={data.picture_url} alt="cover" />
        </div>
        {data.verify_info && <div className="room-info">{data.verify_info.messages.join('·')}</div>}
        <div className="title two-ellipsis">{data.name}</div>
      </div>
      <div className="price">￥{data.price}/晚</div>
      <div className="rate">
        <Rating
          name="read-only"
          precision={0.1}
          sx={{ color: data.star_rating_color, fontSize: 12 }}
          value={data.star_rating ?? 5}
          readOnly
        />
        {data.reviews_count}
        {data.bottom_info?.content ? '·' + data.bottom_info.content : ''}
      </div>
    </RoomItemWrapper>
  );
});

RoomItem.propTypes = {
  data: PropTypes.object.isRequired
};

export default RoomItem;

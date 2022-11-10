import React, { memo } from 'react';
import EntireItemV2Wrapper from './style';
import PropTypes from 'prop-types';
import { Avatar } from '@mui/material';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
const EntireItemV2 = memo(props => {
  const { data, width } = props;
  return (
    <EntireItemV2Wrapper
      descColor={data.verify_info?.text_color}
      itemWidth={width}
      rateColor={data.bottom_info?.content_color}
    >
      <div className="cover">
        <img src={data.picture_url} alt="" />
        <div className="new">NEW</div>
        <div className="love">
          <FavoriteTwoToneIcon sx={{ color: '#fff', fontSize: '24px' }} />
        </div>
      </div>
      <div className="right">
        <div className="info">
          <div className="desc">{data.verify_info.messages.join('·')}</div>
          <div className="title">{data.name}</div>
          <div className="tags"></div>
        </div>

        <div className="other-info">
          <div className="price">￥{data.price}</div>
          <div>/晚</div>
          <div className="other">{}</div>
          <div className="avatar">
            <Avatar alt="Remy Sharp" sx={{ width: 40, height: 40 }}>
              B
            </Avatar>
          </div>
        </div>
      </div>
    </EntireItemV2Wrapper>
  );
});

EntireItemV2.propTypes = {
  data: PropTypes.object.isRequired,
  width: PropTypes.string
};

export default EntireItemV2;

import React, { memo } from 'react';
import EntireItemWrapper from './style';
import PropTypes from 'prop-types';
import { Avatar, Rating } from '@mui/material';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import Slider from 'react-slick';
import { useRef } from 'react';
import { useState } from 'react';
const EntireItem = memo(props => {
  const { data, width } = props;
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    adaptiveHeight: true,
    speed: 500,
    arrow: false,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const [index, setIndex] = useState(0);

  const changeIndex = i => {
    //动态改变Indicator
    i = i < 0 ? data.picture_urls.length - 1 : i;
    i = i >= data.picture_urls.length ? 0 : i;
    sliderRef.current.slickGoTo(i);
    setIndex(i);
  };

  return (
    <EntireItemWrapper
      descColor={data.verify_info?.text_color}
      itemWidth={width}
      rateColor={data.bottom_info?.content_color}
    >
      <div className="cover">
        <Slider {...settings} ref={sliderRef} className="slider">
          {data.picture_urls.map(img => (
            <img key={img} src={img} alt="cover" />
          ))}
        </Slider>
        <div className="next btn" onClick={() => changeIndex(index + 1)}>
          next
        </div>
        <div className="prev btn" onClick={() => changeIndex(index - 1)}>
          prev
        </div>
        <div className="indicator"></div>
        <div className="new">NEW</div>
        <div className="love">
          <FavoriteTwoToneIcon sx={{ color: '#fff', fontSize: '24px' }} />
        </div>
      </div>
      <div className="header">
        <div className="info">
          <div className="desc">{data.verify_info.messages.join('·')}</div>
          <div className="title">{data.name}</div>
        </div>
        <div className="avatar">
          <Avatar alt="Remy Sharp" sx={{ width: 40, height: 40 }}>
            B
          </Avatar>
        </div>
      </div>
      <div className="rate">
        <Rating
          name="read-only"
          precision={0.1}
          sx={{ color: data.star_rating_color, fontSize: 12 }}
          value={data.star_rating ?? 5}
          readOnly
        />
        {data.reviews_count}
      </div>
      <div className="footer">
        <div className="price">￥{data.price}/晚</div>
        <div className="other">{}</div>
      </div>
    </EntireItemWrapper>
  );
});

EntireItem.propTypes = {
  data: PropTypes.object.isRequired,
  width: PropTypes.string
};

export default EntireItem;

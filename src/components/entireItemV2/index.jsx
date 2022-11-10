import React, { memo } from 'react';
import EntireItemV2Wrapper from './style';
import PropTypes from 'prop-types';
import { Avatar } from '@mui/material';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import Indicator from '../../base-ui/indicator';
import { useIndicatorDot } from '../../hooks/useIndicatorDot';
import classNames from 'classnames';
import Slider from 'react-slick';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const EntireItemV2 = memo(props => {
  const { data, width } = props;
  const { settings, sliderRef, changeIndex, index } = useIndicatorDot(data.picture_urls.length);

  return (
    <EntireItemV2Wrapper
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
          <ArrowForwardIosIcon className="icon" />
        </div>
        <div className="prev btn" onClick={() => changeIndex(index - 1)}>
          <ArrowBackIosIcon className="icon" />
        </div>
        <div
          className={classNames('indicator', {
            scale: data.picture_urls.length >= 7
          })}
        >
          <Indicator index={index} maxNumber={5}>
            {data.picture_urls.map((img, i) => (
              <span
                key={img}
                className={classNames('dot', { active: i === index }, [
                  index >= 1 && index <= data.picture_urls.length - 1 && i >= index - 6 && i < index
                    ? `prev-${index - i}`
                    : ''
                ])}
              ></span>
            ))}
          </Indicator>
        </div>
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

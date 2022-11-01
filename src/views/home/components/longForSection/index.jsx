import PropTypes from 'prop-types';
import React, { memo } from 'react';
import SectionTitle from '@/components/sectionTitle';
import LongForSectionWrapper from './style';
import LongForItem from '@/components/longForItem';

const LongForSection = memo(props => {
  const { titleInfo, list } = props;
  return (
    <LongForSectionWrapper>
      <SectionTitle title={titleInfo.title} subTitle={titleInfo.subTitle} />
      <div className="list">
        {list.map(item => (
          <LongForItem key={item.city} data={item} />
        ))}
      </div>
      <div className="section-footer">
        <div className="footer-title">
          <img
            aria-hidden="true"
            src="https://z1.muscache.cn/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
            style={{ objectFit: 'cover', verticalAlign: 'bottom' }}
            alt=""
          />{' '}
          四海无忧
        </div>
        <div className="desc">
          「AirCover 四海无忧」为每笔境外房源订单免费提供更全面的保障。爱彼迎用户专享。
          <br />
          请拨打热线获取帮助：400-022-1666 或 +86-10-87833463
        </div>
        <a className="more" href="https://www.airbnb.cn/aircover">
          了解更多
        </a>
      </div>
    </LongForSectionWrapper>
  );
});

LongForSection.propTypes = {
  titleInfo: PropTypes.object.isRequired,
  list: PropTypes.oneOfType([PropTypes.array.isRequired, PropTypes.object])
};

export default LongForSection;

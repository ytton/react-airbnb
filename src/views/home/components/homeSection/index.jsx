import PropTypes from 'prop-types';
import React, { memo } from 'react';
import SectionTitle from '@/components/sectionTitle';
import HomeSectionWrapper from './style';
import RoomItem from '@/components/roomItem';
import HomeSectionFooter from '../homeSectionFooter';
import { useState } from 'react';
import Tabs from '@/components/tabs';
import { useCallback } from 'react';

const HomeSection = memo(props => {
  const { titleInfo, roomList, tabs, roomItemWidth, footerInfo } = props;
  const [tab, setTab] = useState(tabs?.[0]?.name);
  const change = useCallback(v => setTab(v), []);
  let list = roomList;
  tabs && (list = list[tab]);
  return (
    <HomeSectionWrapper>
      <SectionTitle title={titleInfo.title} subTitle={titleInfo.subTitle} />
      <div>{tabs && <Tabs value={tab} change={change} list={tabs} />}</div>
      <div className="room-list">
        {list.slice(0, 8).map(room => (
          <RoomItem key={room.id} width={roomItemWidth ?? '25%'} data={room} />
        ))}
      </div>
      <div className="section-footer">
        <HomeSectionFooter name={tab} />
      </div>
    </HomeSectionWrapper>
  );
});

HomeSection.propTypes = {
  titleInfo: PropTypes.object.isRequired,
  roomItemWidth: PropTypes.string,
  tabs: PropTypes.array,
  roomList: PropTypes.oneOfType([PropTypes.array.isRequired, PropTypes.object]),
  footerInfo: PropTypes.object.isRequired
};

export default HomeSection;

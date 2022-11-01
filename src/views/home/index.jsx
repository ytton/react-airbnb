import React, { memo } from 'react';
import { isEmpty } from '@/utils';
import HomeBanner from './components/homeBanner';
import HomeSection from './components/homeSection';
import { useInitData } from './hooks';
import { HomeWrapper } from './style';
import LongForSection from './components/longForSection';

const Home = memo(() => {
  const { goodPriceRoomInfo, hotRoomInfo, discountRoomInfo, longForCityInfo, highScoreRoomInfo } = useInitData();
  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {!isEmpty(hotRoomInfo) && (
          <HomeSection
            titleInfo={{ title: hotRoomInfo.title }}
            roomItemWidth="33.33%"
            tabs={hotRoomInfo.dest_address ?? []}
            roomList={hotRoomInfo.dest_list ?? []}
            footerInfo={{}}
          />
        )}
        {!isEmpty(discountRoomInfo) && (
          <HomeSection
            titleInfo={{ title: discountRoomInfo.title, subTitle: discountRoomInfo.subtitle }}
            roomItemWidth="33.33%"
            tabs={discountRoomInfo.dest_address ?? []}
            roomList={discountRoomInfo.dest_list ?? []}
            footerInfo={{}}
          />
        )}
        {!isEmpty(longForCityInfo) && (
          <LongForSection
            titleInfo={{ title: longForCityInfo.title, subTitle: longForCityInfo.subtitle }}
            list={longForCityInfo.list ?? []}
          />
        )}
        {!isEmpty(goodPriceRoomInfo) && (
          <HomeSection
            titleInfo={{ title: goodPriceRoomInfo.title }}
            roomList={goodPriceRoomInfo.list ?? []}
            footerInfo={{}}
          />
        )}
        {!isEmpty(highScoreRoomInfo) && (
          <HomeSection
            titleInfo={{ title: highScoreRoomInfo.title, subTitle: highScoreRoomInfo.subtitle }}
            roomItemWidth="25%"
            roomList={highScoreRoomInfo.list ?? []}
            footerInfo={{}}
          />
        )}
      </div>
    </HomeWrapper>
  );
});
export default Home;

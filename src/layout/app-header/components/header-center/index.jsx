import React, { memo } from 'react';
import IconSearch from '../../../../assets/svg/icon_search';
import { StyleWrapper } from './style';

const HeaderCenter = memo(() => {
  return (
    <StyleWrapper>
      <div className="search">
        <div className="text">搜索房源和体验</div>
        <div className="btn">
          <IconSearch />
        </div>
      </div>
    </StyleWrapper>
  );
});

export default HeaderCenter;

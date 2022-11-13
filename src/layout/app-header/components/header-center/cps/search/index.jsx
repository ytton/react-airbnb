import React, { memo } from 'react';
import IconSearch from '@/assets/svg/icon_search';
import SearchWrapper from './style';

const HeaderSearch = memo(props => {
  return (
    <SearchWrapper {...props}>
      <div className="search">
        <div className="text">搜索房源和体验</div>
        <div className="btn">
          <IconSearch />
        </div>
      </div>
    </SearchWrapper>
  );
});

export default HeaderSearch;

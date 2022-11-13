import React from 'react';
import IconSearch from '@/assets/svg/icon_search';
import RealSearchWrapper from './style';
import { useDispatch } from 'react-redux';
import { changeHeaderConfigAction } from '@/store/modules/global';

export default function RealSearch(props) {
  const dispatch = useDispatch();
  const changeIsSearch = value => {
    dispatch(changeHeaderConfigAction({ isSearch: value }));
  };
  return (
    <RealSearchWrapper {...props}>
      <div className="real-search-section">
        <div className="content">
          <div className="city">
            <div>
              <label htmlFor="city">城市</label>
            </div>
            <input type="text" placeholder="你想去那个城市" name="city" id="city" />
          </div>
          <div className="date">
            <div>
              <div>
                <label htmlFor="date">入住退房日期</label>
              </div>
              <input type="text" placeholder="请在日历中选择" name="date" id="date" />
            </div>
          </div>
          <div className="keywords">
            <div>
              <label htmlFor="keywords">关键词</label>
            </div>
            <input type="text" placeholder="景点/地址/房源名" name="keywords" id="keywords" />
            <span className="btn">
              <IconSearch />
            </span>
          </div>
        </div>
      </div>
      <div className="header__mask" onClick={() => changeIsSearch(false)}></div>
    </RealSearchWrapper>
  );
}

import { Button } from '@mui/material';
import classNames from 'classnames';
import React, { memo } from 'react';
import { useState } from 'react';
import { IOSSwitch } from '@/components/switch';
import EntireFilterWrapper from './style';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { changeShowMapAction } from '@/store/modules/entire';

const EntireFilter = memo(() => {
  const tagList = [
    {
      title: '人数',
      formEle: <div>人数</div>
    },
    {
      title: '可免费取消',
      formEle: <div>可免费取消</div>
    },
    {
      title: '房源类型',
      formEle: <div>房源类型</div>
    },
    {
      title: '价格',
      formEle: <div>价格</div>
    },
    {
      title: '位置区域',
      formEle: <div>位置区域</div>
    },
    {
      title: '闪订',
      formEle: <div>闪订</div>
    },
    {
      title: '卧室床数',
      formEle: <div>卧室床数</div>
    },
    {
      title: '促销优惠',
      formEle: <div>促销优惠</div>
    },
    {
      title: '更多筛选条件',
      formEle: <div>更多筛选条件</div>
    }
  ];
  const [activeTag, setActiveTag] = useState('');
  const dispatch = useDispatch();
  const { showMap } = useSelector(
    state => ({
      showMap: state.entire.showMap
    }),
    shallowEqual
  );
  return (
    <EntireFilterWrapper>
      <div className="content">
        <div className="tags">
          {tagList.map(tag => (
            <div key={tag.title} className="tag-wrap">
              <Button
                variant="outlined"
                className={classNames('tag', { active: activeTag === tag.title })}
                onClick={() => setActiveTag(tag.title)}
              >
                {tag.title}
              </Button>
              <div className="panel" hidden={activeTag !== tag.title}>
                {tag.formEle}
                <div className="panel-footer">
                  <span className="btn" onClick={() => setActiveTag('')}>
                    取消
                  </span>
                  <span className="btn">重置</span>
                  <span className="btn" onClick={() => setActiveTag('')}>
                    确定
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="toggle-map">
          显示地图
          <IOSSwitch checked={showMap} onChange={e => dispatch(changeShowMapAction(e.target.checked))} />
        </div>
        <div className="mask" hidden={!activeTag}></div>
      </div>
    </EntireFilterWrapper>
  );
});

export default EntireFilter;

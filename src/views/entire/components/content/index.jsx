import React, { Fragment, memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import EntireContentWrapper from './style';
import { Spin } from 'antd';
import EntireItem from '@/components/entireItem';
import EntireItemV2 from '../../../../components/entireItemV2';
import EntirePager from '../pager';
import { Label, Map, ZoomControl } from 'react-bmapgl';
const EntireContent = memo(() => {
  const { entireList, showLoading, total, showMap } = useSelector(
    state => ({
      entireList: state.entire.entireList,
      total: state.entire.total,
      showLoading: state.entire.showLoading,
      showMap: state.entire.showMap
    }),
    shallowEqual
  );
  return (
    <EntireContentWrapper showMap={showMap}>
      <div className="title">{total}多处住宿</div>
      <div className="content">
        <div className="list">
          {entireList.map(room => (
            <Fragment key={room.id}>
              {showMap && <EntireItemV2 data={room} />}
              {!showMap && <EntireItem width={'20%'} data={room} />}
            </Fragment>
          ))}
          <EntirePager />
        </div>
        <div className="map" hidden={!showMap}>
          {entireList.length >= 1 && (
            <Map center={{ lng: entireList[0].lng, lat: entireList[0].lat }} style={{ height: '100%' }} zoom="12">
              {entireList.map(room => (
                <Label key={room.id} position={{ lng: room.lng, lat: room.lat }} text={room.price_format} />
              ))}
              <ZoomControl />
            </Map>
          )}
        </div>
      </div>
      <div className="mask" hidden={!showLoading}>
        <div className="loading">
          <Spin />
        </div>
      </div>
    </EntireContentWrapper>
  );
});

export default EntireContent;

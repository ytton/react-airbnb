import { Button } from '@mui/material';
import classNames from 'classnames';
import React, { memo, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import ImagesSectionWrapper from './style';
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ImgBrowser from '../../../../base-ui/imgBrowser';
const DetailImagesSection = memo(() => {
  const { detailInfo } = useSelector(
    state => ({
      detailInfo: state.detail.detailInfo
    }),
    shallowEqual
  );
  const [imgBrowserVisible, setImgBrowserVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const imgClick = ind => {
    setIndex(ind);
    setImgBrowserVisible(true);
  };
  return (
    <ImagesSectionWrapper>
      {detailInfo.picture_urls.slice(0, 5).map((img, index) => (
        <div onClick={() => imgClick(index)} className={classNames('img-wrap', { main: index === 0 })} key={img}>
          <img src={img} alt="图片" />
          <div className="img-mask"></div>
        </div>
      ))}
      <Button className="btn collect" variant="outlined">
        <FavoriteBorderIcon className="icon" /> 收藏
      </Button>
      <Button className="btn share" variant="outlined">
        <IosShareIcon className="icon" /> 分享
      </Button>
      <Button className="btn view" variant="outlined" onClick={() => imgClick(0)}>
        查看照片
      </Button>
      {imgBrowserVisible && (
        <ImgBrowser
          index={index}
          close={() => setImgBrowserVisible(false)}
          imgList={detailInfo.picture_urls.map((x, i) => ({ url: x, thumb: x, name: '图片' + (i + 1) }))}
        />
      )}
    </ImagesSectionWrapper>
  );
});

export default DetailImagesSection;

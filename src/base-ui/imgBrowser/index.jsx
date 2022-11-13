import PropTypes from 'prop-types';
import React, { memo, useEffect, useState } from 'react';
import ImgBrowserWrapper from './style';
import CloseIcon from '@mui/icons-material/Close';
import Indicator from '../indicator';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import classNames from 'classnames';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
const ImgBrowser = memo(props => {
  useEffect(() => {
    window.document.documentElement.style.overflowY = 'hidden';
    return () => {
      window.document.documentElement.style.overflowY = 'auto';
    };
  }, []);

  const [isShowIndicator, setIsShowIndicator] = useState(true);
  const [index, setIndex] = useState(props.index);
  const [isNext, setIsNext] = useState(true);
  const { imgList, close } = props;
  const changeIndex = newInd => {
    setIsNext(newInd > index);
    newInd = newInd >= imgList.length ? 0 : newInd;
    newInd = newInd < 0 ? imgList.length - 1 : newInd;
    setIndex(newInd);
  };
  return (
    <ImgBrowserWrapper {...props} isShowIndicator={isShowIndicator} isNext={isNext}>
      <div className="header">
        <CloseIcon className="icon" onClick={close} />
      </div>
      <div className="content">
        <SwitchTransition mode="in-out">
          <CSSTransition key={imgList[index]?.url} classNames="pic" timeout={200}>
            <img src={imgList[index]?.url} alt="" />
          </CSSTransition>
        </SwitchTransition>
        <div className="img-browser__btn prev" onClick={() => changeIndex(index - 1)}>
          <ArrowBackIosIcon className="icon" />
        </div>
        <div className="img-browser__btn next" onClick={() => changeIndex(index + 1)}>
          <ArrowForwardIosIcon className="icon" />
        </div>
      </div>
      <div className="footer" onMouseEnter={() => !isShowIndicator && setIsShowIndicator(true)}>
        <div className="title">
          <div className="state">
            {index + 1}/{imgList.length}：
          </div>
          <div className="name">{imgList[index]?.name}</div>
          <div className="toggle" onClick={() => setIsShowIndicator(!isShowIndicator)}>
            {isShowIndicator && (
              <>
                隐藏照片列表
                <ArrowDropDownIcon />
              </>
            )}
            {!isShowIndicator && (
              <>
                显示照片列表
                <ArrowDropUpIcon />
              </>
            )}
          </div>
        </div>
        <Indicator index={index} className="content">
          {imgList.map((img, i) => (
            <div
              className={classNames('img-wrap', { active: index === i })}
              onClick={() => changeIndex(i)}
              key={img.thumb}
            >
              <img src={img.thumb} alt="" />
              <div className="img-mask"></div>
            </div>
          ))}
        </Indicator>
      </div>
    </ImgBrowserWrapper>
  );
});

ImgBrowser.propTypes = {
  maxImgWidth: PropTypes.string,
  index: PropTypes.number,
  close: PropTypes.func,
  imgList: PropTypes.arrayOf(PropTypes.object).isRequired //{url,thumb,name}
};

export default ImgBrowser;

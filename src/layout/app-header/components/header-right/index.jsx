import React, { memo, useRef } from 'react';
import IconMenu from '@/assets/svg/icon_menu';
import IconUser from '@/assets/svg/icon_user';
import { StyleWrapper } from './style';
import IconExplore from '../../../../assets/svg/icon_explore';
import { useState } from 'react';
import { useEffect } from 'react';

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false);
  const panelRef = useRef();
  useEffect(() => {
    function addClick(e) {
      if (panelRef.current.contains(e.target)) return;
      setShowPanel(false);
    }
    window.addEventListener('click', addClick, true);
    //卸载
    return () => {
      window.removeEventListener('click', addClick);
    };
  }, []);
  return (
    <StyleWrapper>
      <div className="btn">登录</div>
      <div className="btn">注册</div>
      <div className="btn">
        <IconExplore />
      </div>
      <div className="menu" ref={panelRef} onClick={() => setShowPanel(!showPanel)}>
        <IconMenu />
        <IconUser />
        {showPanel && (
          <div className="panel">
            <div className="menu-item">注册</div>
            <div className="menu-item">登录</div>
            <div className="divider"></div>
            <div className="menu-item">出租房源</div>
            <div className="menu-item">开展体验</div>
            <div className="menu-item">帮助</div>
          </div>
        )}
      </div>
    </StyleWrapper>
  );
});

export default HeaderRight;

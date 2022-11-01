import React from 'react';
import { FooterWrapper } from './style';
import { links } from '@/assets/constants/links';
import IconLogoSmall from '@/assets/svg/icon_logo_small';
export default function AppFooter() {
  return (
    <FooterWrapper>
      <div className="content">
        <div className="top">
          {links.map((linkSection, ind) => (
            <div key={ind} className="link-section">
              <div className="title">{linkSection.title}</div>
              <div className="links">
                {linkSection.links.map(link => (
                  <div key={link.text}>
                    <a href={link.url}>{link.text} </a>
                    {link.new && <span className="primary-tag">新推出</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="bottom">
          <div>
            <IconLogoSmall />
          </div>
          <div className="state">
            <div>
              <a href="http://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer" aria-busy="false">
                京ICP备16017121号
              </a>
              <a
                href="https://z1.muscache.cn/pictures/carson/carson-1630514828733-435235f3/original/7c3906bf-e700-43a2-bc1e-38d8fb2f01cb.png"
                target="_blank"
                rel="noopener noreferrer"
                aria-busy="false"
              >
                京ICP证 160773号
              </a>
              <img
                src="https://z1.muscache.cn/airbnb/static/china/public_security_bureau_logo-5d90debd8b3d783447eeffa635df1972.png"
                alt="中国公安局标志"
              />
              <a
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502032345"
                target="_blank"
                rel="noopener noreferrer"
                aria-busy="false"
              >
                京公网安备 11010502032345号
              </a>
              安彼迎网络（北京）有限公司
              <a
                href="https://zzlz.gsxt.gov.cn/businessCheck/verifKey.do?showType=p&amp;serial=91110105MA003A481G-SAIC_SHOW_10000091110105MA003A481G1618910800838&amp;signData=MEQCINyfcfPfcHGXkZ5wcMjCQusHvcciO+xzHqw7aFEdqrJwAiCTe81uChVDmMOD1SmWhnC2Nja4+jX1wp1E01i8iBbTiQ=="
                target="_blank"
                rel="noreferrer"
              >
                <img
                  width="20"
                  height="20"
                  src="https://z1.muscache.cn/pictures/carson/carson-1630570578816-f7812cf5/original/90b7269d-4bd5-44dc-89c1-b50d33fdccd0.png"
                  alt="中国电子营业执照标志"
                />
                <span>营业执照</span>
              </a>
            </div>
            <div>
              <span dir="ltr">
                <span>© 2022 Airbnb, Inc. All rights reserved.</span>
              </span>
              <span>
                <span>
                  <a href="/terms" aria-busy="false">
                    条款
                  </a>
                  <span aria-hidden="true"> · </span>
                  <a href="/terms/privacy_policy" aria-busy="false">
                    隐私政策
                  </a>
                  <span aria-hidden="true">·</span>
                  <a href="/sitemaps/v2" aria-busy="false">
                    网站地图
                  </a>
                  <span aria-hidden="true">· </span>
                  <span>全国旅游投诉渠道 12301</span>
                </span>
              </span>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </FooterWrapper>
  );
}

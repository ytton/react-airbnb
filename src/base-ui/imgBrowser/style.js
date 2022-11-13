import styled from 'styled-components';

const ImgBrowserWrapper = styled.div`
  & {
    position: fixed;
    color: #fff;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #262626;
    .header {
      width: 100%;
      text-align: right;
      .icon {
        font-size: 58px;
        box-sizing: content-box;
        cursor: pointer;
        padding: 16px 28px 8px;
      }
    }
    > .content {
      position: relative;
      flex: 1;
      min-height: 500px;
      width: 100%;
      max-width: 983px;
      white-space: nowrap;
      overflow: hidden;
      img {
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        object-fit: cover;
      }
      .pic-enter {
        opacity: 0;
        transform: translateX(${props => (props.isNext ? '100%' : '-100%')});
      }
      .pic-enter-active {
        opacity: 1;
        transform: translateX(0);
        transition: 200ms all ease;
      }
      .pic-exit {
        opacity: 1;
      }
      .pic-exit-active {
        opacity: 0;
        transition: 200ms all ease;
      }
    }
    .img-browser__btn {
      position: fixed;
      top: 88px;
      bottom: 100px;
      display: flex;
      align-items: center;
      cursor: pointer;
      .icon {
        font-size: 100px;
      }
      &.next {
        right: 0;
      }
      &.prev {
        left: 0;
        .icon {
          transform: translateX(23%);
        }
      }
    }
    .footer {
      height: 100px;
      max-width: 983px;
      width: 100%;
      margin-bottom: 24px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      .title {
        display: flex;
        .toggle {
          margin-left: auto;
          cursor: pointer;
          display: flex;
          align-items: center;
        }
      }
      .content {
        position: relative;
        height: ${props => (props.isShowIndicator ? '70px' : '0px')};
        width: 100%;
        overflow: hidden;
        bottom: 0;
        transition: 200ms;
        .img-wrap {
          position: relative;
          cursor: pointer;
          margin: 5px;
          img {
            height: 68px;
          }
          .img-mask {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.4);
          }
          &.active {
            .img-mask {
              opacity: 0;
            }
          }
        }
      }
    }
    .icon {
      color: #fff;
    }
  }
`;

export default ImgBrowserWrapper;

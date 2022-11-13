import styled from 'styled-components';

const ImagesSectionWrapper = styled.div`
  & {
    background-color: #000;
    overflow: hidden;
    position: relative;
    > .img-wrap {
      float: left;
      height: 294px;
      width: calc(25% - 2px);
      position: relative;
      margin: 1px;
      overflow: hidden;
      cursor: pointer;
      &:hover {
        img {
          transform: scale(1.1);
        }
        > .img-mask {
          opacity: 0;
        }
      }
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        transition: 400ms ease;
      }
      &.main {
        height: 590px;
        width: calc(50% - 2px);
      }
      .img-mask {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        transition: 0.5s;
        background-color: rgba(0, 0, 0, 1);
      }
    }
    &:hover {
      > .img-mask {
        opacity: 0.2;
      }
    }
    .btn {
      position: absolute;
      color: #222;
      font-size: 14px;
      font-weight: 700;
      border-color: #222;
      background-color: #fff;
      border-radius: 7px;
      display: flex;
      align-items: center;
      .icon {
        margin-right: 5px;
      }
      &:hover {
        border-color: #222;
        background-color: #f7f7f7;
      }
      &.share {
        top: 24px;
        right: 124px;
      }
      &.collect {
        top: 24px;
        right: 24px;
      }
      &.view {
        bottom: 24px;
        right: 24px;
      }
    }
  }
`;

export default ImagesSectionWrapper;

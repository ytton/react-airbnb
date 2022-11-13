import styled from 'styled-components';

const RealSearchWrapper = styled.div`
  & {
    .btn {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: #fff;
      border-radius: 100%;
      background-color: ${({ theme }) => theme.color.primaryColor};
      margin-right: 7px;
    }
    .real-search-section {
      z-index: 99999;
      position: absolute;
      display: flex;
      align-items: center;
      top: 79px;
      left: 0;
      right: 0;
      height: ${props => (props.isSearch ? '100px' : 0)};
      transition-property: height;
      transition-duration: 200ms;
      border-bottom: 1px solid ${({ theme }) => (theme.isAlpha ? 'transparent' : theme.color.borderColor)};
      background-color: ${({ theme }) => (theme.isAlpha ? 'transparent' : '#fff')};
      input {
        border: none;
        outline: none;
        background-color: transparent;
        width: 100%;
      }
      .content {
        max-width: 850px;
        margin: 0 auto;
        transition: 200ms ease;
        transform: ${props => (props.isSearch ? 'scale(1, 1) translateY(0)' : 'scale(0, 0) translateY(-70%)')};
        transform-origin: top center;
        opacity: ${props => (props.isSearch ? 1 : 0)};
        border: 1px solid ${({ theme }) => theme.color.borderColor};
        display: flex;
        border-radius: 33px;
        background-color: #fff;
        width: 100%;
        height: 65px;
        &:focus-within {
          background-color: #f7f7f7;
        }
        > div {
          flex: 1;
          cursor: pointer;
          padding: 14px 24px;
          line-height: 1;
          border-radius: 33px;
          border: 1px solid transparent;
          margin: -1px;

          &:focus-within {
            background-color: #fff !important;
            border: 1px solid #fff;
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
            > div {
              border-color: transparent;
            }
            & ~ * .btn,
            .btn {
              width: 55px;
              border-radius: 15px;
              padding: 0 5px;
              &::after {
                content: '搜索';
                transform: scale(0.8);
              }
            }
          }
          label {
            display: block;
            font-size: 12px;
            font-weight: bold;
            margin-bottom: 3px;
            color: #222;
          }
          &:hover {
            background-color: #ebebeb;
          }
        }
        .date {
          > div {
            margin: 0 -24px;
            padding: 0 24px;
            border-left: 1px solid ${({ theme }) => theme.color.borderColor};
            border-right: 1px solid ${({ theme }) => theme.color.borderColor};
          }
        }
        .keywords {
          position: relative;

          .btn {
            position: absolute;
            transition: 150ms;
            transform: scale(1.5);
            right: 10px;
            top: 15px;
          }
        }
      }
    }
    .header__mask {
      position: fixed;
      z-index: 9999;
      display: ${({ theme }) => (theme.isSearch && !theme.isAlpha ? 'block' : 'none')};
      top: 80px;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;

export default RealSearchWrapper;

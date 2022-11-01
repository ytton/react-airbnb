import styled from 'styled-components';

const ScrollViewWrapper = styled.div`
  & {
    position: relative;
    .content-wrapper {
      overflow: hidden;
    }
    .content {
      display: flex;
      flex-wrap: nowrap;
      transform: translateX(-100px);
    }
    .btn-wrapper {
      width: 40px;
      position: absolute;
      top: 0;
      display: flex;
      align-items: center;
      height: 100%;

      &.left {
        left: -10px;
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0.5550595238095238) 36%,
          rgba(255, 255, 255, 0) 100%
        );
        &::before {
          content: '';
          height: 100%;
          box-shadow: 0 0 16px 21px rgba(255, 255, 255, 1);
        }
        .btn {
          transform: translateX(-40%);
        }
      }
      &.right {
        right: -10px;
        justify-content: flex-end;
        background: linear-gradient(
          -90deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0.5550595238095238) 56%,
          rgba(255, 255, 255, 0) 100%
        );
        &::after {
          content: '';
          height: 100%;
          box-shadow: 0 0 16px 21px rgba(255, 255, 255, 1);
        }
        .btn {
          transform: translateX(40%);
        }
      }
    }
    .btn {
      border-radius: 100%;
      width: 28px;
      height: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid ${({ theme }) => theme.color.borderColor};
      background-color: #fff;
      cursor: pointer;
      &:hover {
        ${({ theme }) => theme.mixin.boxShadow};
      }
    }
  }
`;

export default ScrollViewWrapper;

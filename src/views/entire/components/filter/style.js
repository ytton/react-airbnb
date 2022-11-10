import styled from 'styled-components';

const EntireFilterWrapper = styled.div`
  & {
    height: 48px;
    .content {
      display: flex;
      z-index: 901;
      left: 0;
      right: 0;
      background-color: #fff;
      position: fixed;
      padding: 0 16px;
      height: 48px;
      border-bottom: 1px solid ${({ theme }) => theme.color.borderColor};
      box-sizing: border-box;
      align-items: center;
      .tag-wrap {
        display: inline-block;
        position: relative;
      }
      .tag {
        border-color: rgb(220, 224, 224);
        z-index: 901;
        color: #727272;
        font-size: 14px;
        line-height: 1.2;
        padding: 6px 10px;
        &:hover {
          border-color: #f2f2f2;
          color: #727272;
          background-color: #f2f2f2;
        }
        &.active {
          color: #fff;
          background-color: ${({ theme }) => theme.text.highlight};
          &:hover {
            background-color: #006c70;
          }
        }
      }
      .tag-wrap + .tag-wrap {
        margin-left: 10px;
      }
      .toggle-map{
        margin-left: auto;
      }
      .panel {
        position: absolute;
        color: ${({ theme }) => theme.text.primaryColor};
        top: 38px;
        left: 0;
        padding: 24px;
        border-radius: 3px;
        background-color: #fff;
        min-width: 300px;
        border: 1px solid ${({ theme }) => theme.color.borderColor};
        box-shadow: rgb(0 0 0 / 15%) 0px 14px 36px 2px;
        z-index: 901;
        .panel-footer {
          display: flex;
          height: 58px;
          align-items: flex-end;
          .btn {
            cursor: pointer;
            flex-shrink: 0;
            font-weight: bold;
            &:hover {
              text-decoration: underline;
            }
            &:nth-child(2) {
              margin-left: 40px;
            }
            &:last-child {
              margin-left: auto;
              color: ${({ theme }) => theme.text.highlight};
            }
          }
        }
      }
    }
  }
`;

export default EntireFilterWrapper;

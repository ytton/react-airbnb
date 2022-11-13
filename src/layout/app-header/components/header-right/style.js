import styled from 'styled-components';

export const StyleWrapper = styled.div`
  & {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: ${({ theme }) => (theme.isAlpha ? '#fff' : theme.text.secondaryColor)};
    .btn {
      padding: 12px;
      cursor: pointer;
      &:hover {
        background-color: ${({ theme }) => (theme.isAlpha ? 'rgba(255, 255, 255, 0.2)' : '#f7f7f7')};
        border-radius: 50px;
      }
    }
    .menu {
      display: flex;
      position: relative;
      justify-content: space-between;
      color: ${({ theme }) => theme.text.secondaryColor};
      align-items: center;
      padding: 5px 5px 5px 12px;
      border: 1px solid ${({ theme }) => (theme.isAlpha ? '#fff' : theme.color.borderColor)};
      border-radius: 50px;
      background-color: #fff;
      margin-left: 5px;
      width: 77px;
      box-sizing: border-box;
      cursor: pointer;
      transition: box-shadow 200ms;
      .icon-menu {
        margin: 0 12px;
      }
      &:hover {
        ${({ theme }) => theme.mixin.boxShadow}
      }
      .panel {
        top: 47px;
        z-index: 9;
        background-color: #fff;
        right: 0px;
        position: absolute;
        padding: 8px 0;
        width: 241px;
        ${({ theme }) => theme.mixin.boxShadow};
        border-radius: 10px;
        .divider {
          height: 1px;
          margin: 5px 0;
          background-color: ${({ theme }) => theme.color.borderColor};
        }
        .menu-item {
          padding: 12px;
          &:hover {
            background-color: #f7f7f7;
          }
        }
      }
    }
  }
`;

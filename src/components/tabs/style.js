import styled from 'styled-components';

const TabsWrapper = styled.div`
  & {
    width: 100%;
    margin: 10px 0;
    .tab {
      display: inline-block;
      cursor: pointer;
      border: 1px solid ${({ theme }) => theme.color.borderColor};
      min-width: 120px;
      flex-shrink: 0;
      white-space: nowrap;
      padding: 14px 16px;
      box-sizing: border-box;
      transition: 200ms;
      font-size: 17px;
      font-weight: 700;
      border-radius: 2px;
      text-align: center;
      &.active {
        color: #fff;
        background-color: ${({ theme }) => theme.text.highlight};
        border-color: ${({ theme }) => theme.text.highlight};
      }
      &:hover {
        ${({ theme }) => theme.mixin.boxShadow};
      }
    }
    .tab + .tab {
      margin-left: 20px;
    }
  }
`;

export default TabsWrapper;

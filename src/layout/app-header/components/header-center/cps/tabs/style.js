import styled from 'styled-components';

const TabsWrapper = styled.div`
  & {
    display: flex;
    .header-tabs__tab {
      padding: 10px 15px;
      cursor: pointer;
      font-size: 16px;
      margin: 0 10px;
      position: relative;
      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        width: 0;
        margin: 0 auto;
        left: 0;
        right: 0;
        height: 2px;
        background-color: ${({ theme }) => (theme.isAlpha ? '#fff' : '#222')};
        transition: 150ms width;
      }
      &:hover {
        opacity: 0.6;
        &::after {
          width: 70%;
        }
      }
      &.active.active {
        opacity: 1;
        &::after {
          width: 70%;
        }
      }
    }
  }
`;

export default TabsWrapper;

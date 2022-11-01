import styled from 'styled-components';

export const SectionTitleWrapper = styled.div`
  & {
    margin-top: 38px;
    margin-bottom: 12px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    &::after {
      content: '';
      border-top: 1px solid ${({ theme }) => theme.text.primaryColor};
      border-right: 1px solid ${({ theme }) => theme.text.primaryColor};
      position: absolute;
      transform-origin: center center;
      transform: translate(200%, -50%) rotate(45deg);
      opacity: 0;
      top: 50%;
      right: 0;
      height: 8px;
      width: 8px;
      transition: 200ms;
    }
    &:hover::after {
      opacity: 1;
    }
    > .title {
      display: inline-block;
      font-weight: bold;
      font-size: 22px;
      color: ${({ theme }) => theme.text.primaryColor};
    }
    > .sub-title {
      display: inline-block;
      font-size: 16px;
      margin-top: 12px;
      margin-bottom: 20px;
      line-height: 24px;
    }
  }
`;

import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  & {
    height: 100%;
    main {
      padding-top: ${props => (props.fixedHeader ? '80px' : 0)};
      min-height: 100%;
      box-sizing: border-box;
      padding-bottom: ${props => (props.showFooter ? '387px' : 0)};
    }
  }
`;

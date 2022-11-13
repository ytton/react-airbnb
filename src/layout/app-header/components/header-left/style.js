import styled from 'styled-components';

export const StyleWrapper = styled.div`
  & {
    flex: 1;
    display: flex;
    align-items: center;
    .logo {
      cursor: pointer;
      color: ${({ theme }) => (theme.isAlpha ? '#fff' : theme.color.primaryColor)};
    }
  }
`;

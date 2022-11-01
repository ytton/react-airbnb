import styled from 'styled-components';

const LinkWrapper = styled.span`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  &:hover {
    a {
      text-decoration: underline;
    }
  }
`;

export default LinkWrapper;

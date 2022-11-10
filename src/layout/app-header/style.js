import styled from 'styled-components';

export const StyleWrapper = styled.header`
  & {
    display: flex;
    position: ${props => (props.fixed ? 'fixed' : 'static')};
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    align-items: center;
    background-color: #fff;
    padding: 0 20px;
    height: 80px;
    border-bottom: 1px solid #eee;
  }
`;

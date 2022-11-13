import styled from 'styled-components';

export const StyleWrapper = styled.header`
  & {
    display: flex;
    position: relative;
    position: ${props => (props.isFix ? 'fixed' : 'static')};
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    align-items: center;
    background-color: ${props => (props.isAlpha ? 'transparent' : '#fff')};
    padding: 0 20px;
    height: 80px;
    border-bottom: 1px solid ${props => (props.isAlpha ? 'transparent' : '#eee')};
    color: ${props => (props.isAlpha ? 'white' : '#222')};
  }
`;

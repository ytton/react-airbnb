import styled from 'styled-components';

const IndicatorWrapper = styled.div`
  & {
    position: relative;
    overflow: hidden;
    width: 100%;
    .items {
      display: flex;
      flex-wrap: nowrap;
      transition: 200ms 100ms ease;
      > * {
        width: ${props => 100 / props.maxNumber}%;
      }
    }
  }
`;

export default IndicatorWrapper;

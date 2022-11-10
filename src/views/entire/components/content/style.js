import styled from 'styled-components';

const EntireContentWrapper = styled.div`
  & {
    padding-bottom: 40px;
    min-height: 800px;
    .content {
      > .title {
        font-weight: 700;
        font-size: 22px;
        margin: 20px;
        margin-bottom: 12px;
      }
    }
    .list {
      padding: 0 20px;
      display: flex;
      flex-wrap: wrap;
      min-height: 700;
      min-width: 697px;
      flex: 1;
      margin-right: ${props => (props.showMap ? '50%' : '0')};
    }
    .map {
      width: 50%;
      position: fixed;
      right: 0;
      top: 128px;
      bottom: 0;
    }
    .mask {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export default EntireContentWrapper;

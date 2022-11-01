import styled from 'styled-components';

const LongForWrapper = styled.div`
  & {
    width: 20%;
    flex-shrink: 0;
    padding: 0 8px;
    box-sizing: border-box;
    position: relative;
    cursor: pointer;
    .cover {
      padding-bottom: 123%;
      position: relative;
      border-radius: 3px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
      .shadow {
        position: absolute;
        background: linear-gradient(-180deg, rgba(0, 0, 0, 0) 3%, rgb(0, 0, 0) 100%);
        box-sizing: border-box;
        opacity: 0.3;
        background-clip: content-box;
        width: 100%;
        top: 50%;
        bottom: 0;
      }
      .info {
        position: absolute;
        bottom: 0;
        width: 100%;
        color:#fff;
        font-weight: 800;
        padding-bottom: 32px;
        text-align: center;
        line-height: 1.4;
        .city{
          font-size: 18px;
        }
      }
    }
  }
`;

export default LongForWrapper;

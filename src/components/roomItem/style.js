import styled from 'styled-components';

const RoomItemWrapper = styled.div`
  & {
    width: ${props => props.width};
    padding: 0 8px;
    box-sizing: border-box;
    padding-bottom: 12px;
    .linked {
      cursor: pointer;
    }
    .cover {
      padding-top: 68%;
      position: relative;
      overflow: hidden;
      border-radius: 3px;
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    .room-info {
      margin-top: 8px;
      font-size: 12px;
      color: ${props => props.roomInfoColor ?? props.theme.color.primaryColor};
      font-weight: 800;
      line-height: 1.3em;
    }
    .title {
      font-size: 16px;
      font-weight: 800;
      line-height: 1.375em;
    }
    .price {
      font-size: 14px;
      line-height: 2;
    }
    .rate {
      font-size: 12px;
      display: flex;
      align-items: center;
      color: ${props => props.rateColor};
      font-weight: 800;
    }
  }
`;

export default RoomItemWrapper;

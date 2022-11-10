import styled from 'styled-components';

const EntireItemWrapper = styled.div`
  & {
    width: ${props => props.itemWidth};
    flex-shrink: 0;
    padding: 8px;
    .cover {
      min-height: 193px;
      position: relative;
      background-color: red;
      border-radius: 3px;
      overflow: hidden;
      padding-top: 68%;
      .slider {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        img {
          height: 100%;
        }
      }
      .new {
        position: absolute;
        top: 10px;
        left: 10px;
        padding: 6px 8px;
        background-color: #fff;
        font-size: 12px;
        line-height: 1.33333em;
        font-weight: 800;
        border-radius: 2px;
      }
      .love {
        position: absolute;
        top: 10px;
        right: 10px;
      }
      .btn {
        position: absolute;
        display: flex;
        align-items: center;
        top: 0;
        bottom: 0;
      }
      .next {
        right: 0;
      }
      .prev {
        left: 0;
      }
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .info {
        .desc {
          font-size: 12px;
          line-height: 1.33333em;
          color: #767676;
          margin: 3px 0;
          font-weight: 800;
        }
        .title {
          word-wrap: break-word;
          font-size: 16px;
          line-height: 1.375em;
          font-weight: 800;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      }
      .avatar {
        width: 52px;
        flex-shrink: 0;
        display: flex;
        justify-content: flex-end;
      }
    }
    .rate {
    }
    .footer {
      .price {
      }
      .other {
      }
    }
  }
`;

export default EntireItemWrapper;

import styled from 'styled-components';

const EntireItemWrapper = styled.div`
  & {
    width: ${props => props.itemWidth};
    flex-shrink: 0;
    padding: 8px;
    .cover {
      position: relative;
      border-radius: 3px;
      overflow: hidden;
      aspect-ratio: 353/234;
      cursor: pointer;
      &:hover {
        .btn {
          .icon {
            display: inline-block;
          }
          &.next {
            background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
          }
          &.prev {
            background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
          }
        }
      }
      .slider {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        .slick-list,
        .slick-track,
        .slick-slide > div,
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
        width: 20%;
        justify-content: center;
        .icon {
          color: #fff;
          display: none;
        }
      }
      .indicator {
        position: absolute;
        bottom: 10px;
        padding: 0 20%;
        display: flex;
        justify-content: center;
        right: 0;
        left: 0;
        .dot {
          flex-shrink: 0;
          display: inline-block;
          padding: 3px;
          background-clip: content-box;
          width: 14px;
          aspect-ratio: 1;
          background-color: #f5f4f4;
          border-radius: 100%;
          transition: 200ms;
          &.active {
            background-color: #fff;
            transform: scale(1.05);
          }
        }
        &.scale {
          .dot {
            &.prev-1 {
              transform: scale(0.8);
            }
            &.prev-2 {
              transform: scale(0.7);
            }
            &.prev-3 {
              transform: scale(0.6);
            }
            &.prev-4 {
              transform: scale(0.5);
            }
            &.prev-5 {
              transform: scale(0.4);
            }
            &.prev-6 {
              transform: scale(0.3);
            }
            &.active {
              & + .dot {
                transform: scale(0.8);
              }
              & + .dot + .dot {
                transform: scale(0.7);
              }
              & + .dot + .dot + .dot {
                transform: scale(0.6);
              }
              & + .dot + .dot + .dot + .dot {
                transform: scale(0.5);
              }
              & + .dot + .dot + .dot + .dot + .dot {
                transform: scale(0.4);
              }
              & + .dot + .dot + .dot + .dot + .dot + .dot {
                transform: scale(0.3);
              }
            }
          }
        }
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

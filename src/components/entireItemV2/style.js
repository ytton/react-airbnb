import styled from 'styled-components';

const EntireItemV2Wrapper = styled.div`
  & {
    display: flex;
    height: 200px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.color.borderColor};
    margin: 8px;
    margin-bottom: 12px;
    cursor: pointer;
    &:hover {
      ${({ theme }) => theme.mixin.boxShadow};
    }
    .cover {
      width: 300px;
      flex-shrink: 0;
      position: relative;
      background-color: red;
      border-radius: 3px;
      overflow: hidden;
      img {
        position: absolute;
        display: none;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
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
    }
    .right {
      flex: 1;
      padding: 20px 16px;
      display: flex;
    }
    .info {
      flex: 1;
      padding-right: 16px;
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
      margin-top: auto;
      flex-shrink: 0;
      display: inline-flex;
      justify-content: flex-end;
    }
    .other-info {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      border-left: 1px solid ${({ theme }) => theme.color.borderColor};
      width: 150px;
    }
    .rate {
    }
    .other-info {
      .price {
        font-size: 18px;
        font-weight: 700;
      }
      .other {
      }
    }
  }
`;

export default EntireItemV2Wrapper;

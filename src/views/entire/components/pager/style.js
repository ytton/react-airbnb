import styled from 'styled-components';

const EntirePagerWrapper = styled.div`
  & {
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .MuiPagination-root .MuiPaginationItem-root {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .MuiPagination-root .Mui-selected {
      background-color: #222222;
      &:hover {
        background-color: #222222;
      }
    }
    .MuiPaginationItem-icon {
      font-size: 20px;
    }

    .desc {
      font-weight: 400;
      color: rgb(113, 113, 113);
      margin: 40px 0;
    }
    .mask {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default EntirePagerWrapper;

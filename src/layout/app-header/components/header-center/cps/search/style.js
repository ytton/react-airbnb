import styled from 'styled-components';

const SearchWrapper = styled.div`
  & {
    .btn {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      color: #fff;
      border-radius: 100%;
      background-color: ${({ theme }) => theme.color.primaryColor};
      margin-right: 7px;
    }
    .search {
      display: flex;
      align-items: center;
      width: 300px;
      height: 45px;
      border-radius: 50px;
      font-weight: bolder;
      border: 1px solid ${({ theme }) => theme.color.borderColor};
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      cursor: pointer;
      transition: box-shadow 0.3s;
      &:hover {
        ${({ theme }) => theme.mixin.boxShadow}
      }
      .text {
        padding: 0 16px;
        flex: 1;
      }
    }
  }
`;

export default SearchWrapper;

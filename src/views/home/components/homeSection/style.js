import styled from 'styled-components';

const HomeSectionWrapper = styled.div`
  & {
    margin-bottom: 30px;
    .room-list {
      display: flex;
      flex-wrap: wrap;
      margin: 0 -8px;
    }
    .section-footer {
      margin-top: 15px;
    }
  }
`;

export default HomeSectionWrapper;

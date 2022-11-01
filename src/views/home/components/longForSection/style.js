import styled from 'styled-components';

const LongForSectionWrapper = styled.div`
  & {
    margin-bottom: 30px;
    .list {
      display: flex;
      flex-wrap: nowrap;
      margin: 0 -8px;
    }
    .section-footer {
      margin-top: 55px;
      .footer-title {
        height: 1em;
        font-size: 18px;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        font-weight: 800;
        img {
          height: 100%;
          margin-right: 5px;
        }
      }
      .desc {
        font-size: 16px;
        line-height: 1.4;
      }
      .more {
        margin-top: 15px;
        display: block;
        font-weight: 800;
        font-size: 16px;
        color: ${({ theme }) => theme.text.highlight};
      }
    }
  }
`;

export default LongForSectionWrapper;

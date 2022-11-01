import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  & {
    border-top: 1px solid ${({ theme }) => theme.color.borderColor};
    height: 317px;
    box-sizing: border-box;
    margin-top: -317px;
    .content {
      max-width: var(--maxWidth);
      margin: 0 auto;
      padding: 48px 24px;
      .top {
        display: flex;
        font-weight: bolder;
        .link-section {
          flex: 1;
          padding: 0 5px;
          .title {
            color: ${({ theme }) => theme.text.primaryColor};
            margin-bottom: 15px;
          }
          a {
            line-height: 1.7;
            color: #767676;
          }
          .primary-tag {
            margin-left: 5px;
          }
        }
      }
      .bottom {
        margin-top: 20px;
        padding-top: 20px;
        align-items: center;
        display: flex;
        border-top: 1px solid ${({ theme }) => theme.color.borderColor};
        .state {
          margin-left: 10px;
          line-height: 1.5;
        }
      }
    }
  }
`;

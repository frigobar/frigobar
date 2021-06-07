import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'content'
    'footer';
  grid-template-rows: min-content auto min-content;
  height: 100%;
`;

const Main = styled.main`
  grid-area: content;
  display: flex;
  flex-wrap: wrap;

  max-width: 1440px;
  margin: 60px auto;

  padding: 40px;

  @media (max-width: 768px) {
    padding: 24px;
    margin: 0 auto 10px;
  }
`;

const Section = styled.div`
  display: flex;
  width: 100%;

  > div:first-child {
    flex-basis: 50%;
    flex-shrink: 0;
  }

  &:last-child {
    margin-top: 60px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  max-width: 262px;
  margin-bottom: 26px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h2(
  ({ bordered }) => `
    position: relative;

    margin: 0;
    margin-bottom: 8px;
    padding-top: 15px;

    color: #363636;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 35px;

    @media (max-width: 768px) {
      font-size: 1.125rem;
      padding-top: 0;
      margin-bottom: 4px;
      line-height: 1.125rem;
    }

    ${
      bordered
        ? `
          &:before {
            content: '';

            position: absolute;
            top: 0;
            
            width: 60px;
            height: 8px;

            background-color: #E47171;
          }
        `
        : ''
    }
  `,
);

const Description = styled.p(
  ({ big }) => `
    margin: 0;

    color: #5a5a5a;
    font-size: 1.125rem;
    line-height: 26px;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    ${
      big
        ? `
        font-size: 1.5rem;
        line-height: 40px;

        margin-bottom: 40px;

        @media (max-width: 768px) {
          font-size: 1.25rem;
          line-height: 30px;
        }
      `
        : ''
    }
`,
);

const Card = styled.div`
  display: flex;
  padding-left: 80px;

  ${Description} {
    margin-bottom: 24px;
  }

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const Icon = styled.img`
  margin-right: 38px;
  width: 70px;
  height: 70px;

  @media (max-width: 768px) {
    margin-right: 24px;
    width: 50px;
    height: 50px;
  }
`;

const StudyDesktop = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const StudyMobile = styled.div`
  display: none;
  margin-bottom: 24px;

  ${Title} {
    font-size: 1rem;
    margin-bottom: 0;

    @media (max-width: 768px) {
      margin-bottom: 8px;
      padding-top: 15px;
    }
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export {
  Wrapper,
  Main,
  Logo,
  Title,
  Section,
  Description,
  Card,
  Icon,
  StudyDesktop,
  StudyMobile,
};

import styled from 'styled-components';

const Wrapper = styled.footer<{ home?: boolean }>(
  ({ home, theme: { spacings } }) => `
    grid-area: footer;

    padding-right: ${spacings.small}px;
    padding-bottom: ${spacings.large}px;
    padding-left: ${spacings.small}px;
    padding-top: ${spacings.large}px;

    text-align: center;

    @media (max-width: 768px) {
      font-size: 0.875rem;
    }

    ${
      home
        ? `
        background-color: #EFEFEF;
        padding-top: 34px;
        padding-bottom: 34px;
        font-size: 1.125rem;
      `
        : ''
    }
  `,
);

export default Wrapper;

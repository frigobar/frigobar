import styled from 'styled-components';

const Grid = styled.main(
  ({ theme: { spacings } }) => `
  position: relative;

  display: grid;
  grid-template-areas:
    'header header'
    'navigation content'
    'navigation footer';
  grid-template-columns: 250px 1fr;
  grid-template-rows: max-content auto max-content;
  grid-gap: ${spacings.small}px;
  height: 100%;

  @media (max-width: 830px) {
    display: block;
    height: 100%;
  }
`,
);

const Button = styled.button(
  ({ show, theme }) => `
  position: fixed;
  top: 40px;
  left: 0;
  z-index: 5;

  width: 40px;
  height: 40px;

  background-color: white;
  border: none;
  border-top-right-radius: 9999px;
  border-bottom-right-radius: 9999px;
  border-right: 1px solid ${theme.colors.neutral[200]};
  border-top: 1px solid ${theme.colors.neutral[200]};
  border-bottom: 1px solid ${theme.colors.neutral[200]};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: transform 0.3s ease;
  will-change: transition;

  ${show ? `transform: translateX(280px);` : ''}

  @media (min-width: 830px) {
    display: none;
  }
`,
);

export { Grid, Button };

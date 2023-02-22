import { DefaultTheme, keyframes, css } from "styled-components";

const colors = {
  primary: "#2196F3",
  white: "#ffffff",
  black: "#000000"
};

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideOutToLeft = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(-100px);
  }
`;

const animations = {
  slideUp: {
    first: css`
      animation: 0.6s ease-out 0s ${slideUp};
    `,
    second: css`
      animation: 0.6s ease-out 0.1s ${slideUp};
    `,
    third: css`
      animation: 0.6s ease-out 0.2s ${slideUp};
    `,
    fourth: css`
      animation: 0.6s ease-out 0.3s ${slideUp};
    `
  },
  slideOutToLeft: {
    first: css`
      animation: 0.8s ease-out 0s forwards ${slideOutToLeft};
    `,
    second: css`
      animation: 0.8s ease-out 0.1s forwards ${slideOutToLeft};
    `,
    third: css`
      animation: 0.8s ease-out 0.2s forwards ${slideOutToLeft};
    `,
    fourth: css`
      animation: 0.8s ease-out 0.3s forwards ${slideOutToLeft};
    `
  }
};

export type ColorsTypes = typeof colors;
export type AnimationsTypes = typeof animations;

export const theme: DefaultTheme = {
  colors,
  animations
};

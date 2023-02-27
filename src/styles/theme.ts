import { DefaultTheme, keyframes, css } from "styled-components";

const colors = {
  primary: "#ff7f00",
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

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const animations = {
  slideUp: {
    animationName: slideUp.getName(),
    first: css`
      animation: 0.5s ease-out ${slideUp};
    `,
    second: css`
      animation: 0.6s ease-out ${slideUp};
    `,
    third: css`
      animation: 0.7s ease-out ${slideUp};
    `,
    fourth: css`
      animation: 0.8s ease-out ${slideUp};
    `
  },
  slideOutToLeft: {
    animationName: slideOutToLeft.getName(),
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
  },
  slideInFromRight: {
    animationName: slideInFromRight.getName(),
    first: css`
      animation: 0.5s ease-out ${slideInFromRight};
    `,
    second: css`
      animation: 0.6s ease-out ${slideInFromRight};
    `,
    third: css`
      animation: 0.7s ease-out ${slideInFromRight};
    `,
    fourth: css`
      animation: 0.8s ease-out ${slideInFromRight};
    `
  }
};

export type ColorsTypes = typeof colors;
export type AnimationsTypes = typeof animations;

export const theme: DefaultTheme = {
  colors,
  animations
};

import { DefaultTheme } from "styled-components";

const colors = {
  primary: "#2196F3",
  white: "#ffffff",
  black: "#000000"
};

export type ColorsTypes = typeof colors;

export const theme: DefaultTheme = {
  colors
};

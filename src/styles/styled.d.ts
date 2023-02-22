import "styled-components";
import { ColorsTypes, AnimationsTypes } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsTypes;
    animations: AnimationsTypes;
  }
}

import type { ColorMode, ColorScheme } from "../types/colors";

export const colorModeClassMap: {
  [keyof in ColorMode]: string;
} = {
  light: "colormode-light",
  dark: "colormode-dark"
};

export const colorSchemeClassMap: {
  [keyof in ColorScheme]: string;
} = {
  default: "colorscheme-default"
};
export const buildColorsBodyClasses = (colorScheme: ColorScheme, colorMode: ColorMode) => {
  return [colorModeClassMap[colorMode], colorSchemeClassMap[colorScheme]].join(" ");
};

export const DEFAULT_COLOR_MODE: ColorMode = "light";
export const DEFAULT_COLORSCHEME: ColorScheme = "default";

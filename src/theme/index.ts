import { createTheme, ThemeOptions, Theme } from "@material-ui/core/styles";
import { themeTypography } from "./themeTypography";
import { mcmColorTheme } from "./customColor";

declare module "@material-ui/core/styles" {
  interface Theme {
    mcmColorTheme: typeof mcmColorTheme;
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    mcmColorTheme?: typeof mcmColorTheme;
  }
}

const baseTheme: Partial<ThemeOptions> = {
  mcmColorTheme,
  typography: themeTypography,
};

const theme = createTheme(baseTheme);

export type IMcmContainerTheme = keyof Theme["mcmColorTheme"];

export default theme;

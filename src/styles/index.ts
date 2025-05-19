import { createStitches } from "@stitches/react";

export const { 
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      primary: "#0070f3",
      secondary: "#1db954",
      background: "#f0f0f0",
      text: "#333333",
    },
    fonts: {
      body: "Arial, sans-serif",
      heading: "Georgia, serif",
    },
  },
  media: {
    bp1: "(max-width: 600px)",
    bp2: "(max-width: 900px)",
  },
});
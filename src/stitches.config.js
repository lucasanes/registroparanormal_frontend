import { createStitches } from "@stitches/react";

export const { styled, css, keyframes, theme } = createStitches({

  theme: {
    colors: {
      white: "#ffffff",
      white90: "#ffffff90",
      white75: "#ffffff75",
      white50: "#ffffff50",
      white25: "#ffffff25",
      bar: "#ffffff14",
      purple: "#800080",
      cyan: "#00b4dc",
      cyanHover: "#00b4dc50",
      orange: "#ff6200",
      orangeHover: "#ff620050",
      isCritic: "#03fc52",
      isDisaster: "#ff3737",
      pv: "#9a0000",
      ps: "#005795",
      pe: "#dea600ff",
    }
  },

  media: {
    sm: "(max-width: 500px)",
    md: "(max-width: 680px)",
    lg: "(max-width: 980px)",
    xlg: "(max-width: 1300px)",
  }
});

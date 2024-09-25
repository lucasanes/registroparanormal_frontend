import { globalCss } from "@stitches/react";

export const GlobalStyles = globalCss({
  "@font-face": [
    {
      fontFamily: "Brooklyn",
      src: 'url("/fonts/BrooklynChillOut.ttf") format("truetype")',
      fontWeight: "normal",
      fontStyle: "normal",
    },
  ],

  ":root": {
    fontSize: "62.5%",
  },

  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontSize: "1.6rem",
    "::-webkit-scrollbar": {
      backgroundColor: "#1d1d1d",
      width: "7px",
      borderTopRightRadius: "5px",
      borderBottomRightRadius: "5px",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "#5b5b5b",
      borderRadius: "5px",
    },
  },

  svg: {
    maxWidth: "100% !important",
  },

  body: {
    width: "100vw",
    minHeight: "100vh",
    position: "fixed",
    fontFamily: "Arial, Helvetica, sans-serif",
    backgroundColor: "rgb(10,10,10)",
    overflow: "hidden",
  },

  button: {
    cursor: "pointer",
  },

  input: {
    "-webkit-text-fill-color": "white !important",
  },

  "input:-webkit-autofill": {
    "-webkit-box-shadow": "0 0 0 30px rgb(20,20,20) inset",
  },

  "input[type=number]::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
  },

  "input[type=number]": {
    "-moz-appearance": "textfield",
    appearance: "textfield",
  },
  "input:invalid": {
    "-webkit-text-fill-color": "white !important",
    color: "white",
  },
});

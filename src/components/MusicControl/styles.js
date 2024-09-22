import { styled } from "../../stitches.config";

export const Container = styled("div", {
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "left",
  marginBottom: "4rem",

  input: {
    marginBottom: ".3rem",
  },

  button: {
    marginLeft: ".5rem",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#0084ff",
    position: "relative",
    top: ".3rem",
    right: "2rem",
  },
});

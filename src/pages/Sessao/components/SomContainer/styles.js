import { styled } from "../../../../stitches.config";

export const Container = styled("div", {
  border: "2px solid $white75",
  marginBottom: "2rem",
  borderRadius: "0.5rem",
  width: "100%",
});

export const HeaderContainer = styled("div", {
  padding: "1rem 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",

  h1: {
    textAlign: "center",
    color: "white",
    fontSize: "2rem",
    fontFamily: "Special Elite",
    letterSpacing: ".1rem",
    paddingTop: ".3rem",
  },

  button: {
    background: "none",
    border: "none",
    color: "Green",
    position: "absolute",
    right: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  svg: {
    transition: "0.3s",
  },

  "button:hover": {
    svg: {
      filter: "brightness(2)",
    },
  },
});

export const BodyContainer = styled("div", {
  position: "relative",
  padding: "1rem",
  paddingTop: "4rem",
  display: "flex",
  gap: "3rem",
  overflow: "hidden",

  h1: {
    position: "absolute",
    textTransform: "capitalize",
    color: "$white",
    top: 15,
    left: 20,
  },

  audio: {
    position: "relative",
    top: "1.5rem",
  },
});

export const Folder = styled("button", {
  background: "none",
  border: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "1rem",
  borderRadius: "0.5rem",
  color: "white",
  transition: "0.3s",
  cursor: "pointer",
  textTransform: "capitalize",

  "&:hover": {
    background: "$white25",
  },
});

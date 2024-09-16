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
    wordWrap: "break-word",
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
  display: "flex",
  flexDirection: "column",
  padding: "1rem",

  div: {
    display: "flex",
    gap: "3rem",
    flexWrap: "wrap",
  },

  h1: {
    textTransform: "capitalize",
    color: "$white",
    marginBottom: "1rem",
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
  gap: "0.5rem",

  "&:hover": {
    background: "$white25",
  },
});

export const Item = styled("div", {
  position: "relative",
  display: "flex",

  ".button": {
    minWidth: "8rem",
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
    gap: "0.5rem",
  },

  ".delete": {
    position: "absolute",
    right: 0,
    top: "0",
    zIndex: 3,
  },

  ".button:hover": {
    background: "$white25",
  },
});

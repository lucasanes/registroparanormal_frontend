import { styled } from "../../stitches.config";

export const Container = styled("div", {
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  video: {
    width: "100%",
    maxWidth: "100vw",
    maxHeight: "100vh",
    aspectRatio: "16/9"
  },

  ".player": {
    position: "fixed",
    top: "1rem",
    left: "7rem",
    zIndex: 2
  }
});

export const Buttons = styled("div", {
  zIndex: 2,
  position: "fixed",
  top: "10px",
  left: "10px",
  display: "flex",

  'button:first-child': {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    border: "none",
    borderBottomLeftRadius: "5px",
    borderTopLeftRadius: "5px",
    backgroundColor: "$white25",
    color: "$white",
    transition: "0.2s",

    "&:hover": {
      backgroundColor: "$white50"
    }
  },

  'button:last-child': {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px",
    border: "none",
    borderLeft: "1px solid $white",
    backgroundColor: "$white25",
    color: "$white",
    transition: "0.2s",
    borderBottomRightRadius: "5px",
    borderTopRightRadius: "5px",

    "&:hover": {
      backgroundColor: "$white50"
    }
  },

  variants: {
    active: {
      true: {
        'button:first-child': {
          backgroundColor: "#28af51",
          color: "$white",

          "&:hover": {
            backgroundColor: "#34db66"
          }
        }
      }
    }
  }
});

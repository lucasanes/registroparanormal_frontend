import { styled } from "../../stitches.config";

export const Container = styled("div", {
  width: "100%",
  height: "100%",
});

export const Buttons = styled("div", {
  zIndex: 2,
  position: "fixed",
  top: "10px",
  left: "10px",
  display: "flex",
  gap: "10px",

  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "$white25",
    color: "$white",
    transition: "0.2s",

    "&:hover": {
      backgroundColor: "$white50",
    },
  },

  variants: {
    active: {
      true: {
        button: {
          backgroundColor: "#28af51",
          color: "$white",

          "&:hover": {
            backgroundColor: "#34db66",
          },
        },
      },
    },
  },
});

import { styled } from "../../../../stitches.config";

export const Container = styled("div", {
  width: "100%",
  height: "100%",
  border: "2px solid $white75",
  borderRadius: "0.5rem",
  marginBottom: "2rem",

  hr: {
    borderColor: "$white75",
  },
});

export const Select = styled("div", {
  padding: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  flexWrap: "wrap",
});

export const Main = styled("div", {
  display: "flex",
  alignItems: "left",
  flexDirection: "column",
  padding: "2rem",
  paddingBottom: 0,
  minHeight: "54rem",
  maxHeight: "62rem",
  overflowY: "auto",

  span: {
    marginBottom: "-3.5rem",
    fontSize: "2.3rem",
    color: "$white",
    fontFamily: "El Messiri",
  },

  textarea: {
    marginBottom: "3rem",
  },

  variants: {
    nulo: {
      true: {
        padding: 0,
        minHeight: 0,
        height: 0,
      },
    },
  },
});

export const Button = styled("button", {
  fontSize: "1.8rem",
  background: "none",
  border: "2px solid transparent",
  color: "$white",
  padding: ".7rem 1rem .4rem 1rem",
  letterSpacing: "1px",
  fontFamily: "Special Elite",
  fontWeight: 700,
  borderRadius: "7px",
  transition: ".3s",

  "&:hover": {
    border: "2px solid $white",
  },

  variants: {
    active: {
      true: {
        cursor: "default",
        background: "$white25",

        "&:hover": {
          border: "2px solid $white",
        },
      },
    },
  },
});

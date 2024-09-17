import { styled } from "../../stitches.config";

export const Button = styled("button", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2.3rem",
  padding: "10px",
  paddingBottom: "5px",
  border: "none",
  borderRadius: "5px",
  background: 'none',
  fontFamily: "Special Elite",
  color: "$white",
  transition: "0.2s",
  gap: "1rem",

  svg: {
    marginBottom: "7px",
  },

  variants: {
    streaming: {
      true: {

        svg: {
          marginBottom: "5px",
        },

        fontSize: "1.5rem",
        borderRadius: "5px",
        backgroundColor: "$white25",
        color: "$white",
        transition: "0.2s",

        "&:hover": {
          backgroundColor: "$white50",
        },
      },
    },
    active: {
      true: {
        backgroundColor: "#28af51",
        color: "$white",

        "&:hover": {
          backgroundColor: "#34db66"
        }
      }
    }
  },
});
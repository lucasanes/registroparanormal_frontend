import { keyframes, styled } from "../../../../../stitches.config";

export const Container = styled("div", {
  minWidth: "2rem",
  borderRadius: "1.2rem",
  border: "2px solid $white90",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  overflow: "hidden",
  padding: "2rem",
  gap: "2rem",
  position: "relative",
});

export const Header = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
  gap: "1rem",

  h1: {
    color: "$white90",
    width: "min-content",
    fontSize: "2rem",
    fontWeight: 100,
    textAlign: "left",
    fontFamily: "Arvo",
  },

  video: {
    width: "50px",
    border: "2px solid white",
    borderRadius: "10rem",
  },
});

export const Main = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  flexDirection: "column",
  marginBottom: "3rem",
  gap: "2rem",
});

const shake = keyframes({
  "0%": {
    transform: "translate(1px, 1px) rotate(0deg)",
  },
  "10%": {
    transform: "translate(-1px, -1px) rotate(-0.5deg)",
  },
  "20%": {
    transform: "translate(-1px, 1px) rotate(.5deg)",
  },
  "30%": {
    transform: "translate(1px, 1px) rotate(0deg)",
  },
  "40%": {
    transform: "translate(-1px, -1px) rotate(.5deg)",
  },
  "50%": {
    transform: "translate(1px, -1px) rotate(-.5deg)",
  },
  "60%": {
    transform: "translate(1px, 1px) rotate(0deg)",
  },
  "70%": {
    transform: "translate(-1px, -1px) rotate(-0.5deg)",
  },
  "80%": {
    transform: "translate(-1px, -1px) rotate(.5deg)",
  },
  "90%": {
    transform: "translate(1px, 1px) rotate(0deg)",
  },
  "100%": {
    transform: "translate(1px, 1px) rotate(.5deg)",
  },
});

export const Body = styled("div", {
  display: "flex",
  justifyContent: "left",
  alignItems: "flex-end",
  rowGap: "1rem",
  color: "white",
  marginRight: "2rem",
  paddingTop: "1rem",
  textOverflow: "ellipsis",

  flexWrap: "wrap",

  h1: {
    fontSize: "2rem",
    fontWeight: 100,
    marginRight: "1rem",
    width: "min-content",
    textAlign: "left",
    textTransform: "capitalize",
    fontFamily: "Rye",
  },

  span: {
    fontSize: "2rem",
    fontFamily: "Special Elite",
    wordBreak: "break-word",
  },

  variants: {
    isDano: {
      true: {
        h1: { color: "Crimson" },
      },
      false: {
        h1: { color: "purple" },
      },
    },
    isCritico: {
      true: {
        animation: `${shake} .5s infinite`,

        span: {
          color: "$isDisaster",
        },
      },
    },
  },
});

export const Footer = styled("div", {
  display: "flex",
  height: "auto",
  flexDirection: "column",
  textAlign: "left",
  color: "#e7e7e7b9",
  fontFamily: "Special Elite",
  gap: ".5rem",

  span: {
    fontSize: "1.8rem",
  },

  variants: {
    isCritico: {
      true: {
        span: {
          animation: `${shake} .5s infinite`,
        },
      },
    },
  },
});

export const Horas = styled("span", {
  color: "white",
  position: "absolute",
  bottom: 10,
  right: 15,
});

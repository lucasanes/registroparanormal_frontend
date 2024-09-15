import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  width: "100%",
  height: "24rem",
  minWidth: "3rem",
  background: "rgb(27,27,27, 0.8)",
  border: "2px solid",
  borderColor: "#de0000",
  padding: "1rem",
  borderRadius: "1rem",
  fontFamily: "El Messiri",

  hr: {
    margin: "0rem -1rem",
    borderColor: "$white75",
  },
});

export const Header = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "0.4rem",

  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: ".5rem",
    paddingBottom: ".3rem",
  },

  h2: {
    color: "#de0000",
    fontSize: "2rem",
    textAlign: "left",
    marginRight: "2rem",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    textTransform: "capitalize",
  },

  a: {
    width: "28px",
    height: "28px",
    background: "none",
    textDecoration: "none",
    padding: ".3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px transparent",
    transition: "0.3s",
    borderRadius: ".5rem",
    color: "$purple",
  },

  "a:hover": {
    border: "solid 1px $purple",
  },
});

export const Button = styled("button", {
  width: "28px",
  height: "28px",
  background: "none",
  textDecoration: "none",
  padding: ".3rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px transparent",
  transition: "0.3s",
  borderRadius: ".5rem",
  color: "#de0000",

  "&:hover": {
    border: "solid 1px #de0000",
  },

  variants: {
    color: {
      blue: {
        color: "#00fff7",
        "&:hover": {
          border: "solid 1px #00fff7",
        },
      },
    },
  },
});

export const Desc = styled("div", {
  height: "4.8rem",
  display: "flex",
  justifyContent: "left",
  marginTop: "1rem",
  marginBottom: "1rem",
  overflowY: "auto",
  overflowX: "hidden",

  h2: {
    width: "max-content",
    height: "max-content",
    color: "white",
    fontSize: "1.6rem",
    textAlign: "left",
    fontWeight: "100",
    wordBreak: "break-word",
  },
});

export const Part = styled("div", {
  height: "3.8rem",
  display: "flex",
  justifyContent: "left",
  marginTop: "1rem",
  marginBottom: "1rem",
  overflowY: "auto",
  overflowX: "hidden",

  h2: {
    width: "max-content",
    height: "max-content",
    color: "white",
    fontSize: "1.6rem",
    textAlign: "left",
    fontWeight: "100",
    wordBreak: "break-word",
  },
});

export const Footer = styled("div", {
  height: "4rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1rem",

  a: {
    width: "100%",
    textDecoration: "none",
    textAlign: "center",
    fontFamily: "Crimson Text",
    color: "#de0000",
    fontSize: "2rem",
    background: "none",
    border: "2px solid #de0000",
    padding: ".5rem",
    borderRadius: "1rem",
    transition: "ease 0.3s",
  },
  "a:hover": {
    backgroundColor: "rgb(47,47,47,0.5)",
  },
});

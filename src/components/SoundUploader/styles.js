import { styled } from "../../stitches.config";

export const InputB = styled("label", {
  minWidth: "11rem",
  height: "auto",
  fontSize: "2rem",
  background: "transparent",
  display: "flex",
  position: "relative",
  transition: ".2s",

  "&:hover": {
    cursor: "pointer",
    background: "#ffffff25",
  },

  ".msg": {
    width: "100%",
    position: "absolute",
    fontSize: "1.5rem",
    top: 5,
    left: 2,
    fontFamily: "Arial",
    fontWeight: 100,
  },

  variants: {
    progresso: {
      ni: {
        ".msg": {
          top: 14,
        },
      },
    },
  },
});

export const SpanMsg = styled("span", {
  color: "#ffffff90",

  variants: {
    msg: {
      erro: {
        color: "#ff3a3a",
      },
      enviado: {
        color: "#00ff73",
      },
    },
  },
});

export const ProgressBar = styled("span", {
  width: "85%",
  position: "absolute",
  left: 10,
  top: 27,
  height: "1.2rem",
  borderRadius: "10px",
  backgroundColor: "#3a3a3aff",
  overflow: "hidden",
  display: "flex",

  variants: {
    progresso: {
      ni: {
        display: "none",
      },
    },
  },
});

export const Progress = styled("span", {
  position: "absolute",
  left: 0,
  top: 0,
  height: "1.2rem",
  borderRadius: "10px 0 0 10px",
  display: "flex",
  zIndex: 3,
  transition: "0.3s",

  variants: {
    progresso: {
      i: {
        backgroundColor: "#0083e0",
      },

      f: {
        backgroundColor: "#00ff73",
      },
    },
  },
});

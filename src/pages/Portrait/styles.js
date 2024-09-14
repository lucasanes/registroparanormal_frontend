import { keyframes, styled, theme } from "../../stitches.config";

export const Container = styled("div", {
  width: "100%",
  height: "100vh",
  background: "transparent",
  overflowX: "auto",
  overflowY: "hidden",
  display: "flex",
  alignItems: "center",
  paddingLeft: "3rem",

  variants: {
    isLoading: {
      true: {
        opacity: 0,
      },
    },
  },
});

export const Main = styled("main", {
  position: "relative",
  marginTop: "3rem",

  h1: {
    fontSize: "15rem",
    fontFamily: "Special Elite",
    color: "#da3141",
    fontWeight: 100,
    textShadow: "#a31624 0 0 15px, #a31624 0 0 20px",
    zIndex: 10,
  },

  h2: {
    fontSize: "15rem",
    fontFamily: "Special Elite",
    fontWeight: 100,
    color: "#5e97e5",
    textShadow: "#2660b2 0 0 15px, #2660b2 0 0 20px",
    zIndex: 10,
  },

  h4: {
    fontSize: "18rem",
    fontFamily: "IM Fell English SC",
    color: "$white",
    fontWeight: 100,
    position: "relative",
    right: "4rem",
    lineHeight: "17rem",
    textTransform: "capitalize",
    textShadow:
      "#764cff 0 0 5px, #764cff 0 0 10px, #764cff 0 0 15px, #764cff 0 0 20px, #764cff 0 0 25px",
    zIndex: 10,
  },

  h6: {
    fontSize: "8rem",
    whiteSpace: "nowrap",
    fontFamily: "Special Elite",
    fontWeight: 700,
    color: "red",
    textShadow: "#640000 5px 5px 10px",
    top: "45%",
    left: "5rem",
    position: "absolute",
  },
});

const opacityUp = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

const opacityDown = keyframes({
  "0%": {
    opacity: 1,
  },
  "100%": {
    opacity: 0,
  },
});

export const Municao = styled("div", {
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  position: "absolute",
  top: "8rem",
  left: "58rem",
  transform: "rotate(-10deg)",
  zIndex: 10,
  opacity: 0,

  img: {
    width: "150px",
    filter: "drop-shadow(#00ff7b90 0 0 7px)",
    opacity: 0.7,
    marginRight: "-2rem",
  },

  h5: {
    fontSize: "8rem",
    whiteSpace: "nowrap",
    fontFamily: "Special Elite",
    fontWeight: 100,
    color: "#00ff7b90",
    textShadow: "#009246ff 0 0 15px, #009246ff 0 0 20px",
  },

  variants: {
    active: {
      true: {
        animation: `${opacityUp} .7s forwards .3s`,
      },
      false: {
        animation: `${opacityDown} .7s forwards`,
      },
    },
  },
});

const opacityUp1 = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

const opacityDown1 = keyframes({
  "0%": {
    opacity: 1,
  },
  "100%": {
    opacity: 0,
  },
});

const opacityUp2 = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
});

const opacityDown2 = keyframes({
  "0%": {
    opacity: 1,
  },
  "100%": {
    opacity: 0,
  },
});

export const Status1 = styled("div", {
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  left: "90%",
  zIndex: 10,
  top: "51%",
  transform: "translateY(-50%) rotate(-10deg)",
  opacity: 0,

  variants: {
    combate: {
      true: {
        animation: `${opacityUp1} 1s`,
        animationDelay: ".3s",
        animationFillMode: "forwards",
      },
      false: {
        animation: `${opacityDown1} .4s`,
      },
    },
  },
});

export const Status2 = styled("div", {
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  left: "90%",
  top: "46%",
  zIndex: 10,
  transform: "translateY(-50%) rotate(-10deg)",
  opacity: 0,

  variants: {
    combate: {
      true: {
        animation: `${opacityDown2} .4s`,
      },
      false: {
        animation: `${opacityUp2} 1s`,
        animationDelay: ".3s",
        animationFillMode: "forwards",
      },
    },
  },
});

export const Status3 = styled("div", {
  opacity: 0,
  zIndex: 10,
  position: "absolute",
  bottom: "10rem",
  left: "9rem",
  transform: "rotate(-7deg)",

  h3: {
    fontSize: "15rem",
    fontFamily: "Special Elite",
    fontWeight: 100,
    color: "#ffd900ff",
    textShadow: "#ffa600 0 0 15px, #ffa600 0 0 20px",
  },

  variants: {
    combate: {
      true: {
        animation: `${opacityUp1} 1s`,
        animationDelay: ".3s",
        animationFillMode: "forwards",
      },
      false: {
        animation: `${opacityDown1} .4s`,
      },
    },
  },
});

export const Status4 = styled("div", {
  opacity: 0,
  zIndex: 10,
  position: "absolute",
  bottom: "10rem",
  left: "9rem",
  transform: "rotate(-7deg)",

  h3: {
    fontSize: "15rem",
    fontFamily: "Special Elite",
    fontWeight: 100,
    color: "#5e97e5",
    textShadow: "#2660b2 0 0 15px, #2660b2 0 0 20px",
  },

  variants: {
    combate: {
      true: {
        animation: `${opacityDown2} .4s`,
      },
      false: {
        animation: `${opacityUp2} 1s`,
        animationDelay: ".3s",
        animationFillMode: "forwards",
      },
    },
  },
});

export const PortraitImg = styled("video", {
  position: "absolute",
  width: "790px",
  height: "790px",
  borderRadius: "370px",
  zIndex: 4,
  top: "-7.5rem",
  left: "50%",
  transform: "translateX(-50%)",
  transition: "filter 1s",

  variants: {
    inconsciente: {
      true: {
        filter: "brightness(0)",
      },
    },

    animation: {
      true: {
        animation: `${opacityDown} .2s`,
        opacity: 0,
      },
      false: {
        animation: `${opacityUp} .3s`,
        opacity: 1,
      },
    },
    semPerm: {
      true: {
        width: "0px",
      },
    },
  },
});

const textAnimation = keyframes({
  "30%": {
    opacity: 0,
  },
  "33%": {
    opacity: 1,
  },
  "75%": {
    opacity: 1,
  },
  "78%": {
    opacity: 0,
  },
  "100%": {
    opacity: 0,
  },
});

const CriticAnimation = keyframes({
  "0%": {
    transform: "translate(2px, 2px) rotate(0deg)",
  },
  "10%": {
    transform: "translate(-2px, -2px) rotate(-01deg)",
  },
  "20%": {
    transform: "translate(-2px, 2px) rotate(1deg)",
  },
  "30%": {
    transform: "translate(2px, 2px) rotate(0deg)",
  },
  "40%": {
    transform: "translate(-2px, -2px) rotate(1deg)",
  },
  "50%": {
    transform: "translate(2px, -2px) rotate(-1deg)",
  },
  "60%": {
    transform: "translate(2px, 2px) rotate(0deg)",
  },
  "70%": {
    transform: "translate(-2px, -2px) rotate(-01deg)",
  },
  "80%": {
    transform: "translate(-2px, -2px) rotate(1deg)",
  },
  "90%": {
    transform: "translate(2px, 2px) rotate(0deg)",
  },
  "100%": {
    transform: "translate(2px, 2px) rotate(1deg)",
  },
});

const disasterAnimation = keyframes({
  "30%": {
    opacity: 0,
  },
  "33%": {
    opacity: 1,
  },
  "43%": {
    transform: "rotate(0deg)",
  },
  "48%": {
    transform: "translate(5px, 50px) rotate(35deg)",
  },
  "75%": {
    transform: "translate(5px, 50px) rotate(35deg)",
    opacity: 1,
  },
  "87%": {
    transform: "translate(200px, 600px) rotate(300deg)",
    opacity: 0,
  },
  "100%": {
    opacity: 0,
  },
});

const dadoAnimation = keyframes({
  "0%": {
    opacity: 1,
  },
  "99%": {
    opacity: 1,
  },
  "100%": {
    opacity: 0,
  },
});

export const Dado = styled("div", {
  position: "absolute",
  right: "4rem",
  zIndex: 12,
  bottom: "10rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  animation: `${dadoAnimation} 10s forwards`,

  svg: {
    filter: "drop-shadow(#343434 0 0 10px)",
    color: "#343434",
  },

  span: {
    color: "$white",
    fontFamily: "Merienda, cursive",
    fontSize: "20rem",
    position: "absolute",
    top: "17rem",
    zIndex: 3,
    opacity: 0,
    animation: `${textAnimation} ease-in-out 10s`,
  },

  variants: {
    isDano: {
      true: {
        span: {
          "-webkit-text-stroke": `2px ${theme.colors.orange}`,
          textShadow: `
            ${theme.colors.orange} 0 0 20px, 
            #000000 5px 5px 5px,
            #000000 5px 5px 10px,
            #000000 5px 5px 15px,
            #000000 5px 5px 20px
          `,
        },
      },
      false: {
        span: {
          "-webkit-text-stroke": `2px ${theme.colors.cyan}`,
          textShadow: `
            ${theme.colors.cyan} 0 0 30px, 
            #000000 5px 5px 5px,
            #000000 5px 5px 10px,
            #000000 5px 5px 15px,
            #000000 5px 5px 20px
          `,
        },
      },
    },
    isCritico: {
      true: {
        span: {
          animation: `${textAnimation} ease-in-out 8s, ${CriticAnimation} .5s linear infinite`,
        },
      },
    },
    isDesastre: {
      true: {
        span: {
          animation: `${disasterAnimation} 10s`,
        },
      },
    },
  },
});

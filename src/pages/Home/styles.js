import BackgroundImage from "../../assets/img/bg.webp";
import { styled } from "../../stitches.config";

export const Container = styled("div", {
  width: "100%",
  height: "100vh",
  display: "flex",
  backgroundImage: `url(${BackgroundImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: '2500px',
  overflowX: "hidden",
  overflowY: 'auto',

  '@lg': {
    justifyContent: 'center'
  },
});

export const Main = styled("main", {
  width: "63rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "auto 5rem",

  h1: {
    fontSize: "14rem",
    fontFamily: 'Gagalin',
    marginLeft: '1rem',
    fontWeight: 100,
    color: "$white75",
    letterSpacing: "1rem",
    textShadow: ".5rem .5rem 2rem #352eff8d, .5rem .5rem 2rem #352eff8d",

    '@md': {
      fontSize: '9rem'
    },

    '@sm': {
      fontSize: '7rem',
      letterSpacing: "0.3rem",
    }
  },

  h2: {
    fontFamily: 'Fredericka the Great',
    fontWeight: 100,
    letterSpacing: "0.5rem",
    marginBottom: "20rem",
    fontSize: "8rem",
    color: "$white",

    '@md': {
      fontSize: '5rem'
    },

    '@sm': {
      fontSize: '4rem',
      letterSpacing: "0.2rem",
    }
  },
});

export const Entrar = styled("button", {

  padding: '.7rem 4rem',
  borderRadius: "3rem",
  border: "none",
  backgroundColor: "#352effff",
  cursor: 'pointer',
  fontSize: "4rem",
  color: "$white",
  fontFamily: 'Cormorant Garamond',
  fontWeight: 700,
  transition: '.2s',

  '@md': {
    fontSize: '3rem'
  },

  '&:hover': {
    backgroundColor: '#201c95ff'
  }

});

export const Criar = styled('button', {

  fontSize: "3.5rem",
  width: 'fit-content',
  color: "$white",
  border: "none",
  borderRadius: "2rem",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '1rem',
  fontFamily: 'Cormorant Garamond',
  fontWeight: 700,
  background: "none",

  '@md': {
    fontSize: '2.5rem'
  },

  '&:hover': {
    textDecoration: 'underline'
  }

})

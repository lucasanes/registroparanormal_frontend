import BackgroundImage from "../../assets/img/bg.webp";
import { styled } from "../../stitches.config";

export const Container = styled("div", {
  width: "100%",
  height: "100vh",
  display: "flex",
  backgroundImage: `url(${BackgroundImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: '2000px',
  overflowX: "hidden",
  overflowY: 'auto',
});

export const Main = styled("main", {
  width: "63rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "auto 5rem",

  h1: {
    fontSize: "14rem",
    marginLeft: '3.5rem',
    fontFamily: 'Gagalin',
    fontWeight: 100,
    color: "#ffffff80",
    letterSpacing: "1rem",
    textShadow: ".5rem .5rem 2rem #352eff8d, .5rem .5rem 2rem #352eff8d"
  },

  h2: {
    fontFamily: 'Fredericka the Great',
    fontWeight: 100,
    letterSpacing: "0.5rem",
    marginBottom: "20rem",
    fontSize: "8rem",
    color: "#ffffff"
  },
});

export const Entrar = styled("button", {

  padding: '.7rem 4rem',
  borderRadius: "3rem",
  border: "none",
  backgroundColor: "#352effff",
  cursor: 'pointer',
  fontSize: "4rem",
  color: "#ffffff",
  fontFamily: 'Cormorant Garamond',
  fontWeight: 700,
  transition: '.2s',

  '&:hover': {
    backgroundColor: '#201c95ff'
  }

});

export const Criar = styled('button', {

  fontSize: "3.5rem",
  width: 'fit-content',
  color: "#ffffff",
  border: "none",
  borderRadius: "2rem",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '1rem',
  fontFamily: 'Cormorant Garamond',
  fontWeight: 700,
  background: "none",
  fontSize: "2.6rem",

  '&:hover': {
    textDecoration: 'underline'
  }

})

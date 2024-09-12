import { styled } from '../../../../stitches.config';

export const Container = styled("div", {
  border: "2px solid #ffffff75",
  marginBottom: "2rem",
  borderRadius: "0.5rem",
  width: "100%",
});

export const HeaderContainer = styled("div", {
  padding: "1rem 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",

  h1: {
    textAlign: "center",
    color: "white",
    fontSize: "2rem",
    fontFamily: 'Special Elite',
    letterSpacing: '.1rem',
    paddingTop: '.3rem'
  },

  button: {
    background: "none",
    border: "none",
    color: "Green",
    position: "absolute",
    right: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  svg: {
    transition: "0.3s",
  },

  "button:hover": {
    svg: {
      filter: "brightness(2)",
    },
  },
});

export const BodyContainer = styled("div", {

});

export const TopBody = styled('div', {

  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '1rem',
  gap: '2rem',

})

export const Button = styled('button', {

  border: '1px solid transparent',
  padding: '.5rem 1rem',
  background: 'none',
  color: '#fff',
  transition: '0.3s',
  wordBreak: 'break-word',
  borderRadius: '5px',
  letterSpacing: '.1rem',
  fontFamily: 'Crimson Text',
  fontSize: '1.8rem',

  '&:hover': {
    border: '1px solid #fff',
  },

  variants: {
    active: {
      true: {
        background: '#ffffff40',
        cursor: 'default',
      }
    }
  }

})
import { styled } from '../../../../stitches.config';

export const Container = styled("div", {
  border: "2px solid $white75",
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

export const Select = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  gap: '2rem',
  flexWrap: 'wrap',
})

export const Button = styled('button', {

  background: 'none',
  fontFamily: 'Special Elite',
  color: '$white90',
  border: '2px solid transparent',
  padding: '.7rem 1rem 0.1rem 1rem',
  fontSize: '2.2rem',
  borderRadius: '5px',

  '&:hover': {
    border: '2px solid $white90',
  },

  variants: {
    active: {
      true: {
        background: '$white25',
      }
    }
  }

})

export const BodyContainer = styled("div", {
  padding: "1rem",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridColumnGap: "3rem",
  gridRowGap: "2rem",

  "@media (max-width: 1400px)": {
    gridTemplateColumns: "1fr 1fr",
  },

  '@lg': {
    gridTemplateColumns: '1fr'
  },


  variants: {
    nulo: {
      true: {
        padding: 0
      }
    }
  }

});
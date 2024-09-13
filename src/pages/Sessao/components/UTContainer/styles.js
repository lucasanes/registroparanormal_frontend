import { styled } from '../../../../stitches.config';

export const Container = styled("div", {
  border: "2px solid $white75",
  marginBottom: "2rem",
  borderRadius: "0.5rem",
  width: "100%",
});

export const HeaderContainer = styled("div", {
  padding: "1rem",
  display: "flex",
  justifyContent: 'space-between',
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

  svg: {
    transition: "0.3s",
  },

  "button:hover": {
    svg: {
      filter: "brightness(3)",
    },
  },
});

export const ButtonIcon = styled('button', {

  background: "none",
  width: 'fit-content',
  border: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: '0.3s',
  padding: '.2rem',

})

export const BodyContainer = styled("div", {

  maxHeight: '42rem',
  overflowY: 'auto',
  padding: "2rem",
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '2rem',

  '@xlg': {
    gridTemplateColumns: '1fr'
  },

  '@lg': {
    gridTemplateColumns: '1fr 1fr'
  },

  '@md': {
    gridTemplateColumns: '1fr'
  },

  variants: {
    nulo: {
      0: {
        padding: 0
      }
    }
  }

});
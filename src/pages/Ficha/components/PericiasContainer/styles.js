import { styled } from '../../../../stitches.config';

export const Container = styled("div", {
  border: "2px solid #ffffff75",
  marginBottom: "2rem",
  borderRadius: "0.5rem",
  width: "100%",
  position: 'relative',
});

export const HeaderContainer = styled("div", {
  padding: ".6rem 1rem",
  display: "flex",
  justifyContent: 'space-between',
  alignItems: "center",

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
      filter: "brightness(2)",
    },
  },
});

export const Pericias = styled("div", {

  display: 'grid',
  gap: '2rem',
  overflow: 'hidden',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',

  '@xlg': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },

  '@lg': {
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
  },

  '@md': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },

  '@sm': {
    gridTemplateColumns: '1fr 1fr',
  },

});

export const Body = styled('div', {
  minHeight: '918px',
  height: 'calc(100% - 44px)',
  paddingTop: '3rem',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'column',
  gap: '3rem',

  '@lg3': {
    height: 'calc(100% - 44px)',
  }
})

export const Footer = styled('div', {

  width: '100%',
  display: 'flex',
  position: 'relative',
  bottom: 0,
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 3rem',
  gap: '3rem',
  flexWrap: 'wrap',
  margin: '2rem 0 4rem 0'

})

export const ButtonIcon = styled('button', {

  width: 'fit-content',
  background: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '.2rem',
  borderRadius: '5px',
  transition: '.3s',

  border: '2px solid transparent',

  '&:hover': {
    border: '2px solid aqua'
  }

})

export const Button = styled('button', {

  width: '14rem',
  borderRadius: '.5rem',
  textAlign: 'center',
  padding: '.5rem',
  fontSize: '1.8rem',
  background: 'none',
  whiteSpace: 'nowrap',
  transition: '.2s',

  variants: {
    color: {
      nt: {
        color: '#cccccc',
        border: '1px solid #cccccc',
        '&:hover': {
          backgroundColor: '#cccccc50',
        }
      },
      t: {
        color: '#0095ff',
        border: '1px solid #0095ff',
        '&:hover': {
          backgroundColor: '#0095ff50',
        }
      },
      v: {
        color: '#00ff99',
        border: '1px solid #00ff99',
        '&:hover': {
          backgroundColor: '#00ff9950',
        }
      },
      e: {
        color: '#bd0000',
        border: '1px solid #bd0000',
        '&:hover': {
          backgroundColor: '#bd000050',
        }
      }
    }

  }

})
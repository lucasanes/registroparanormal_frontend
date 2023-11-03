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
  padding: "1rem",
});

export const Table = styled('table', {
  width: '100%',
  borderSpacing: '0 1rem',
  color: 'white',
  fontFamily: 'El Messiri',
  letterSpacing: '.1rem',

  th: {
    borderBottom: '1px solid white',
    textAlign: 'left',
    paddingBottom: '1rem',
    fontSize: '1.7rem',
    fontWeight: '700'
  }
})

export const TH4 = styled('th', {

  '@md': {
    display: 'none'
  }

})

export const TH5 = styled('th', {

  '@md': {
    display: 'none'
  }

})

export const Footer = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10rem',
  margin: '0.5rem 0',

  '@md5': {
    gap: '5rem'
  }

})

export const Button = styled('button', {

  background: 'none',
  padding: '0.5rem 1rem',
  fontSize: '2rem',
  transition: '0.3s',
  fontFamily: 'Crimson Text',
  letterSpacing: '.1rem',
  borderRadius: '3px',

  variants: {
    combate: {
      false: {
        color: '#ff3737',
        border: '1px solid #ff3737',

        '&:hover': {
          border: '1px solid #ff3737',
          opacity: '0.5'
        },
      },
      true: {
        color: '#00ca39',
        border: '1px solid #00ca39',

        '&:hover': {
          border: '1px solid #00ca39',
          opacity: '0.5'
        },
      }
    }
  }

})

export const ButtonSalvar = styled('button', {

  background: 'none',
  padding: '0.5rem 1rem',
  fontSize: '2rem',
  letterSpacing: '.1rem',
  fontFamily: 'Crimson Text',
  transition: '0.3s',
  borderRadius: '3px',

  variants: {
    precisaSalvar: {
      false: {
        color: '#00ff62',
        border: '1px solid #41ff8a',
        cursor: 'default'
      },
      true: {
        color: 'crimson',
        border: '1px solid crimson',

        '&:hover': {
          border: '1px solid crimson',
          opacity: '0.5'
        },
      }
    }
  },


})
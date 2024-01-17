import { styled, keyframes } from '../../../../stitches.config';

export const Container = styled("div", {
  border: "2px solid #ffffff75",
  borderRadius: "0.5rem",
  width: "100%",
  marginBottom: '2rem',

  hr: {
    borderColor: '#ffffff75'
  }
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

  display: 'grid',
  height: 0,
  gridTemplateColumns: '1fr',
  padding: '0rem 2rem',
  gap: '2rem',
  overflow: 'hidden',

});

export const Select = styled('div', {

  padding: '1rem 2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
  flexWrap: 'wrap',
  gap: '2rem',

  variants: {
    nulo: {
      true: {
        padding: 0
      }
    }
  }

})

export const Button = styled('button', {

  fontSize: '1.8rem',
  textTransform: 'capitalize',
  padding: '.7rem 1.5rem',
  background: 'none',
  borderRadius: '5px',

  variants: {

    elemento: {
      Conhecimento: {
        color: '#ffd700',
        border: '1px solid #ffd700',
        boxShadow: '0px 0px 10px #ffd90051',

        '&:hover': {
          background: '#ffd70050'
        },

      },
      Morte: {
        color: '#000000ff',
        border: '1px solid #000000ff',
        boxShadow: '0px 0px 10px #00000050',

        '&:hover': {
          background: '#00000020'
        }

      },
      Medo: {
        color: '#fff',
        boxShadow: '0px 0px 10px #ffffff50',
        border: '1px solid #fff',

        '&:hover': {
          background: '#ffffff50'
        }

      },
      Sangue: {
        color: '#ff0000',
        boxShadow: '0px 0px 10px #ff000050',
        border: '1px solid #ff0000',

        '&:hover': {
          background: '#ff000050'
        }

      },
      Energia: {
        color: '#800080',
        boxShadow: '0px 0px 10px #80008050',
        border: '1px solid #800080',

        '&:hover': {
          background: '#80008050'
        }

      }
    },

    active: {
      Conhecimento: {
        background: '#ffd70050'
      },
      Morte: {
        background: '#00000020',
      },
      Medo: {
        background: '#ffffff50'
      },
      Sangue: {
        background: '#ff000050'
      },
      Energia: {
        background: '#80008050'
      }
    }

  }


})
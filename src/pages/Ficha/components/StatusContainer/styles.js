import { styled, keyframes } from '../../../../stitches.config';
import { Link } from 'react-router-dom';

export const Container = styled("div", {
  border: "2px solid #ffffff75",
  marginBottom: "2rem",
  borderRadius: "0.5rem",
  width: "100%",

  hr: {
    borderColor: '#ffffff75'
  }
});

export const Header = styled("div", {
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

export const Body = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'

})

export const TopBody = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '3rem',
  padding: '3rem 2rem',

  '@xlg': {
    flexDirection: 'column-reverse'
  }

})

export const Buttons = styled('div', {

  display: 'flex',
  maxWidth: '35rem',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid #ffffff90',
  borderRadius: '.5rem',
  flexDirection: 'column',
  padding: '2rem 0',
  gap: '2rem',

  hr: {
    width: '100%'
  },

  h1: {
    fontSize: '2rem',
    color: 'white',
    margin: '-1rem',
    marginTop: '-.5rem',
    fontFamily: 'Special Elite',
    letterSpacing: '.1rem',
  },

})

export const AreaPortrait = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1,

})

export const Portrait = styled(Link, {

  border: '2px solid transparent',
  zIndex: 1,
  marginLeft: '4rem',
  borderRadius: '20rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '250px',
  height: '250px',
})

export const Img = styled('img', {

  border: '2px solid white',
  objectFit: 'cover',
  cursor: 'pointer',
  zIndex: 0,
  borderRadius: '72rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '250px',
  height: '250px',
  transition: 'filter 1s',

  variants: {
    active: {
      true: {
        filter: 'brightness(0)',
      }
    }
  }

})

const scaleUp = keyframes({
  '0%': {
    scale: '20%',
    opacity: 0
  },
  '100%': {
    scale: '100%',
    opacity: 1
  },
});

export const ImgZoom = styled('img', {

  animation: `${scaleUp} 300ms`,
  objectFit: 'contain',
  border: '3px solid white',
  borderRadius: '72rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
  transition: '1s',

  variants: {
    active: {
      true: {
        filter: 'brightness(0)',
      }
    }
  }

})

export const BottomBody = styled('div', {

  display: 'flex',
  width: '100%',
  padding: '0rem 3rem',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  paddingBottom: '3rem',
  gap: '0rem',

  h1: {
    color: 'White',
    fontFamily: 'Special Elite',
    letterSpacing: '.2rem',
    fontWeight: 700,
    fontSize: '2rem',
    marginTop: '2rem',
    marginBottom: '.5rem',
    marginLeft: '.3rem'
  },

  h2: {
    color: 'White',
    fontWeight: 700,
    fontSize: '2.2rem',
    marginTop: '3rem',
    marginRight: '1rem',
    fontFamily: 'Special Elite',
    marginBottom: '1.5rem'
  }

})

export const Button = styled('button', {

  width: '90%',
  padding: '.5rem',
  background: 'none',
  transition: '.3s',
  border: '1px solid transparent',
  fontSize: '1.8rem',
  borderRadius: '7px',
  fontWeight: 700,

  '&:hover': {
    color: 'white'
  },

  variants: {

    active: {
      combatetrue: {
        border: '1px solid #ffff00',
        color: '#ffff00',
        background: '#ffff0050'
      },
      insanotrue: {
        border: '1px solid #00f2ff',
        color: 'aqua',
        background: '#00f2ff50'
      },
      inconscientetrue: {
        border: '1px solid #ff0000',
        color: '#ff0000',
        background: '#ff000050'
      },
      massivotrue: {
        border: '1px solid #ff5858',
        color: '#ff5858',
        background: '#ff585850'
      }
    },

    color: {
      aqua: {
        border: '1px solid #00f2ff',
        color: 'aqua',

        '&:hover': {
          background: '#00f2ff50'
        }
      },
      yellow: {
        border: '1px solid #ffff00',
        color: '#ffff00',

        '&:hover': {
          background: '#ffff0050'
        }
      },
      red: {
        border: '1px solid #ff5858',
        color: '#ff5858',

        '&:hover': {
          background: '#ff585850'
        }
      },
      red2: {
        border: '1px solid #ff0000',
        color: '#ff0000',

        '&:hover': {
          background: '#ff000050'
        }
      }
    }
  }

})

export const ContainerDeferes = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '1rem',
  gap: '2rem',
  flexWrap: 'wrap'
})

export const Deferes = styled('h3', {
  width: 'max-content',
  border: '1px solid white',
  padding: '.7rem',
  textTransform: 'capitalize',
  fontSize: '1.5rem',
  borderRadius: '5px',
  color: 'White'
})
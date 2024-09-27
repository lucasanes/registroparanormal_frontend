import { Link } from "react-router-dom";
import { styled } from "../../stitches.config";

export const Container = styled("div", {
  position: 'absolute',
  height: "72px",
  width: '100%',
  textAlign: "center",
  overflow: "hidden",

  a: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
  },

  img: {
    objectFit: 'contain'
  },

  variants: {
    active: {
      aberto: {
        height: '100%',
        zIndex: 10,
      },
      fechando: {
        height: '100%',
        zIndex: 10,
      },
      fechado: {
        height: '72px',
      }
    }
  }
});

export const Header = styled("div", {

  width: '100%',
  height: '7.2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  background: 'rgb(15,15,15)',
  borderBottom: '2px solid white',

  a: {
    margin: '0 8.5rem 0 2rem',
  },

  img: {
    width: '50px'
  },

  button: {
    color: "white",
    background: 'none',
    margin: '0 2rem 0 8.5rem',
    border: "none",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '.7rem',
    transition: '.3s'
  },

  h1: {
    color: '$purple',
    fontFamily: 'Fredoka One',
    letterSpacing: '.2rem',
    textTransform: 'capitalize',
    whiteSpace: 'nowrap',
    fontSize: '3.3rem',
    textShadow: "4px 3px 2px black",

    '@md': {
      display: 'none'
    }
  }
});

export const Body = styled("div", {

  height: "100%",
  background: 'rgb(15,15,15)',
  width: '0px',
  transition: '.4s',
  overflow: 'hidden',
  paddingTop: '2rem',

  ul: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: "column",
    width: '20rem'
  },

  "button:hover": {
    opacity: "0.4",
    transition: '.3s'
  },

  "a:hover": {
    opacity: "0.4",
    transition: '.3s'
  },

  variants: {
    active: {
      aberto: {
        width: "20rem",
      }
    },
  },

});

export const ButtonLink = styled(Link, {
  background: "none",
  color: "white",
  border: "none",
  textDecoration: 'none',
  transition: '.3s',
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  fontSize: "2.3rem",
  gap: "1rem",
  fontFamily: 'Special Elite',

  svg: {
    marginBottom: '.5rem'
  },

  variants: {
    color: {
      purple: {
        color: '$purple',
        marginLeft: '.7rem'
      },
      yellow: {
        color: 'Yellow',
        marginLeft: '.2rem'
      }
    }
  }
});

export const Button = styled('button', {
  background: "none",
  color: "red",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "2.3rem",
  gap: "1rem",
  fontFamily: 'Special Elite',
  transition: '.3s',

  svg: {
    marginBottom: '.5rem'
  },

  variants: {
    color: {
      purple: {
        color: '$purple',
      },
      white: {
        color: '$white',
      }
    }
  }

});

export const Line1 = styled('div', {
  width: '3rem',
  height: '3px',
  background: 'white',
  transition: '.3s',

  variants: {
    active: {
      aberto: {
        transform: 'rotate(50deg) translate(8px, 8px)',
      }
    }
  }
})

export const Line2 = styled('div', {
  width: '3rem',
  height: '3px',
  background: 'white',

  variants: {
    active: {
      aberto: {
        opacity: 0
      }
    }
  }
})

export const Line3 = styled('div', {
  width: '3rem',
  height: '3px',
  background: 'white',
  transition: '.3s',

  variants: {
    active: {
      aberto: {
        transform: 'rotate(-50deg) translate(6px, -7px)',
      }
    }
  }
})

export const Li = styled('li', {

  margin: "3rem auto",
  display: "flex",
  justifyContent: "left",
  alignItems: "center",

})
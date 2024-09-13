import { keyframes, styled } from '../../../../../../stitches.config';

export const Container = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column'
})

export const Botoes = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0rem 1rem',

  span: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '2rem',
    padding: '0rem .5rem 0.2rem .5rem',
    fontWeight: 100
  },

  button: {
    padding: '.7rem .7rem .5rem .7rem',
    margin: '.5rem .5rem',
    fontFamily: 'Special Elite',
    background: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    whiteSpace: 'nowrap',
    gap: '.5rem',
    transition: '.3s',
    color: 'White',
    border: '1px solid transparent',
    fontSize: '1.6rem',
    borderRadius: '7px',
    fontWeight: 100,

  },

  'button:hover': {
    border: '1px solid white'
  },

  '@md': {
    padding: '0rem',
    button: {
      margin: '.5rem .2rem',
    }
  }
})

export const Esquerda = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  "@media (max-width: 450px)": {
    'button:first-child': {
      display: 'none'
    }
  },

  svg: {
    marginLeft: '-.4rem',
    position: 'relative',
    bottom: 2
  }
})

export const Direita = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  "@media (max-width: 450px)": {
    'button:last-child': {
      display: 'none'
    }
  },

  svg: {
    marginRight: '-.4rem',
    position: 'relative',
    bottom: 2
  }
})


export const BarrinhaDiv = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const fluid = keyframes({
  '0%': {
    right: -40,
    // borderTopRightRadius: '30px',
    // borderBottomRightRadius: '0px',
    transform: 'rotate(0deg)'
  },
  '5%': {
    right: -40,
  },
  '15%': {
    // borderTopRightRadius: '0px',
    // borderBottomRightRadius: '30px',
    transform: 'rotate(-25deg)'
  },
  '30%': {
    // borderTopRightRadius: '0px',
    // borderBottomRightRadius: '30px',
    transform: 'rotate(-25deg)'
  },
  '50%': {
    right: -5,
    // borderTopRightRadius: '0px',
    // borderBottomRightRadius: '30px',
    transform: 'rotate(0deg)'
  },
  '55%': {
    right: -5,
  },
  '65%': {
    // borderTopRightRadius: '0px',
    // borderBottomRightRadius: '30px',
    transform: 'rotate(27deg)'
  },
  '80%': {
    // borderTopRightRadius: '0px',
    // borderBottomRightRadius: '30px',
    transform: 'rotate(27deg)'
  },
  '100%': {
    right: -40,
    // borderTopRightRadius: '30px',
    // borderBottomRightRadius: '0px',
    transform: 'rotate(0deg)'
  },
})

export const ProgressBar = styled('div', {

  width: '100%',
  height: '1.5rem',
  borderRadius: '10px',
  backgroundColor: '$bar',
  display: 'flex',
  overflow: 'hidden'

})

export const Progress = styled('div', {

  height: '1.5rem',
  borderTopLeftRadius: '10px',
  borderBottomLeftRadius: '10px',
  display: 'flex',
  transition: '0.3s',
  position: 'relative',

  '&::before': {
    content: "''",
    position: 'absolute',
    height: '7rem',
    top: -26,
    bottom: 0,
    width: '100px',
    animation: `${fluid} 1.8s linear infinite`,
  },

  variants: {
    color: {
      red: {
        backgroundColor: '$pv',

        '&::before': {
          backgroundColor: '$pv',
        },
      },
      yellow: {
        backgroundColor: '$pe',

        '&::before': {
          backgroundColor: '$pe',
        },
      },
      aqua: {
        backgroundColor: '$ps',

        '&::before': {
          backgroundColor: '$ps',
        },
      }
    },
    valorA: {
      0: {
        '&::before': {
          width: '0px',
        },
      }
    }
  }

})
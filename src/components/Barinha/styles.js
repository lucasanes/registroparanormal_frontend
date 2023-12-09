import { keyframes, styled } from '../../stitches.config';

export const Container = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'relative'
})

export const Botoes = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0rem 2rem',

  '@sm': {
    padding: 0
  },

  span: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '3rem',
    padding: '0rem .5rem',
    fontWeight: 100
  },

  button: {
    padding: '.7rem .5rem 0rem .5rem',
    margin: '.5rem .5rem',
    fontFamily: 'Special Elite',
    height: '3rem',
    background: 'none',
    display: 'flex',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    gap: '.5rem',
    transition: '.3s',
    color: '#fff',
    border: '1px solid transparent',
    fontSize: '2rem',
    borderRadius: '7px',
    fontWeight: 100,
  },

  'button:hover': {
    border: '1px solid white'
  },
})  

export const InputDiv = styled('div', {
  width: '33%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Esquerda = styled('div', {
  width: '33%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',

  '@xlg': {
    'button:first-child': {
      display: 'none'
    },
  },

  '@md': {
    '.mid': {
      display: 'none'
    }
  },

  svg: {
    marginLeft: '-.4rem'
  }
})

export const Direita = styled('div', {
  width: '33%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  '@xlg': {
    width: '33%',
    'button:last-child': {
      display: 'none'
    },
  },

  '@md': {
    '.mid': {
      display: 'none'
    }
  },

  svg: {
    marginRight: '-.4rem'
  }
})


export const BarrinhaDiv = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ProgressBar = styled('div', {

  width: '100%',
  height: '2rem',
  borderRadius: '10px',
  backgroundColor: '#ffffff14',
  display: 'flex',
  overflow: 'hidden'

})

const fluid = keyframes({
  '0%': {
    right: -50,
    // borderTopRightRadius: '30px',
    // borderBottomRightRadius: '0px',
    transform: 'rotate(0deg)'
  },
  '10%': {
    right: -50,
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
  '60%': {
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
    right: -50,
    // borderTopRightRadius: '30px',
    // borderBottomRightRadius: '0px',
    transform: 'rotate(0deg)'
  },
})

export const Progress = styled('div', {

  height: '2rem',
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
    animation: `${fluid} 2s linear infinite`,
  },

  variants: {
    color: {
      red: {
        backgroundColor: '#9a0000',

        '&::before': {
          backgroundColor: '#9a0000',  
        },
      },
      yellow: {
        backgroundColor: '#dea600ff',

        '&::before': {
          backgroundColor: '#dea600ff',  
        },
      },
      aqua: {
        backgroundColor: '#005795',

        '&::before': {
          backgroundColor: '#005795',  
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
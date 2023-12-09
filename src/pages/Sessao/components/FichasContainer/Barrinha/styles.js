import { keyframes, styled } from '../../../../../stitches.config';

export const Container = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2rem',
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
    fontFamily: 'El Messiri',
    fontSize: '2rem',
    padding: '0rem .5rem 0.2rem .5rem',
    fontWeight: 100
  },

  b: {
    color: 'white',
    fontFamily: 'El Messiri',
    fontSize: '2rem',
    padding: '0rem .5rem 0.2rem .5rem',
    fontWeight: 700
  },

  '@md2': {
    padding: '0rem',
  }
})

export const Esquerda = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    marginLeft: '-.4rem'
  }
})

export const Direita = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

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

const fluid = keyframes({
  '0%': {
    right: -50,
    // borderTopRightRadius: '30px',
    // borderBottomRightRadius: '0px',
    transform: 'rotate(0deg)'
  },
  '5%': {
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
    right: -50,
    // borderTopRightRadius: '30px',
    // borderBottomRightRadius: '0px',
    transform: 'rotate(0deg)'
  },
})

export const ProgressBar = styled('div', {

  width: '100%',
  height: '2rem',
  borderRadius: '10px',
  backgroundColor: '#ffffff14',
  display: 'flex',
  overflow: 'hidden'

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
    animation: `${fluid} 1.8s linear infinite`,
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
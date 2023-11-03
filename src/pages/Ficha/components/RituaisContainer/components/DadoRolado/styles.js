import { keyframes, styled } from '../../../../../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  minHeight: '15rem',
  borderRadius: '1.2rem',
  backgroundColor: 'rgb(27,27,27)',
  border: '2px solid #ffffff90',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',

})

export const Header = styled('div', {

  width: '100%',
  height: '5rem',
  borderRadius: '12px 12px 0px 0px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgb(20,20,20)',
  padding: '1rem 2rem',

  h1: {
    color: 'purple',
    fontSize: '2.2rem',
    fontFamily: 'Arvo'
  },

})

export const CloseButton = styled('button', {

  fontSize: '2rem',
  border: 'none',
  background: 'none',
  color: 'white',
  fontWeight: 100,
  top: '5%',

})

const shake = keyframes({
  '0%': {
    transform: 'translate(1px, 1px) rotate(0deg)'
  },
  '10%': {
    transform: 'translate(-1px, -1px) rotate(-0.5deg)'
  },
  '20%': {
    transform: 'translate(-1px, 1px) rotate(.5deg)'
  },
  '30%': {
    transform: 'translate(1px, 1px) rotate(0deg)'
  },
  '40%': {
    transform: 'translate(-1px, -1px) rotate(.5deg)'
  },
  '50%': {
    transform: 'translate(1px, -1px) rotate(-.5deg)'
  },
  '60%': {
    transform: 'translate(1px, 1px) rotate(0deg)'
  },
  '70%': {
    transform: 'translate(-1px, -1px) rotate(-0.5deg)'
  },
  '80%': {
    transform: 'translate(-1px, -1px) rotate(.5deg)'
  },
  '90%': {
    transform: 'translate(1px, 1px) rotate(0deg)'
  },
  '100%': {
    transform: 'translate(1px, 1px) rotate(.5deg)'
  }
})


export const Main = styled('div', {

  display: 'flex',
  justifyContent: 'left',
  alignItems: 'flex-end',
  paddingLeft: '2rem',
  color: 'white',
  marginRight: '2rem',
  paddingTop: '2rem',

  h1: {
    fontSize: '2.5rem',
    textAlign: 'left',
    width: 'min-content',
    marginRight: '1rem',
    fontFamily: 'Rye'
  },

  span: {
    fontSize: '2.5rem',
    wordBreak: 'break-all',
    fontFamily: 'Special Elite'
  },

  variants: {
    elemento: {
      Conhecimento: {
        h1: {
          color: 'Gold'
        }
      },
      Morte: {
        h1: {
          color: 'black',
        },
      },
      Medo: {
        h1: {
          color: 'white'
        },
      },
      Sangue: {
        h1: {
          color: 'Red'
        },
      },
      Energia: {
        h1: {
          color: 'Purple'
        }
      }

    },
    isCritico: {
      true: { 
        animation: `${shake} .5s infinite`,

        span: {
          color: '#ff3737'
        }
      }
    }
  }

})

export const Footer = styled('div', {

  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  textAlign: 'left',
  paddingLeft: '2rem',
  paddingBottom: '1rem',
  paddingTop: '2rem',
  color: '#e7e7e7b9',
  fontFamily: 'Special Elite',
  gap: '.5rem',

  variants: {
    isCritico: {
      true: {
        span: {
          animation: `${shake} .5s infinite`
        }
      }
    }
  }

})
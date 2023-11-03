import { styled } from '../../../../../../stitches.config';

export const Container = styled('div', {

  width: '65rem',
  borderRadius: '1.2rem',
  backgroundColor: 'rgb(27,27,27)',
  boxShadow: 'rgba(255, 255, 255, 0.45) 0rem 0.5rem 1.5rem',
  padding: '3.5rem 2.5rem',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',

  '@sm': {
    width: '100vw',
    height: '100vh',

    hr: {
      margin: '0 -2.5rem'
    }
  },

  h1: {
    display: 'inline-block',
    marginBottom: '3.5rem',
    fontSize: '3rem',
    color: '#a151b4',
    fontFamily: 'Arvo'
  },

  h2: {

    color: 'white',
    fontSize: '2.2rem',
    letterSpacing: '.2rem',
    fontWeight: 100,
    fontFamily: 'Special Elite',
    marginTop: '3rem'

  }

})

export const SelectDiv = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  gap: '1rem',
  flexWrap: 'wrap',

})

export const HrFooter = styled('hr', {

  borderColor: 'transparent',

  '@sm': {
    borderColor: 'white',
  }

})

export const Body = styled('div', {

  '@sm': {
    height: '80rem',
    overflow: 'hidden auto',
    padding: '0 2rem 3rem 1rem'
  }
})

export const Grid = styled('div', {

  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0 2rem',

  "@sm2": {
    gridTemplateColumns: '1fr'
  }

})

export const Grid2 = styled('div', {

  marginTop: '1rem',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '1rem 3rem',

  '@md2': {
    gridTemplateColumns: '1fr 1fr'
  }

})

export const Normal = styled('div', {



})

export const Span = styled('div', {
  width: '95%',
  color: '#ff000090',
  fontSize: '1.7rem',
  letterSpacing: '.1rem',
  marginTop: '.5rem',
  textAlign: 'left',
  fontFamily: 'emoji'
})

export const ButtonSelect = styled('button', {

  background: 'none',
  color: '#b65bcd',
  border: '2px solid #490f57',
  padding: '.5rem 1rem',
  fontSize: '2rem',

  '&:hover': {

    background: '#490f5780'

  },

  variants: {
    active: {
      true: {
        background: '#490f5780',
        cursor: 'default'
      }
    }
  }

})

export const Footer = styled('div', {
  marginTop: '3rem',

  '@sm': {
    marginTop: '2rem',
    marginBottom: '-2rem'
  }
})

export const Button = styled('button', {
  width: '15rem',
  height: '4.5rem',
  margin: '1rem',
  border: 'none',
  color: 'white',
  borderRadius: '8px',
  fontSize: '2.2rem',
  letterSpacing: '.1rem',
  cursor: 'pointer',
  fontFamily: 'Crimson Text',

  variants: {
    color: {
      red: {
        backgroundColor: '#d41717ff',

        '&:hover': {
          backgroundColor: '#ac1414ff',
        },
      },
      purple: {
        backgroundColor: '#4f1db4',

        '&:hover': {
          backgroundColor: '#3f178f',
        },
      }
    }
  },

  defaultVariants: {
    color: 'red'
  }
})


import { styled } from '../../../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  height: '100%',
  border: "2px solid #ffffff75",
  borderRadius: "0.5rem",

  hr: {
    borderColor: '#ffffff75'
  }

})

export const Select = styled('div', {

  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  flexWrap: 'wrap'

})

export const Main = styled('div', {

  display: 'flex',
  alignItems: 'left',
  flexDirection: 'column',
  padding: '2rem',
  paddingBottom: 0,
  minHeight: '54rem',
  maxHeight: '62rem',
  overflowY: 'auto',

  span: {
    marginBottom: '-3.5rem',
    fontSize: '2.3rem',
    color: '#fff',
    fontFamily: 'El Messiri'
  },

  textarea: {
    marginBottom: '3rem'
  },

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
  background: 'none',
  border: '2px solid transparent',
  color: '#fff',
  padding: '.7rem 1rem .4rem 1rem',
  letterSpacing: '1px',
  fontFamily: 'Special Elite',
  fontWeight: 700,
  borderRadius: '7px',
  transition: '.3s',

  '&:hover': {
    border: '2px solid #fff'
  },

  variants: {

    active: {
      true: {
        border: '2px solid #fff',
        cursor: 'default',

        '&:hover': {
          border: '2px solid #fff'
        },
      }
    }

  }

})
import { styled } from "../../../../stitches.config";

export const Container = styled('div', {

  width: '33rem',
  borderRadius: '1.2rem',
  position: 'relative',
  backgroundColor: 'rgb(20,20,20)',
  boxShadow: 'rgba(255, 255, 255, 0.75) 0rem 0rem 1rem',
  display: 'flex',
  flexDirection: 'column',

  hr: {
    borderColor: '$white90'
  },

  h2: {
    fontSize: '3rem',
    textAlign: 'center',
    padding: '2rem 0',
    paddingBottom: '1.5rem',
    color: 'white',
    fontFamily: 'Special Elite',
    fontWeight: 100,
    letterSpacing: '1px'
  }

})

export const Header = styled('div', {

  height: '62px',
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  padding: '1.5rem 2.5rem',
  color: 'white',

  h1: {
    fontSize: '2rem',
    paddingBottom: '.3rem',
    fontFamily: 'Special Elite'
  },

  button: {
    background: 'none',
    border: "none",
    color: '$white90',
    fontSize: '2.5rem',
    transition: '0.2s',
    padding: '0 10px 5px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  'button:hover': {
    opacity: 0.5,
  },



});

export const Body = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  color: '$white90',
  padding: '2rem',
  gap: '2rem',

  '.div': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },



});

export const Button = styled('button', {

  width: '100%',
  padding: '1rem 2rem',
  background: 'none',
  border: '1px solid $white90',
  color: '$white90',
  fontSize: '1.5rem',
  borderRadius: '5px',
  transition: '0.2s',
  cursor: 'pointer',

  '&:hover': {
    background: '$white25',
  },

  variants: {
    active: {
      true: {
        border: '1px solid #39ff6eff',
        color: '#39ff6eff',
        cursor: 'default',

        '&:hover': {
          background: 'none',
        },
      },
    }
  }
})
import { styled } from "../../../stitches.config";

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
    fontSize: '2rem',
    lineHeight: '3rem',
    textAlign: 'center',
    color: 'white',
    paddingTop: '.5rem',
    fontFamily: 'Special Elite',
    fontWeight: 100,
    letterSpacing: '1px'
  }

})

export const Header = styled('div', {

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

export const Button = styled('button', {

  background: 'none',
  border: '2px solid #00ff88',
  color: '#00ff88',
  width: '90%',
  padding: '.4rem',
  transition: '.3s',
  borderRadius: '5px',

  '&:hover': {
    background: '#00ff8850'
  },

  variants: {
    color: {
      red: {
        border: '2px solid #ff3f3f',
        color: '#ff3f3f',

        '&:hover': {
          background: '#ff3f3f50'
        },
      }
    }
  }

});

export const Body = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  color: '$white90',
  padding: '1rem 2rem',
  gap: '2rem',

  '.div': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    'button': {
      whiteSpace: 'nowrap',
      color: '#00fff7',
      fontSize: '1.4rem',
      background: 'none',
      fontFamily: 'Acme',
      fontSize: '2rem',
      border: '2px solid #00fff7',
      padding: '.5rem 1rem',
      borderRadius: '.5rem',
      transition: '.3s',
    },

    'button:hover': {

      background: '#00fff750',

    }
  },

});

export const Footer = styled('div', {

  padding: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem'


});
import { styled } from "../../../../../../stitches.config";

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
  textAlign: 'center',
  color: '$white90',
  padding: '2rem',
  gap: '5rem',

});

export const Button = styled('button', {

  color: '$purple',
  fontSize: '1.8rem',
  background: 'none',
  border: '2px solid #800080',
  padding: '.5rem 3rem',
  borderRadius: '.5rem',
  transition: '.3s',

  '&:hover': {
    background: '#80008050',
  },

  variants: {
    color: {
      red: {
        color: '$isDisaster',
        border: '2px solid #ff3737',

        '&:hover': {

          background: '#ff373750',

        },
      }
    }
  }

});

export const Footer = styled('div', {

  padding: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  button: {
    background: 'none',
    border: '2px solid #00ff88',
    color: '#00ff88',
    width: '90%',
    fontFamily: 'Acme',
    fontSize: '2rem',
    padding: '.4rem',
    transition: '.3s',
    borderRadius: '5px'
  },

  'button:hover': {
    background: '#00ff8850'
  }

});
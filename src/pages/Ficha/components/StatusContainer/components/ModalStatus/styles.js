import { styled } from "../../../../../../stitches.config";

export const Container = styled('div', {

  width: '60rem',
  borderRadius: '1.2rem',
  position: 'relative',
  backgroundColor: 'rgb(20,20,20)',
  boxShadow: 'rgba(255, 255, 255, 0.75) 0rem 0rem 1rem',
  display: 'flex',
  flexDirection: 'column',

  hr: {
    borderColor: '#ffffff90'
  },

  form: {
    height: '100vh',
  },

  '@md': {
    width: '100vw',
    height: '100%',
    borderRadius: 0
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
    color: '#ffffff90',
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
  color: '#ffffff90',
  padding: '3rem 2rem',
  gap: '2rem',

  '@md': {
    overflowY: 'auto',
    height: 'calc(100% - 130px)',
    justifyContent: 'flex-start'
  },

  h2: {
    color: 'white',
    fontSize: '2.2rem',
    letterSpacing: '.2rem',
    fontWeight: 100,
    fontFamily: 'Special Elite'
  },

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

export const Main1 = styled('div', {

  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '2rem',
  marginTop: '1rem',

  '@md': {
    gridTemplateColumns: '1fr 1fr',
  }

})

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
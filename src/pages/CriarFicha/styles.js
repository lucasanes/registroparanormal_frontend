import { styled } from '../../stitches.config';

export const Container = styled("div", {

  width: "100%",
  height: '100%',
  background: "rgb(20,20,20)",
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',

  form: {
    height: '100%'
  }

});

export const Body = styled("div", {

  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateAreas:
    `'principal atributos'
  'footer footer'`,
  gridTemplateRows: 'auto auto',
  gap: '3rem',
  padding: "2rem",

  '@lg': {
    gridTemplateColumns: '1fr',
    gridTemplateAreas:
      `'principal'
  'atributos'
  'footer'`,
    gridTemplateRows: 'auto auto auto',
  },

});

export const Principal = styled('div', {

  height: "90rem",
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'top',
  flexDirection: 'column',
  borderRadius: '.5rem',
  border: '2px solid #ffffff90',
  padding: '2rem',
  gridArea: 'principal',
  gap: '2rem',

  h1: {
    marginBottom: '1rem',
    color: 'white',
    fontSize: '3rem',
    fontFamily: 'Special Elite',
    letterSpacing: '.2rem'
  },

})

export const Atributos = styled('div', {

  height: '90rem',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'top',
  flexDirection: 'column',
  borderRadius: '.5rem',
  border: '2px solid #ffffff90',
  padding: '2rem',
  gridArea: 'atributos',
  gap: '2rem',

  h1: {
    marginBottom: '1rem',
    color: 'white',
    fontSize: '3rem',
    fontFamily: 'Special Elite',
    letterSpacing: '.2rem'
  },

})

export const Span = styled('span', {

  width: '95%',
  color: '#ff000090',
  fontSize: '1.7rem',
  letterSpacing: '.1rem',
  marginTop: '-1.5rem',
  textAlign: 'left',
  fontFamily: 'emoji'

})

export const Footer = styled('div', {

  width: '100%',
  gridArea: 'footer',

  button: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid #00ff88',
    background: 'none',
    padding: '1rem',
    color: '#00ff88',
    borderRadius: '8px',
    fontSize: '2.5rem',
    cursor: 'pointer',
    transition: '0.2s',
    fontFamily: 'Crimson Text',

    '&:hover': {
      backgroundColor: '#00ff8850',
    },
  }

})
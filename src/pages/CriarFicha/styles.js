import { styled } from '../../stitches.config';

export const Container = styled("div", {

  width: "100%",
  height: 'calc(100% - 72px)',
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
  display: 'flex',
  gap: '3rem',
  padding: "2rem",
  height: '100%',
  flexDirection: 'column',

  '.row': {
    display: 'flex',
    flexDirection: 'row',
    gap: '3rem',
  },

  '@lg': {
    '.row': {
      flexDirection: 'column'
    }
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
  border: '2px solid $white90',
  padding: '2rem',
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
  border: '2px solid $white90',
  padding: '2rem',
  gap: '2rem',

  h1: {
    marginBottom: '1rem',
    textAlign: 'center',
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
  paddingBottom: '2rem',

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
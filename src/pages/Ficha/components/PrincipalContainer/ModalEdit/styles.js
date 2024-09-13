import { styled } from "../../../../../stitches.config";

export const Container = styled('div', {

  width: '60rem',
  borderRadius: '1.2rem',
  position: 'relative',
  backgroundColor: 'rgb(20,20,20)',
  boxShadow: 'rgba(255, 255, 255, 0.75) 0rem 0rem 1rem',
  display: 'flex',
  flexDirection: 'column',

  '@md': {
    width: '100vw',
    height: '100%',
    borderRadius: 0
  },

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
  flexDirection: 'column',
  textAlign: 'center',
  color: '$white90',
  padding: '3rem 2rem',
  gap: '2rem',

  '@md': {
    overflowY: 'auto',
    height: 'calc(100vh - 130px)',
    justifyContent: 'flex-start'
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

export const DualParte = styled('div', {

  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '2rem',

  '@md': {
    gridTemplateColumns: '1fr'
  }

})
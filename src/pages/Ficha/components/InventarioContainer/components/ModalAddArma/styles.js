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
    borderColor: '$white90'
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

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  color: '$white90',
  gap: '1rem',
  overflow: 'hidden',

  '@md': {
    height: 'calc(100vh - 130px)',
    overflowY: 'auto',
    justifyContent: 'flex-start'
  },

  hr: {
    borderColor: '$white90',
    width: '100%',
  },

});

export const Main1 = styled('div', {

  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'start',
  gap: '2rem',
  padding: '2rem',

  '@md': {
    gridTemplateColumns: '1fr'
  }

});

export const Main2 = styled('div', {

  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '2rem',
  padding: '2rem',

  '@md': {
    gridTemplateColumns: '1fr'
  }

});

export const Main3 = styled('div', {

  width: '100%',
  padding: '2rem',

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
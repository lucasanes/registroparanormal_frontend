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
  gap: '2rem',
  overflow: 'hidden',
  padding: '3rem 2rem',

  h2: {
    color: '$white',
    fontSize: '2rem',
    marginBottom: '1rem'
  },

  '@md': {
    height: 'calc(100vh - 185px)',
    overflowY: 'auto',
    justifyContent: 'flex-start'
  },

  '@sm': {
    height: 'calc(100vh - 230px)',
  },

  hr: {
    borderColor: '$white90',
    width: '100%',
  },

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

export const SelectDiv = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  gap: '1rem',

  '@sm': {
    flexWrap: 'wrap'
  }

})

export const Grid = styled('div', {

  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '2rem',

  '@md': {
    gridTemplateColumns: '1fr'
  }

})

export const Grid3 = styled('div', {

  width: '100%',
  display: 'flex',
  gridTemplateColumns: '1fr 1fr',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2rem',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  '@md': {
    flexDirection: 'column',
    justifyContent: 'flex-start',

    div: {
      justifyContent: 'flex-start',
    },

  }

})

export const Grid2 = styled('div', {

  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '2rem',

  '@md': {
    gridTemplateColumns: '1fr 1fr'
  }

})

export const Normal = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  flexDirection: 'column'

})

export const ButtonSelect = styled('button', {

  background: 'none',
  color: '$white90',
  border: '1px solid $white90',
  borderRadius: '5px',
  padding: '.5rem 1rem',
  fontSize: '2rem',

  '&:hover': {

    background: '$white25'

  },

  variants: {
    active: {
      true: {
        background: '$white25',
        cursor: 'default'
      }
    }
  }

})
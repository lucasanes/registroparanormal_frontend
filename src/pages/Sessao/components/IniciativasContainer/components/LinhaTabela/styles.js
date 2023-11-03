import { styled } from '../../../../../../stitches.config';

export const Container = styled('tr', {

  width: '100%',

  td: {

    borderBottom: '1px solid #ffffff90',
    paddingBottom: '1rem',

    '&:last-child': {
      display: 'flex',
      gap: '0.5rem'
    },

  },

  input: {
    width: '100%',
    background: 'none',
    padding: '.3rem',
    border: 'none',
    outline: '1px solid #ffffff90',
    color: 'White'
  },

  "input[type=number]::-webkit-inner-spin-button": {
    "-webkit-appearance": 'none',
  },

  "input[type=number]": {
    "-moz-appearance": 'textfield',
    "appearance": 'textfield',

  }

})

export const ButtonIcon = styled('button', {

  position: 'relative',
  top: 2,
  background: 'none',
  border: 'none',
  transition: '.3s',

  '&:hover': {
    opacity: 0.5
  }

});

export const TD1 = styled('td', {
  paddingLeft: '1rem',
  paddingRight: '2rem',
  paddingTop: '.6rem'
})

export const TD2 = styled('td', {
  paddingRight: '2.4rem',
  fontFamily: 'arial'
})

export const TD3 = styled('td', {
  paddingRight: '2rem',

  input: {
    width: '100%',
  },

})

export const TD4 = styled('td', {
  paddingRight: '4rem',

  '@md  ': {
    display: 'none'
  },

  input: {
    width: '5rem'
  },

})

export const TD5 = styled('td', {
  paddingRight: '2rem',

  '@md  ': {
    display: 'none'
  },

  input: {
    width: '7rem'
  }
})

export const TD6 = styled('td', {

  height: '46px',

})
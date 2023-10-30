import { styled } from '../../stitches.config';

export const Container = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  button: {
    background: 'none',
    transition: '.2s',
    border: '1px solid transparent',
    borderRadius: '.5rem',
    padding: '.2rem',
  },

  'button:hover': {
    border: '1px solid #dcd91c',
  },

})
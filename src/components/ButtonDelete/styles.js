import { styled } from '../../stitches.config';

export const Container = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  button: {
    width: '26px',
    height: '26px',
    background: 'none',
    transition: '.2s',
    border: '1px solid transparent',
    borderRadius: '.5rem',
    padding: '.2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  'button:hover': {
    border: '1px solid #ff0000',
  },

})
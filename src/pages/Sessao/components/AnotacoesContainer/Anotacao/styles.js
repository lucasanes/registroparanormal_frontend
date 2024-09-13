import { styled } from '../../../../../stitches.config';

export const Container = styled('div', {

  display: 'flex',
  flexDirection: 'column',
  margin: '2rem 1rem',
  alignItems: 'center',

  div: {
    display: 'flex',
    width: '100%',
    padding: '0 .5rem',
    gap: '.8rem',
    marginBottom: '1rem'
  },

  input: {
    background: 'none',
    color: 'white',
    width: '100%',
    border: 'none',
    outline: '2px solid $white90',
    borderRadius: '5px',
    padding: '.5rem'
  },

  textarea: {

    width: '98%',
    background: 'none',
    resize: 'vertical',
    minHeight: '25rem',
    border: 'none',
    borderRadius: '5px',
    outline: '2px solid $white90',
    padding: '.5rem',
    color: 'white',
    fontFamily: 'arial'

  }

})
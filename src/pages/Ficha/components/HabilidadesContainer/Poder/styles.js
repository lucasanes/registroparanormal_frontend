import { styled } from '../../../../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  flexDirection: 'column',

  h1: {
    fontSize: '2rem',
    fontFamily: 'El Messiri',
    color: 'white',
    wordBreak: 'break-word',
  },

  p: {
    fontSize: '1.8rem',
    fontFamily: 'El Messiri',
    wordBreak: 'break-word',
    color: 'white'
  }

})

export const Main1 = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  columnGap: '2rem'

})

export const Main2 = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',

})

export const Buttons = styled('div', {

  display: 'flex',
  paddingBottom: '.5rem',
  gap: '1rem'

})

export const Button = styled('button', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: 'none',
  border: '2px solid transparent',
  borderRadius: '5px',
  padding: '.2rem',
  transition: '.3s',

  '&:hover': {
    border: '2px solid red'
  }


})
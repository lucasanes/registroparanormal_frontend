import { styled } from '../../stitches.config';

export const Container = styled('div', {

  minWidth: '30rem',
  borderRadius: '1.2rem',
  backgroundColor: 'rgb(27,27,27)',
  boxShadow: 'rgba(255, 255, 255, 0.45) 0rem 0.5rem 1.5rem',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',

})

export const Header = styled('div', {

  width: '100%',
  height: '5rem',
  borderRadius: '12px 12px 0px 0px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: 'rgb(20,20,20)',
  padding: '0 2rem',

  h1: {
    color: '#fff',
    fontSize: '2.2rem',
    fontWeight: 100,
    marginTop: '.7rem',
    textAlign: 'left',
    fontFamily: 'Special Elite'
  },

})

export const CloseButton = styled('button', {

  background: 'none',
  border: "none",
  color: '#ffffff90',
  fontSize: '2.5rem',
  transition: '0.2s',
  padding: '0 10px 2px 10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    opacity: 0.5,
  },

})

export const Main = styled('div', {

  display: 'flex',
  justifyContent: 'left',
  alignItems: 'baseline',
  paddingLeft: '2rem',
  color: 'white',
  marginRight: '2rem',
  paddingTop: '1rem',

  h1: {
    fontSize: '2.5rem',
    fontWeight: 100,
    marginRight: '1rem',
    width: 'min-content',
    textAlign: 'left',
    textTransform: 'capitalize',
    fontFamily: 'Rye'
  },

  span: {
    fontSize: '2.5rem',
    fontFamily: 'Special Elite',
    wordBreak: 'break-all'
  },

  variants: {
    isDano: {
      true: {
        h1: { color: 'Crimson' }
      },
      false: {
        h1: { color: 'purple' }
      }
    }
  }

})

export const Footer = styled('div', {

  display: 'flex',
  height: 'auto',
  flexDirection: 'column',
  textAlign: 'left',
  paddingLeft: '2rem',
  paddingBottom: '1rem',
  paddingTop: '2rem',
  color: '#e7e7e7b9',
  fontFamily: 'Special Elite',
  gap: '.5rem'

})
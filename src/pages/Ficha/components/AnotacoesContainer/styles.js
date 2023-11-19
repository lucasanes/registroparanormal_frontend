import { styled } from '../../../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  border: "2px solid #ffffff75",
  borderRadius: "0.5rem",
  marginTop: '2rem',

  hr: {
    borderColor: '#ffffff75'
  }

})

export const Header = styled('div', {

  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  flexWrap: 'wrap'

})

export const Main = styled('div', {

  display: 'flex',
  alignItems: 'left',
  padding: '2rem 2rem 3rem 2rem',
  gap: '2rem',
  width: '100%',
  overflowY: 'auto',

  '@lg': {
    flexDirection: 'column'
  },
  
  div: {
    width: '100%'
  },

  span: {
    fontSize: '2.3rem',
    color: '#fff',
    fontFamily: 'El Messiri'
  },

})

export const H1 = styled('h1', {

  textAlign: "center",
  color: "white",
  fontSize: "2rem",
  fontFamily: 'Special Elite',
  letterSpacing: '.1rem',
  paddingTop: '.3rem'

})
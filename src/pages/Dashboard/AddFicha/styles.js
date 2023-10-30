import { styled } from "../../../stitches.config";

export const Container = styled('div', {

  width: '100%',
  height: '26rem',
  minWidth: '3rem',
  background: 'rgb(27,27,27, 0.8)',
  border: '2px solid #4040ff',
  borderStyle: 'dotted',
  borderRadius: '1rem',
  fontFamily: 'El Messiri',
  display: 'flex',
  flexDirection: 'column',

  hr: {
    width: '100%',
    margin: 0,
    borderColor: '#ffffff75'
  },

})

export const Header = styled('div', {

  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem',
  marginBottom: '-0.5rem',

  h2: {
    color: "#4040ff",
    fontSize: '2rem',
    textAlign: 'left',
  },
})

export const Desc = styled('div', {

  height: '12.8rem',
  display: 'flex',
  justifyContent: 'left',
  overflowY: 'auto',
  overflowX: 'hidden',
  padding: '1rem',
  marginBottom: '1.7rem',

  h2: {
    width: 'max-content',
    height: 'max-content',
    color: 'white',
    fontSize: '1.6rem',
    textAlign: 'left',
    fontWeight: '100',
    wordBreak: 'break-word'
  }
})

export const Footer = styled('div', {

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1rem',

  a: {
    width: '100%',
    color: '#4040ff',
    fontFamily: 'Crimson Text',
    fontSize: '2rem',
    textAlign: 'center',
    textDecoration: 'none',
    background: 'none',
    border: '2px solid #4040ff',
    padding: '.5rem',
    borderRadius: '1rem',
    transition: 'ease 0.3s',
    borderStyle: 'dotted',
  },
  
  'a:hover': {
    backgroundColor: 'rgb(47,47,47,0.5)'
  }
})
import { styled } from "../../../stitches.config";

export const Container = styled('div', {

  width: '100%',
  height: '24rem',
  minWidth: '3rem',
  background: 'rgb(27,27,27, 0.8)',
  border: '2px solid #de0000',
  borderStyle: 'dotted',
  borderRadius: '1rem',
  fontFamily: 'El Messiri',
  display: 'flex',
  flexDirection: 'column',

  hr: {
    width: '100%',
    margin: 0,
    borderColor: '$white75'
  },

})

export const Header = styled('div', {

  display: 'flex',
  justifyContent: 'space-between',
  padding: '1rem',
  marginBottom: '-0.5rem',

  h2: {
    color: "#de0000",
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

  button: {
    width: '100%',
    color: '#de0000',
    fontFamily: 'Crimson Text',
    fontSize: '2rem',
    background: 'none',
    border: '2px solid #de0000',
    padding: '.5rem',
    borderRadius: '1rem',
    transition: 'ease 0.3s',
    borderStyle: 'dotted',
  },

  'button:hover': {
    backgroundColor: 'rgb(47,47,47,0.5)'
  }
})
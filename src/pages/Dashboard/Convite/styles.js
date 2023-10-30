import { styled } from "../../../stitches.config";

export const Container = styled('div', {
  width: '100%',
  minWidth: '3rem',
  background: 'rgb(27,27,27, 0.8)',
  border: '2px solid',
  borderColor: '#20b2aa',
  padding: '1rem',
  borderRadius: '1rem',
  fontFamily: 'El Messiri',

  hr: {
    margin: '0rem -1rem',
    borderColor: '#ffffff75'
  },
})

export const Header = styled('div', {

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '0.6rem',
  marginTop: '-0.2rem',

  h2: {
    color: "#20b2aa",
    fontSize: '2rem',
    textAlign: 'left',
  },

  button: {
    color: 'red',
    background: 'none',
    border: '1px solid transparent',
    padding: '.5rem',
    display: 'flex',
    gap: '.5rem',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '.3s',
    borderRadius: '5px',

    '&:hover': {
      border: '1px solid red',
    }

  }
})

export const Desc = styled('div', {
  height: '12.2rem',
  display: 'flex',
  justifyContent: 'left',
  marginTop: '1rem',
  marginBottom: '1rem',
  overflowY: 'auto',
  overflowX: 'hidden',

  h2: {
    width: 'max-content',
    height: 'max-content',
    color: 'white',
    fontSize: '1.6rem',
    textAlign: 'left',
    fontWeight: '100',
    wordBreak: 'break-word',
  }
})

export const Footer = styled('div', {
  height: '10rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
  marginTop: '1rem',

  a: {
    width: '100%',
    textDecoration: 'none',
    textAlign: 'center',
    color: '#20b2aa',
    fontFamily: 'Crimson Text',
    background: 'none',
    fontSize: '2rem',
    border: '2px solid #20b2aa',
    padding: '.5rem',
    borderRadius: '1rem',
    transition: 'ease 0.3s',
  },
  'a:hover': {
    backgroundColor: 'rgb(47,47,47,0.5)'
  },

  div: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },

  button: {
    width: '80%',
    textDecoration: 'none',
    textAlign: 'center',
    color: '#20b2aa',
    fontFamily: 'Crimson Text',
    background: 'none',
    fontSize: '2rem',
    border: '2px solid #20b2aa',
    padding: '.5rem',
    borderRadius: '1rem',
    transition: 'ease 0.3s',
  },
  'button:hover': {
    backgroundColor: 'rgb(47,47,47,0.5)'
  },

  select: {
    width: '20%'
  },

})
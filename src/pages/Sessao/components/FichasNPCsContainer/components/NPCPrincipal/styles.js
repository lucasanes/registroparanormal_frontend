import { Link } from 'react-router-dom';
import { styled } from '../../../../../../stitches.config';

export const Container = styled('div', {

  border: '2px solid #ffffff90',
  borderRadius: '7px',
  minHeight: '55rem',
  fontFamily: 'El Messiri',
  letterSpacing: '.1rem'

})

export const Header = styled('div', {

  padding: '.7rem 1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',

  h1: {

    fontSize: '2rem',
    color: 'white',
    textTransform: 'capitalize'

  },

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.5rem'
  }

})

export const BodyContainerDados = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem 1rem 2rem 1rem',
  flexDirection: 'column',

  h4: {
    color: 'white',
    fontSize: '1.8rem',
    marginTop: '3rem',
    marginBottom: '2rem'
  },

  h5: {
    color: 'white',
    fontSize: '1.8rem',
    marginBottom: '2rem'
  }

})

export const FlexStatus = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '2rem',

  button: {

    background: 'none',
    borderRadius: '5px',
    border: '1px solid #ffffff90',
    color: 'white',
    fontWeight: 700,
    fontFamily: 'El Messiri',
    padding: '.4rem .8rem .2rem .8rem',
    transition: '.2s'

  },

  'button:hover': {
    background: '#ffffff20'
  }

})

export const Status = styled('div', {

  border: '1px solid white',
  color: 'white',
  padding: '.5rem 1rem',
  fontWeight: 700,

  label: {
    textTransform: 'capitalize',
  },

})

export const Pericia = styled('button', {

  background: 'none',
  border: '1px solid white',
  textTransform: 'capitalize',
  color: 'white',
  padding: '.5rem 1rem',
  fontWeight: 700,

  '&:hover': {
    cursor: 'pointer',
  },

  label: {
    textTransform: 'capitalize',
  },

})

export const Select = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '1rem',
  padding: '.5rem 1rem'

})

export const BodyContainerPrincipal = styled('div', {

  padding: '1rem',
  gap: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'

})

export const BodyContainerOutros = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  padding: '1rem',
  flexDirection: 'column',

  h2: {
    color: 'white',
    fontSize: '2rem',
    marginBottom: '-1rem',
    marginTop: '1rem'
  },

  h3: {
    color: '#ffffff90',
    fontSize: '1.8rem',
    marginBottom: '.4rem',
    marginTop: '.2rem'
  }

})

export const BodyContainerStatus = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  padding: '1rem',
  flexDirection: 'column',

  h3: {
    color: 'white',
    fontSize: '2rem',
    marginBottom: '-1.5rem',
    marginTop: '.5rem'
  },

  h4: {
    color: 'white',
    fontSize: '2.2rem',
    marginTop: '.5rem',
    marginBottom: '-1rem'
  }

})

export const Card = styled('div', {

  width: '100%',
  minWidth: '10rem',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  border: '1px solid white',
  padding: '.5rem',
  flexDirection: 'column',

  label: {
    color: '#ffffff90',
    paddingLeft: '.5rem',
    fontSize: '1.8rem'
  },

  span: {
    color: 'white',
    paddingLeft: '1.5rem',
    textTransform: 'capitalize'
  }

})

export const Button = styled('button', {

  background: 'none',
  padding: '0rem .5rem',
  paddingTop: '.2rem',
  fontSize: '1.8rem',
  fontFamily: 'El Messiri',
  border: '2px solid transparent',
  borderRadius: '5px',
  transition: '.3s',
  color: 'white',

  '&:hover': {
    border: '2px solid purple'
  },

  variants: {
    active: {
      true: {
        border: '2px solid purple',
        cursor: 'default'
      }
    }
  }

})

export const LinkButton = styled(Link, {
  background: 'none',
  transition: '.3s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '.5rem',
  border: '2px solid transparent',
  padding: '.2rem',

  '&:hover': {
    border: '2px solid #1f55c2ff',
    padding: '.2rem',
  },
})

export const ButtonHeader = styled('button', {

  background: 'none',
  textDecoration: 'none',
  padding: '.3rem',
  display: 'flex',
  borderRadius: '5px',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 2px transparent',
  transition: '0.3s',

  variants: {
    color: {
      green: {
        '&:hover': {
          border: 'solid 2px #13ff72',
        },
      },
      crimson: {
        '&:hover': {
          border: 'solid 2px crimson',
        },
      },
      red: {
        '&:hover': {
          border: 'solid 2px red',
        },
      }
    }
  }

})

export const TextArea = styled('textarea', {

  width: '100%',
  border: '2px solid white',
  background: 'none',
  minHeight: '7rem',
  padding: '.5rem 1rem',
  color: 'white',
  resize: 'vertical',
  fontFamily: 'El Messiri'

})
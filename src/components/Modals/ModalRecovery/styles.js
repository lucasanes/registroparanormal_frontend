import { styled } from "../../../stitches.config";

export const Container = styled('div', {

  width: '33rem',
  borderRadius: '1.2rem',
  position: 'relative',
  backgroundColor: 'rgb(20,20,20)',
  boxShadow: 'rgba(255, 255, 255, 0.75) 0rem 0rem 1rem',
  display: 'flex',
  flexDirection: 'column',

  hr: {
    borderColor: '$white90'
  },

  h2: {
    fontSize: '3rem',
    textAlign: 'center',
    padding: '2rem 0',
    paddingBottom: '1.5rem',
    color: 'white',
    fontFamily: 'Special Elite',
    fontWeight: 100,
    letterSpacing: '1px'
  }

})

export const Header = styled('div', {

  height: '62px',
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  padding: '1.5rem 2.5rem',
  color: 'white',

  h1: {
    fontSize: '2rem',
    paddingBottom: '.3rem',
    fontFamily: 'Special Elite'
  },

  button: {
    background: 'none',
    border: "none",
    color: '$white90',
    fontSize: '2.5rem',
    transition: '0.2s',
    padding: '0 10px 5px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  'button:hover': {
    opacity: 0.5,
  },



});

export const Body = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  color: '$white90',
  padding: '2rem',
  gap: '2rem',

  '.div': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    'button': {
      whiteSpace: 'nowrap',
      color: '#00fff7',
      fontSize: '1.4rem',
      background: 'none',
      border: '2px solid #00fff7',
      padding: '.5rem 1rem',
      borderRadius: '.5rem',
      transition: '.3s',
    },

    'button:hover': {

      background: '#00fff750',

    }
  },

  variants: {
    isLoading: {
      true: {
        opacity: 0,
        padding: 0,
        height: 0
      }
    }
  }

});

export const ButtonAgain = styled('button', {

  position: 'relative',
  alignSelf: 'flex-start',
  marginLeft: '.5rem',
  background: 'none',
  border: 'none',
  width: 'fit-content',
  color: '#00fff7',
  fontFamily: 'Roboto',
  fontSize: '1.4rem',
  fontWeight: 100,
  transition: '.3s',

  '&:hover': {
    filter: 'opacity(0.7)'
  }

});

export const Footer = styled('div', {

  padding: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',

});

export const Button = styled('button', {

  background: 'none',
  border: '2px solid #00ff88',
  color: '#00ff88',
  width: '90%',
  fontFamily: 'Acme',
  fontSize: '2rem',
  padding: '.4rem',
  transition: '.3s',
  borderRadius: '5px',

  '&:hover': {
    background: '#00ff8850'
  },

  variants: {
    color: {
      red: {
        color: '#ff0000',
        border: '2px solid #ff0000',
        '&:hover': {
          background: '#ff000050'
        },
      }
    },
    disabled: {
      true: {
        cursor: 'default',
        '&:hover': {
          background: 'transparent'
        }
      }
    }
  }
});
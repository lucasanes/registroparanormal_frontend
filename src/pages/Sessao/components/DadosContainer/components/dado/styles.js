import { styled } from '../../../../../../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  position: 'relative',

  '.edit': {
    position: 'absolute'
  }
})

export const Body = styled('div', {
  display: 'flex',
})

export const Button = styled('button', {

  minWidth: '10rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '.5rem',

  h1: {
    width: 'min-content',
    fontSize: '2rem',
    marginTop: '.5rem',
    color: 'white',
    fontWeight: 100,
    textTransform: 'capitalize',
    whiteSpace: 'normal',
    fontFamily: 'Rye',
  },

  background: 'none',
  padding: '1.5rem .7rem 0.5rem .7rem',
  border: '2px solid transparent',
  borderRadius: '1rem',
  transition: '.3s',

  variants: {
    isDano: {
      true: {
        color: '#ff3737',

        h1: {
          textShadow: '2px 2px 2px #ff3737'
        },

        '&:hover': {
          border: '2px solid #ff3737',
        },
      },
      false: {
        color: '#800080',

        h1: {
          textShadow: '2px 2px 1px #800080'
        },

        '&:hover': {
          border: '2px solid #800080',
        },
      }
    }
  }

})

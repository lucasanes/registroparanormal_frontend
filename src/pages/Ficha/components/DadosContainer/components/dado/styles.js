import { styled } from '../../../../../../stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
})

export const Body = styled('div', {
  display: 'flex',
})

export const Button = styled('button', {

  h1: {
    width: 'min-content',
    fontSize: '2rem',
    marginTop: '.5rem',
    color: 'white',
    fontWeight: 100,
    textTransform: 'capitalize',
    whiteSpace: 'normal',
    fontFamily: 'Rye'
  },

  background: 'none',
  padding: '.8rem 1rem 0.5rem 1rem',
  border: '2px solid transparent',
  borderRadius: '1rem',
  transition: '.3s',

  variants: {
    isDano: {
      true: {
        color: 'crimson',

        h1: {
          textShadow: '2px 2px 2px crimson'
        },

        '&:hover': {
          border: '2px solid crimson',
        },
      },
      false: {
        color: 'Purple',

        h1: {
          textShadow: '2px 2px 1px #854cff'
        },

        '&:hover': {
          border: '2px solid Purple',
        },
      }
    }
  }

})

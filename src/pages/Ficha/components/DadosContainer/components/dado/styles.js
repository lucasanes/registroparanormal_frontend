import { styled, theme } from '../../../../../../stitches.config';

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
    fontFamily: 'Rye'
  },

  background: 'none',
  padding: '1.5rem .7rem 0.5rem .7rem',
  border: '2px solid transparent',
  borderRadius: '1rem',
  transition: '.3s',

  variants: {
    isDano: {
      true: {
        color: '$orange',

        h1: {
          textShadow: `2px 2px 2px ${theme.colors.orange}`
        },

        '&:hover': {
          border: `2px solid ${theme.colors.orange}`,
        },
      },
      false: {
        color: '$cyan',

        h1: {
          textShadow: `2px 2px 1px ${theme.colors.cyan}`
        },

        '&:hover': {
          border: `2px solid ${theme.colors.cyan}`,
        },
      }
    }
  }

})

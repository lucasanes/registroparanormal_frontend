import { keyframes, styled } from '../../../../../../stitches.config';

export const Container = styled('div', {
  border: `2px solid #800080`,
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column'
})

export const Header = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '0.5rem 1rem',

  div: {
    width: '34px',
  },

  h1: {
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: '$purple',
    wordBreak: 'break-word',
    padding: '0 1rem',
    fontSize: '3rem',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontFamily: 'Permanent Marker',
    fontWeight: 100,
    letterSpacing: '.1rem',
    margin: '0 1rem'
  }

})

export const Main = styled('div', {

  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  padding: '1rem'

})

export const MainTop = styled('div', {

  width: '100%',
  height: 'max-content',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '1rem',

  '.row': {
    width: '100%',
    display: 'flex',
    gap: '2rem',
  },

  '.infos': {
    width: '100%',
    color: 'white',
    textAlign: 'center',
    padding: '.2rem 0.5rem 0rem 0.5rem',
    border: '1px solid $white90',
    fontFamily: 'El Messiri'
  }

})

export const Span = styled('span', {

  height: '10rem',
  maxHeight: '20rem',
  wordBreak: 'break-word',
  overflowY: 'auto',
  width: '100%',
  background: 'none',
  border: 'none',
  outline: '1px solid $white90',
  color: 'white',
  fontFamily: 'arial',
  padding: '0.5rem 1rem',
  fontFamily: 'El Messiri'

})

export const ButtonIcon = styled('button', {

  border: '2px solid transparent',
  background: 'none',
  transition: '.3s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '.5rem',
  padding: '.2rem',
  position: 'relative',
  margin: '0',

  variants: {
    color: {
      green: {
        '&:hover': {
          border: '2px solid #42bb4d',
        },
      },
      aqua: {
        '&:hover': {
          border: '2px solid aqua',
        },
      }
    }
  },

  defaultVariants: {
    color: 'green'
  }

})

export const ParteImg = styled('div', {

  height: '100%',
  width: '100%',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    width: '100%',
    objectFit: 'contain',
    maxHeight: '30rem'
  }
})

export const ParteImgModal = styled('div', {
  height: '95vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',

  img: {
    objectFit: 'contain'
  }
})

const scaleUpImgModal = keyframes({
  '0%': {
    width: '20%',
    opacity: 0
  },

  '100%': {
    width: '100%',
    opacity: 1
  },
});

export const ImgModal = styled('img', {

  animation: `${scaleUpImgModal} 300ms`,
  width: '100%'

})

import { styled, keyframes } from '../../../../../../stitches.config';

export const Container = styled('div', {
  border: '2px solid #ff3737',
  minWidth: '4rem',
  minHeight: '60rem',
  borderRadius: '5px'
})

export const Header = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.5rem 1rem',

  h1: {
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: '#ff3737',
    fontSize: '3rem',
    padding: '0 1rem',
    textAlign: 'center',
    textTransform: 'capitalize',
    fontFamily: 'Permanent Marker',
    fontWeight: 100,
    letterSpacing: '.2rem',
    margin: '0 1rem'
  }

})

export const Main = styled('div', {

  height: 'calc(100% - 54px)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  justifyContent: 'flex-start',
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
    border: '1px solid #ffffff90',
    fontFamily: 'El Messiri'
  }

})

export const Span = styled('span', {

  height: '10rem',
  wordBreak: 'break-word',
  overflowY: 'auto',
  width: '100%',
  background: 'none',
  border: 'none',
  outline: '1px solid #ffffff90',
  color: 'white',
  fontFamily: 'El Messiri',
  padding: '.5rem 1rem',

})

export const ButtonIcon = styled('button', {

  border: '2px solid transparent',
  background: 'none',
  transition: '.3s',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '.5rem',

  variants: {
    color: {
      green: {
        padding: '.2rem',
        '&:hover': {
          border: '2px solid #42bb4d',
        },
      },
      aqua: {
        padding: '.2rem .4rem',
        '&:hover': {
          border: '2px solid aqua',
          padding: '.2rem .4rem'
        },
      }
    }
  },

  defaultVariants: {
    color: 'green'
  }

})

export const Infos = styled('div', {

  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',

  span: {
    marginLeft: '1rem',
    fontSize: '2rem',
    color: '#fff',
    textTransform: 'capitalize',
    fontFamily: 'Markazi Text'
  },
})

export const DivInfos = styled('div', {

  width: '100%',
  border: '1px solid rgba(255, 255, 255, 0.56)',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'left'

})

export const Icon = styled('div', {
  display: 'flex',
  width: '4.5rem',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '.5rem',
  borderRight: '2px solid #ffffff90'
})

export const Dados = styled('div', {
  display: 'flex',
  padding: '0 1rem',
  gap: '1rem',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',

  '@sm': {
    flexDirection: 'column'
  },

  variants: {
    recarga: {
      false: {
        marginTop: '5rem',
        marginBottom: '4rem'
      }
    }
  }

})

export const Button = styled('button', {
  width: 'max-content',
  height: '3rem',
  background: 'none',
  padding: '0 1rem',
  fontSize: '1.6rem',
  fontFamily: 'Special Elite',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  strong: {
    fontFamily: 'Cinzel Decorative',
    position: 'relative',
    bottom: '.1rem',
    fontSize: '1.8rem',
  },

  '@md5': {
    width: '100%'
  },

  variants: {
    color: {
      crimson: {
        color: '#ff3737',
        border: '2px solid #ff3737',

        '&:hover': {
          background: '#dc143c50',
        }
      },
      red: {
        color: '#ff0033',
        border: '2px solid #ff0033',

        '&:hover': {
          background: '#ff003350',
        }
      }
    }
  }
})

export const ContainerDadoRolado = styled('div', {
  padding: '1rem',
  width: '100%'
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

const scaleUp = keyframes({
  '0%': {
    scale: '20%',
    opacity: 0
  },
  '100%': {
    scale: '100%',
    opacity: 1
  },
});

export const ImgModal = styled('img', {

  animation: `${scaleUp} 300ms`,
  maxWidth: '100%'

})

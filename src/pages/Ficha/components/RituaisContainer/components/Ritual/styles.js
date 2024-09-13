import { styled } from '../../../../../../stitches.config';

export const Container = styled('div', {

  fontFamily: 'El Messiri',
  position: 'relative',
  margin: '2rem 0',

  variants: {

    elemento: {
      Conhecimento: {
        boxShadow: '0px 0px 10px #ffd700',
        border: '2px solid #ffd700',
        '.hr': {
          boxShadow: '0px 0px 10px #ffd700',
          borderColor: '#ffd700'
        },
      },
      Morte: {
        boxShadow: '0px 0px 10px #000000ff',
        border: '2px solid #000000ff',
        '.hr': {
          boxShadow: '0px 0px 10px #000000ff',
          border: 'solid 1px',
          borderColor: '#000000ff',
        },
      },
      Medo: {
        boxShadow: '0px 0px 10px $white',
        border: '2px solid $white',
        '.hr': {
          boxShadow: '0px 0px 10px $white',
          borderColor: '$white'
        },
      },
      Sangue: {
        boxShadow: '0px 0px 10px #ff0000',
        border: '2px solid #ff0000',
        '.hr': {
          boxShadow: '0px 0px 10px #ff0000',
          borderColor: '#ff0000'
        },
      },
      Energia: {
        boxShadow: '0px 0px 10px #800080',
        border: '2px solid #800080',
        '.hr': {
          boxShadow: '0px 0px 10px #800080',
          borderColor: '$purple'
        },
      }
    }

  }

})

export const Header = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem 2rem',
  gap: '2rem',

  h1: {
    fontSize: '2.5rem',
    textTransform: 'capitalize',
  },

  variants: {
    elemento: {
      Conhecimento: {
        color: '#ffd700'
      },
      Morte: {
        color: '$white',
      },
      Medo: {
        color: '$white'
      },
      Sangue: {
        color: '#ff0000'
      },
      Energia: {
        color: '$purple'
      }
    }

  }

})

export const Body = styled('div', {

  width: '100%',
  display: 'flex',
  padding: '2rem',
  alignItems: 'center',
  gap: '2rem',
  position: 'relative',

  '@lg': {
    flexDirection: 'column'
  },

  img: {
    width: '200px',
    border: '2px solid white',
    borderRadius: '30px'
  },

})

export const Botoes = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 2rem 2rem 2rem',
  gap: '2rem 3rem',
  flexWrap: 'wrap',

  button: {
    width: '15rem',
    borderRadius: '5px',
    padding: '.4rem .5rem .2rem .5rem',
    fontFamily: 'El Messiri',
    fontSize: '2rem',
    background: 'none',
    border: '2px solid $orange',
    color: '$orange',
    transition: 'background .3s'
  },

  'button:hover': {
    background: '$orangeHover'
  },

})

export const Img = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 3rem'

})

export const Main = styled('div', {

  width: 'calc(100% - 200px)',
  padding: '.5rem 0rem .5rem 1rem',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '3rem',
  alignContent: 'center',

  '@lg': {
    width: '100%'
  },

  '@sm': {
    gridTemplateColumns: '1fr'
  }

})

export const Card = styled('div', {

  border: '2px solid white',
  height: '8rem',
  minWidth: '5rem',
  color: '$white',
  borderRadius: '5px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',

  h2: {
    padding: '.5rem 0rem 0rem 1rem',
    fontSize: '1.8rem'
  },

  hr: {
    marginBottom: '.7rem'
  }

})

export const Span = styled('span', {
  padding: '1rem 2rem',
  fontSize: '1.8rem',
  textTransform: 'capitalize'
})

export const Footer = styled('div', {

  width: '100%',
  display: 'flex',
  padding: '2rem',
  gap: '4rem',

  '.row': {
    width: '40%',
    maxWidth: '100rem'
  },

  '@lg': {
    flexDirection: 'column',

    '.row': {
      width: '100%'
    }
  }

})

export const Desc = styled('span', {

  border: '2px solid white',
  maxHeight: '100%',
  minHeight: '20rem',
  fontSize: '1.8rem',
  overflowY: 'auto',
  padding: '1rem 2rem',
  width: '60%',
  color: '$white',

  '@lg': {
    width: '100%'
  }

})

export const Buttons = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem'

})
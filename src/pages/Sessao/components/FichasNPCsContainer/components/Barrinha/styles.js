import { styled } from '../../../../../../stitches.config';

export const Container = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column'
})

export const Botoes = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0rem 1rem',

  span: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '2rem',
    padding: '0rem .5rem 0.2rem .5rem',
    fontWeight: 100
  },

  button: {
    padding: '.7rem .7rem .5rem .7rem',
    margin: '.5rem .5rem',
    fontFamily: 'Special Elite',
    background: 'none',
    display: 'flex',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    gap: '.5rem',
    transition: '.3s',
    color: 'White',
    border: '1px solid transparent',
    fontSize: '1.6rem',
    borderRadius: '7px',
    fontWeight: 100,

  },

  'button:hover': {
    border: '1px solid white'
  },

  '@md2': {
    padding: '0rem',
    button: {
      margin: '.5rem .2rem',
    }
  }
})

export const Esquerda = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    marginLeft: '-.4rem'
  }
})

export const Direita = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  svg: {
    marginRight: '-.4rem'
  }
})


export const BarrinhaDiv = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ProgressBar = styled('div', {

  width: '100%',
  height: '2rem',
  borderRadius: '10px',
  backgroundColor: '#ffffff14',
  display: 'flex',

})

export const Progress = styled('div', {

  height: '2rem',
  borderRadius: '10px',
  display: 'flex',
  transition: '0.3s',

  variants: {
    color: {
      red: {
        backgroundColor: '#9a0000',
      },
      yellow: {
        backgroundColor: '#ffbf00b5',
      },
      aqua: {
        backgroundColor: '#005795',
      }
    }
  }

})
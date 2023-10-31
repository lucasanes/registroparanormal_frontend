import { styled } from '../../stitches.config';

export const Container = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  position: 'relative'
})

export const Botoes = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0rem 2rem',

  '@sm': {
    padding: 0
  },

  span: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '3rem',
    padding: '0rem .5rem',
    fontWeight: 100
  },

  button: {
    padding: '.7rem .5rem 0rem .5rem',
    margin: '.5rem .5rem',
    fontFamily: 'Special Elite',
    height: '3rem',
    background: 'none',
    display: 'flex',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    gap: '.5rem',
    transition: '.3s',
    color: '#fff',
    border: '1px solid transparent',
    fontSize: '2rem',
    borderRadius: '7px',
    fontWeight: 100,
  },

  'button:hover': {
    border: '1px solid white'
  },
})  

export const InputDiv = styled('div', {
  width: '33%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Esquerda = styled('div', {
  width: '33%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',

  '@xlg': {
    'button:first-child': {
      display: 'none'
    },
  },

  '@md': {
    '.mid': {
      display: 'none'
    }
  },

  svg: {
    marginLeft: '-.4rem'
  }
})

export const Direita = styled('div', {
  width: '33%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  '@xlg': {
    width: '33%',
    'button:last-child': {
      display: 'none'
    },
  },

  '@md': {
    '.mid': {
      display: 'none'
    }
  },

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
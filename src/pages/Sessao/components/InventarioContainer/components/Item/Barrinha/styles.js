import { styled } from '../../../../../../../stitches.config';

export const Container = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '1rem',
  flexDirection: 'column'
})

export const Botoes = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0rem 2rem',
  fontFamily: 'Special Elite',

  span: {
    color: 'white',
    fontSize: '2rem',
    padding: '.3rem .5rem 0rem .5rem',
    fontWeight: 100
  },

  button: {

    padding: '.3rem .7rem 0rem .7rem',
    margin: '.5rem 0',
    fontFamily: 'Special Elite',
    height: '3rem',
    background: 'none',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.5rem',
    transition: '.3s',
    color: '#fff',
    border: '1px solid transparent',
    fontSize: '1.8rem',
    borderRadius: '7px',
    fontWeight: 100,

  },

  svg: {
    marginTop: '-.4rem'
  },

  'button:hover': {
    border: '1px solid white'
  },
})

export const Esquerda = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '1rem',

  svg: {
    marginLeft: '-.4rem'
  }
})

export const Direita = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '1rem',

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

  width: '95%',
  height: '1.5rem',
  borderRadius: '10px',
  backgroundColor: '#ffffff14',
  display: 'flex',

})

export const Progress = styled('div', {

  height: '1.5rem',
  borderRadius: '10px',
  display: 'flex',
  transition: '0.3s',
  backgroundColor: '#00c164'

})
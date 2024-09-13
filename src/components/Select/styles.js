import { styled } from '../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  overflow: 'hidden',
  border: "2px solid $white90",
  borderRadius: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  background: 'transparent',
  padding: '0 1rem',
  height: '43px'

})

export const InputB = styled('select', {
  width: '87%',
  fontSize: "1.6rem",
  padding: ".5rem",
  background: "transparent",
  border: 'none',
  outline: 'none',
  color: '$white',

  option: {
    background: 'rgb(20,20,20)',
    color: '$white',
  }
})

export const LabelContainer = styled('label', {

  width: 'fit-content',
  whiteSpace: 'nowrap',
  fontSize: '2.4rem',
  fontWeight: 100,
  backgroundColor: 'rgb(20, 20, 20)',
  fontFamily: 'Cormorant Garamond',
  color: '$white90',

})
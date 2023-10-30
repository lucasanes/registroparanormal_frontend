import { styled } from '../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',

})

export const InputB = styled('textarea', {
  width: '100%',
  fontSize: "1.6rem",
  padding: "1rem",
  background: "transparent",
  borderRadius: "0.7rem",
  border: 'solid 2px #ffffff90',
  outline: 'none',
  color: '#fff',
  caretColor: 'white',
  fontFamily: 'Arial',
  resize: 'vertical',
  minHeight: '10rem',
  maxHeight: '30rem',
})

export const LabelContainer = styled('label', {

  position: 'absolute',
  width: 'fit-content',
  whiteSpace: 'nowrap',
  top: -14,
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1,
  fontSize: '2.2rem',
  fontWeight: 100,
  fontFamily: 'arial',
  backgroundColor: 'rgb(20, 20, 20)',
  fontFamily: 'Cormorant Garamond',
  color: '#ffffff90',
  transition: '0.3s',
  padding: '0px 10px',
})
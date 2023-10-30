import { styled } from '../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  position: 'relative',
  flexDirection: 'column',
  gap: '1rem',

})

export const Img = styled('div', {

  height: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '1rem',
  gap: '1rem',

  span: {
    color: '#fff',
    position: 'relative',
    fontSize: '1.8rem',
    fontFamily: 'El Messiri',
    paddingTop: '.2rem'
  },

  img: {
    width: '30px',
    height: '30px',
    objectFit: 'cover',
  }
});

export const Button = styled('button', {

  border: 'none',
  background: 'none',
  position: 'absolute',
  padding: '1rem',
  right: 0,
  bottom: 2,
  zIndex: 1

});

export const ContainerInput = styled('div', {
  width: '100%',
  overflow: 'hidden',
  border: "2px solid #ffffff90",
  borderRadius: '1rem',
  display: 'block',
  background: 'transparent',
  zIndex: 0,

  variants: {
    dadoErro: {
      true: {
        border: 'solid 0.2rem #f83c3c'
      }
    }
  }
})

export const InputB = styled('input', {
  width: '100%',
  height: 'auto',
  wordWrap: 'break-all',
  fontSize: "1.8rem",
  height: '43px',
  padding: "1rem",
  background: "transparent",
  borderRadius: "0.7rem",
  border: 'none',
  outline: 'solid 0.2rem white',
  color: 'transparent',
  caretColor: 'white',
})

export const LabelContainer = styled('label', {

  maxWidth: '80%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  position: 'absolute',
  width: 'fit-content',
  whiteSpace: 'nowrap',
  bottom: '21%',
  left: 15,
  zIndex: 0,
  fontSize: '2.4rem',
  fontWeight: 100,
  fontFamily: 'arial',
  backgroundColor: 'rgb(20, 20, 20)',
  fontFamily: 'Cormorant Garamond',
  color: '#ffffff90',
  transition: '0.2s',

  variants: {
    img: {
      true: {
        bottom: '56%'
      }
    },
    hover: {
      true: {
        fontSize: '2rem',
        transform: 'translateY(-2.7rem)',
        padding: '0px 10px',
        zIndex: 1
      },
    },
  },

})
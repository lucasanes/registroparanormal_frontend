import { styled } from '../../../../../stitches.config';

export const Container = styled('div', {

    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: '4rem',

})

export const InputB = styled('textarea', {

    width: '100%',
    minHeight: '10rem',
    maxHeight: '50rem',
    resize: 'vertical',
    marginTop: "0px",
    fontSize: "2rem",
    fontWeight: 100,
    fontFamily: 'arial',
    padding: "1.5rem",
    background: "none",
    borderRadius: "0.7rem",
    border: 'none',
    outline: 'solid 0.2rem white',
    color: 'white',

})

export const LabelContainer = styled('label', {

    position: 'absolute',
    width: 'fit-content',
    top: '-1.9rem',
    textAlign: 'center',
    zIndex: '1',
    fontFamily: 'Cormorant Garamond',
    fontSize: '2.5rem',
    backgroundColor: 'rgb(27, 27, 27)',
    color: 'rgb(208, 147, 226)',
    transition: '.3s',
    padding: '0px 1rem',

    variants: {
        active: {
            true: {
                fontSize: '2.3rem',
                transform: 'translateY(-0.6rem)',
                padding: '0px 1.3rem',
            }
        }
    },

})
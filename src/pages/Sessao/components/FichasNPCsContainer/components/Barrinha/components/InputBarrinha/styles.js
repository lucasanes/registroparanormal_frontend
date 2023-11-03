import { styled } from '../../../../../../../../stitches.config';

export const Container = styled('div', {

    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',

    span: {
        color: 'red',
        position: 'absolute',
        fontSize: '1.8rem',
        right: '1.5rem',
        top: '1.8rem',
        fontFamily: 'emoji',
    }

})


export const InputB = styled('input', {
    width: '100%',
    minWidth: '3.5rem',
    height: '1rem',
    wordWrap: 'break-word',
    marginTop: "0px",
    fontSize: "1.8rem",
    padding: "1.5rem .5rem",
    background: "transparent",
    fontFamily: 'Special Elite',
    borderRadius: "0.7rem",
    border: 'none',
    outline: 'none',
    color: 'transparent',
    caretColor: 'white',

    '&:focus': {
        outline: 'solid 1px white'
    },

    variants: {
        right: {
            true: {
                textAlign: 'right'
            }
        }
    }
})
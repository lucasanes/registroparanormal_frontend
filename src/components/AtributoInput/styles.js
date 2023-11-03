import { styled } from '../../stitches.config';

export const Container = styled('div', {

    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',

    '@sm': {
        scale: '0.7'
    }

})

export const Top = styled('div', {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    top: '10%'
})

export const Mid = styled('div', {
    position: 'absolute',
    top: '31%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '21rem',
})

export const Bot = styled('div', {
    position: 'absolute',
    marginRight: '0.2rem',
    top: '68.5%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '13.8rem',
})

export const Img = styled('img', {
    width: '40rem',
})
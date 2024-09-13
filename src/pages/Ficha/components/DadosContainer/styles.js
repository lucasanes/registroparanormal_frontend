import { styled } from '../../../../stitches.config';

export const Container = styled("div", {
  border: "2px solid $white75",
  marginBottom: "2rem",
  borderRadius: "0.5rem",
  width: "100%",

  hr: {
    borderColor: '$white75'
  }
});

export const HeaderContainer = styled("div", {
  padding: "1rem 1.5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",

  h1: {
    textAlign: "center",
    color: "white",
    fontSize: "2rem",
    fontFamily: 'Special Elite',
    letterSpacing: '.1rem',
    paddingTop: '.3rem'
  },
});

export const Body = styled('div', {

  padding: "1rem",
  display: "flex",
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '3rem',

  variants: {
    nulo: {
      true: {
        padding: 0
      }
    }
  }

})

export const Button = styled('button', {

  width: '26px',
  height: '26px',
  background: 'none',
  border: '1px solid transparent',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '5px',
  transition: '.3s',

  '&:hover': {
    border: '1px solid #07eed7'
  }


});
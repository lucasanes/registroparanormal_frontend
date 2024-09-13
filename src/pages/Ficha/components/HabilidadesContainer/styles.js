import { styled } from '../../../../stitches.config';

export const Container = styled("div", {
  border: "2px solid $white75",
  marginBottom: "2rem",
  borderRadius: "0.5rem",
  width: "100%",
  height: 'max-content',

  hr: {
    borderColor: '$white75'
  }
});

export const HeaderContainer = styled("div", {
  minHeight: '43px',
  padding: '1rem 4.9rem',
  position: 'relative',
  display: "flex",
  justifyContent: "center",
  gap: '1rem',
  alignItems: "center",
  flexWrap: 'wrap',

  '.add': {
    position: "absolute",
    right: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const Button = styled('button', {

  background: 'none',
  border: '2px solid transparent',
  padding: '.7rem 1rem .4rem 1rem',
  fontWeight: 700,
  textAlign: "center",
  color: "$white",
  fontSize: "2rem",
  fontFamily: 'Special Elite',
  letterSpacing: '.1rem',
  transition: '.3s',
  borderRadius: '5px',

  '&:hover': {
    border: '2px solid $white'
  },

  variants: {
    active: {
      true: {
        cursor: 'default',
        background: '$white25',

        '&:hover': {
          border: '2px solid $white'
        }
      },
    }
  }

})

export const BodyContainer = styled("div", {

  display: 'flex',
  alignItems: 'left',
  maxHeight: '42rem',
  overflowY: 'auto',
  flexDirection: 'column',
  padding: '3rem',
  gap: '3rem',

  variants: {
    nulo: {
      true: {
        padding: 0
      }
    }
  }

});
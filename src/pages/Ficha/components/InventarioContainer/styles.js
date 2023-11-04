import { styled } from '../../../../stitches.config';

export const Container = styled("div", {
  border: "2px solid #ffffff75",
  borderRadius: "0.5rem",
  width: "100%",
  marginBottom: '2rem',

  hr: {
    borderColor: '#ffffff75'
  }
});

export const HeaderContainer = styled("div", {
  padding: "1rem 0",
  display: "flex",
  justifyContent: "center",
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

  button: {
    background: "none",
    border: "none",
    color: "Green",
    position: "absolute",
    right: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  svg: {
    transition: "0.3s",
  },

  "button:hover": {
    svg: {
      filter: "brightness(2)",
    },
  },
});

export const Main = styled('div', {

  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',

  variants: {
    nulo: {
      true: {
        height: 0
      }
    }
  }

});

export const BodyContainer = styled("div", {
  padding: "2rem",
  display: "grid",
  gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
  gridColumnGap: "2rem",
  gridRowGap: "3rem",

  '@md': {
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  },

  '@sm': {
    gridTemplateColumns: '1fr'
  }

});

export const Footer = styled('div', {

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  padding: '2rem',
  color: 'white'

})

export const Row = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  gap: '12rem',

  '@sm': {
    flexDirection: 'column',
    gap: '3rem'
  }
})

export const Column = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '1rem',

  span: {
    fontWeight: 100,
    letterSpacing: '.1rem',
    fontFamily: 'Special Elite',
    fontSize: '2.4rem'
  },

  select: {
    width: '15rem',
    padding: '.5rem',
    background: 'none',
    borderRadius: '5px',
    color: 'white',
    fontWeight: 100,
    textTransform: 'capitalize'
  },

})

export const Option = styled('option', {
  color: 'White',
  background: 'rgb(20,20,20)',
  textTransform: 'capitalize'
})

export const Button = styled('button', {
  width: '10rem',
  padding: '.2rem 0',
  transition: '.3s',
  background: 'none',
  borderRadius: '5px',
  color: '#ffffff',
  fontSize: '2.2rem',
  border: '2px solid #ffffff75',
  fontFamily: 'Crimson Text',
  marginTop: '1rem',

  '@sm': {
    marginTop: '2rem'
  },

  '&:hover': {
    background: '#ffffff25',
  }
})
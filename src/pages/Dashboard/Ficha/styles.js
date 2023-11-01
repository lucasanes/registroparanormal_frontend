import { Link } from "react-router-dom";
import { styled } from "../../../stitches.config";

export const Container = styled('div', {
  width: '100%',
  minWidth: '3rem',
  minHeight: '26rem',
  background: 'rgb(27,27,27, 0.8)',
  border: '2px solid',
  borderColor: '#4040ff',
  padding: '1rem',
  borderRadius: '1rem',
  fontFamily: 'El Messiri',

  hr: {
    margin: '0rem -1rem',
    borderColor: '#ffffff75'
  },
})

export const Header = styled('div', {

  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '0.6rem',
  marginTop: '-0.2rem',

  h2: {
    color: "#4040ff",
    fontSize: '2rem',
    textAlign: 'left',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    marginRight: '2rem',
    textTransform: 'capitalize'
  },
})

export const Botoes = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.5rem',

})

export const LinkButton = styled(Link, {

  background: 'none',
  textDecoration: 'none',
  padding: '.3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '0.3s',
  border: 'solid 1px transparent',
  borderRadius: '.5rem',

  variants: {
    color: {
      aqua: {
        '&:hover': {
          border: 'solid 1px aqua',
        },
      },

      teal: {
        '&:hover': {
          border: 'solid 1px #00ffd0',
        },
      }
    }
  }

})

export const Button = styled('button', {

  background: 'none',
  textDecoration: 'none',
  padding: '.3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 1px transparent',
  transition: '0.3s',
  borderRadius: '.5rem',

  variants: {
    color: {
      green: {
        '&:hover': {
          border: 'solid 1px #13ff72',
        },
      },
      crimson: {
        '&:hover': {
          border: 'solid 1px crimson',
        },
      },
      red: {
        '&:hover': {
          border: 'solid 1px red',
        },
      },
      teal: {
        '&:hover': {
          border: 'solid 1px #00ffd0',
        },
      }
    }
  }

})

export const Desc = styled('div', {
  display: 'flex',
  justifyContent: 'left',
  marginTop: '1rem',
  marginBottom: '1rem',
  alignItems: 'center',

  '@md': {
    flexDirection: 'column',
    gap: '2rem'
  },

  h2: {
    width: 'max-content',
    height: 'max-content',
    color: 'white',
    fontSize: '1.6rem',
    textAlign: 'left',
    fontWeight: '100',
    wordBreak: 'break-word'
  },

  img: {
    border: '1px solid white',
    borderRadius: '70rem',
    marginLeft: '1rem',
    width: '125px',
    height: '125px'
  },
})

export const Grade = styled('div', {

  padding: '0 1rem 0 2rem',
  display: "grid",
  gap: '1rem',
  width: '100%',
  gridTemplateColumns: '1fr 1fr',
  alignContent: 'center',
  justifyItems: 'center',

  '@md': {
    paddingBottom: 0
  }

})

export const ParteGrade = styled('div', {

  width: '100%',
  minWidth: '1rem',
  height: 'max-contet',
  display: 'flex',
  alignItems: 'left',
  paddingLeft: '1rem',
  justifyContent: 'center',
  flexDirection: 'column',
  color: 'white',
  border: '1px solid #ffffff90',

  span: {
    fontSize: '1.8rem',
    fontWeight: 700,
    overflow: 'hidden',
    textOverflow: 'clip',
    width: '100%'
  },

  div: {
    width: '100%',
    fontSize: '1.6rem',
    paddingLeft: '1rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingRight: '1rem',
  }

})

export const Footer = styled('div', {
  height: '4rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '1rem',

  a: {
    width: '100%',
    textAlign: 'center',
    textDecoration: 'none',
    fontFamily: 'Crimson Text',
    color: '#4040ff',
    fontSize: '2rem',
    background: 'none',
    border: '2px solid #4040ff',
    padding: '.5rem',
    borderRadius: '1rem',
    transition: 'ease 0.3s'
  },
  'a:hover': {
    backgroundColor: 'rgb(47,47,47,0.5)'
  }
})
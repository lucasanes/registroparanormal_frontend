import BackgroundImage from "../../assets/img/bg.webp";
import { styled } from '../../stitches.config';

export const Container = styled('div', {
  width: "100%",
  height: 'calc(100% - 72px)',
  position: 'fixed',
  display: "flex",
  backgroundImage: `url(${BackgroundImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: '2500px',
  overflowX: "hidden",
  overflowY: 'auto',
  flexDirection: 'column',
  gap: '3rem',
  padding: '2rem',
});

export const ContainerDiv = styled('div', {

  width: '100%',
  border: '2px solid $white',
  padding: '2rem',
  borderRadius: '1rem',

  h1: {
    color: '$white',
    fontFamily: 'Special Elite',
    fontSize: '2.6rem',
    width: '100%',
    textAlign: 'center',
  },

  hr: {
    margin: '1.5rem -2rem',
    color: "$white"
  },

});

export const DivFlex = styled('div', {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridColumnGap: "3rem",
  gridRowGap: "3rem",

  "@lg": {
    gridTemplateColumns: "1fr",
  },
});
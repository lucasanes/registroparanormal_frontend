import { keyframes, styled } from "../../stitches.config";

export const Container = styled("div", {
  width: "100%",
  height: 'calc(100% - 72px)',
  background: "#141414",
  display: 'flex',
  flexDirection: 'column',
  overflowX: 'hidden',
  position: 'fixed'
});

export const Body = styled("div", {
  overflowY: "auto",
  width: '100%',
  height: '100%',
  padding: "3rem 2rem 2rem 2rem",
  overflowX: 'hidden',
});

export const DoubleParteContainer = styled("div", {
  display: "grid",
  gridColumnGap: "2rem",
  gridTemplateColumns: '1fr 1fr',
  width: '100%',

  '@lg': {
    gridTemplateColumns: '1fr'
  }
});

export const DoubleParteColumnContainer = styled("div", {
  display: "flex",
  gridColumnGap: "2rem",
  flexDirection: 'column',
  width: '100%',

  '@lg': {
    gridTemplateRows: '1fr'
  }
});


export const ParteImgModal = styled('div', {
  height: '95vh',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',

  img: {
    objectFit: 'contain'
  }
})

const scaleUpImgModal = keyframes({
  '0%': {
    width: '20%',
    opacity: 0
  },

  '100%': {
    width: '100%',
    opacity: 1
  },
});

export const ImgModal = styled('img', {

  animation: `${scaleUpImgModal} 300ms`,
  width: '100%'

})
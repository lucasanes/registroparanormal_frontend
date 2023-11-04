import { Dialog } from "@headlessui/react";
import { keyframes, styled } from "../../../stitches.config";

export const Container = styled(Dialog, {
  display: 'flex',
  height: '100vh'
});

export const ContentContainer = styled("div", {

  position: "fixed",
  width: '100%',
  height: '100%',
  inset: 0,
  display: "flex",
  justifyContent: 'center',
  backgroundColor: "#00000095",
  overflowY: 'auto',
  overflowX: 'hidden',
  zIndex: 2,
  padding: '3rem',

  variants: {
    padding: {
      true: {
        '@md': {
          overflowY: 'hidden',
          padding: '3rem' 
        }
      },
      false: {
        '@md': {
          overflowY: 'hidden',
          padding: 0
        }
      },
    }
  }

});

const animation = keyframes({
  '0%': {
    opacity: 0,
    position: 'relative',
    top: -300
  },
  '100%': {
    opacity: 1,
    position: 'relative',
    top: 0
  }
})

const animation2 = keyframes({
  '0%': {
    opacity: 1,
    position: 'relative',
    top: 0
  },
  '100%': {
    opacity: 0,
    position: 'relative',
    top: -300
  }
})


export const Content = styled(Dialog.Panel, {

  height: 'fit-content',
  display: 'flex',
  margin: 'auto',
  animation: `${animation} .3s`,

  variants: {
    animation: {
      false: {
        animation: `${animation2} .25s`,
        animationFillMode: 'forwards'
      }
    }
  }

});
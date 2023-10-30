import { createStitches } from "@stitches/react";

export const { styled, css, keyframes } = createStitches({

    theme: {
        colors: {
            
        }
    },

    media: {
        sm: "(max-width: 500px)",
        md: "(max-width: 680px)",
        lg: "(max-width: 980px)",
        xlg: "(max-width: 1300px)",
    }
});

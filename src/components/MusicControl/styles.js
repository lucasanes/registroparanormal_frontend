import { Button, Slider } from "@nextui-org/react";
import { styled } from "../../stitches.config";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  marginBottom: "4rem",
  gap: "1rem",

  button: {
    padding: 0,
    margin: 0,
    width: "5rem",
    height: "5rem",
  }
});

export const Top = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "1rem",
});

export const Bottom = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "1rem",
});

export const Play = styled(Button, {
  backgroundColor: "transparent",
  color: "$secondary",
});

export const Time = styled("div", {
  width: "30rem",
  display: "flex",
  marginLeft: "1rem",
  justifyContent: "flex-start",
  gap: "1rem",
});

export const TimeSlider = styled(Slider, {
  width: "50%",
  height: "3rem",
  backgroundColor: "transparent",
  color: "$secondary",
  marginTop: "0.4rem",
});

export const TimeText = styled("span", {
  color: "$secondary",
});

export const Volume = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
});

export const VolumeSlider = styled(Slider, {
  width: "10rem",
  backgroundColor: "transparent",
  color: "$secondary",
});

export const Mute = styled(Button, {
  backgroundColor: "transparent",
  color: "$secondary",
});

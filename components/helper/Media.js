import { generateMedia } from "styled-media-query";
import styled, { keyframes } from 'styled-components';

export const customMedia = generateMedia({
  desktop: "78em",
  tablet: "60em",
  mobile: "46em"
});

export const fadeIn = keyframes`
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
`;

import styled, { keyframes } from 'styled-components';

export const moveInCircle = keyframes`
  0% {
    transform: translateX(0) translateY(-200px);
  }
  25% {
    transform: translateX(120px) translateY(0);
  }
  50% {
    transform: translateX(0) translateY(40px);
  }
  75% {
    transform: translateX(-100px) translateY(-40px);
  }
  100% {
    transform: translateX(0) translateY(-200px);
  }
`;
export const Rotate = keyframes`
   0% {
     transform:rotate(-55deg);
   }
   50% {
     transform:  rotate(55deg);
   }
   100% {
     transform:  rotate(-55deg);
   }
`;
export const Floating = keyframes`
0% {
    transform: translate(0%,50%) rotate(-55deg);
  }
  50% {
    transform: translate(100%, 100%) rotate(55deg);
  }
  100% {
    transform: translate(0%, 50%) rotate(-55deg);
  }
`;
export const Floating01 = keyframes`
0% {

    transform: translate(0%,50%) rotate(-55deg);
  }
  25%{
    transform: translate(25%, 75%) rotate(55deg)
  }
  50% {
    transform: translate(325%, 225%) rotate(55deg);
  }
   75% {
    transform: translate(350%, 250%) rotate(55deg);
  }
  100% {
    transform: translate(0%, 50%) rotate(-55deg);
  }
`;
export const Floating02 = keyframes`
0% {

    transform: translate(0%,50%) rotate(-55deg);
  }
  25%{
    transform: translate(25%, 75%) rotate(55deg)
  }
  50% {
    transform: translate(325%, 225%) rotate(55deg);
  }
   75% {
    transform: translate(350%, 250%) rotate(55deg);
  }
  100% {
    transform: translate(0%, 50%) rotate(-55deg);
  }
`;

export const BgScrolling = keyframes`
  0% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 100%;
  }

`;

export const TextEffect = keyframes`

0% {
    letter-spacing: 1em;
    transform: translateZ(400px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
`;

import { keyframes } from "styled-components";
import { WhatTheHell } from "../style/Palette";

export const RotateBoxCover = keyframes`
    0% { 
        transform: rotateX(359deg)
    } 30% {
        transform: rotateX(359deg)
    } 100% {
        transform: rotateX(1deg)
    }
`;

export const ContentLook = keyframes`
    0% {
        transform: translateX(-50vw);
        box-shadow: 0px 0px 0px ${WhatTheHell[3]};
    } 50% {
        transform: translateX(0vw);
        box-shadow: 0px 0px 0px ${WhatTheHell[3]};
    } 100% {
        transform: translateX(0vw) translateY(-4px);
        box-shadow: 5px 5px 5px ${WhatTheHell[3]};
    }
`;
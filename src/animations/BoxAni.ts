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

export const BoxFadeIn = keyframes`
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
`;

export const FadeInMove = keyframes`
    from {
        opacity: 0;
        transform: translateX(100px);
    } to {
        opacity: 1;
        transform: translateX(0);
    }
`;

export const FadeInMoveBottom = keyframes`
    from {
        opacity: 0;
        transform: translateX(50px) translateY(50px);
    } to {
        opacity: 1;
        transform: translateX(0) translateY(0);
    }
`;
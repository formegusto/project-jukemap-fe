import { keyframes } from "styled-components";

export const RotateBoxCover = keyframes`
    from { 
        transform: rotateX(360deg)
    } to {
        transform: rotateX(1deg)
    }
`;

export const ContentLook = keyframes`
    from {
        transform: translateX(-1000vw);
    } to {
        transform: translateX(0vw);
    }
`;
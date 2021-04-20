import { keyframes } from "styled-components";

export const LeftLineAni = keyframes`
    from {
        transform: translateY(100%);
    } to {
        transform: translateY(0);
    }
`;

export const RightLineAni = keyframes`
    from {
        transform: translateY(-100%);
    } to {
        transform: translateY(0);
    }
`;
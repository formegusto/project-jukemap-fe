import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { FullScreen } from '../style/Screen';
import { WhatTheHell } from '../style/Palette';
import { HiMelody } from '../style/Font';
import { RotateBoxCover } from '../animations/BoxAni';

function IntroComponent() {
    useEffect(() => {
        const $cover = document.querySelector(`${BoxCover}`);
        
        $cover!.addEventListener('animationend', () => {
            const $box = document.querySelectorAll(`${Box}`);
            
            if($box.length !== 0){
                ($box[0] as HTMLDivElement).style.marginRight = ".5rem";
                ($box[1] as HTMLDivElement).style.marginRight = ".5rem";
            }
        })
    }, []);

    return (
        <FullScreen>
            <IntroBlock>
                <BoxBlock>
                    <Box>
                        <BoxCover/>
                        <TitleBox>
                            주
                        </TitleBox>
                    </Box>
                    <Box>
                        <BoxCover/>
                        <TitleBox>
                            크
                        </TitleBox>
                    </Box>
                    <Box>
                        <BoxCover/>
                        <TitleBox>
                            맵
                        </TitleBox>
                    </Box>
                </BoxBlock>
            </IntroBlock>
        </FullScreen>
    );
}

const IntroBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    background-color: ${WhatTheHell[0]};

    perspective: 500px;

    ${HiMelody}
`;

const BoxBlock = styled.div`
    display: flex;

    transform-style: preserve-3d;
`;

const Box = styled.div`
    position: relative;

    width: 100px;
    height: 100px;
    & > div {
        position: absolute;

        top: 0;
        left: 0;

        width: 100%;
        height: 100%;

        box-sizing: border-box;
    }
    transition: .7s;

    transform-style: preserve-3d;
`;

const BoxCover = styled.div`
    background-color: ${WhatTheHell[0]};

    z-index: 2;
    border-radius: 10px;

    transform-origin: 50% 100%;

    border-style: solid;
    border-color: ${WhatTheHell[3]};

    ${css`
        animation: ${RotateBoxCover} 2s forwards;
    `}
`;

const TitleBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 1;
    font-size: 3rem;
`;

export default IntroComponent;
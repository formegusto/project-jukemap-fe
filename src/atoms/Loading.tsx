import React from 'react';
import styled from 'styled-components';
import { HiMelody } from '../style/Font';
import { WhatTheHell } from '../style/Palette';

function LoadingScreen() {
    return (
        <Screen>
            주크맵이 준비되는 중 입니다!
        </Screen>
    );
}

const Screen = styled.div`
    position: fixed;

    width: 100%;
    height: 100%;
    
    background-color: ${WhatTheHell[0]};

    display: flex;
    justify-content: center;
    align-items: center;
    
    ${HiMelody}

    font-size: 36px;

    @media ${({theme}) => theme.device.mobile} {
        font-size: 20px;
    }
`

export default LoadingScreen;
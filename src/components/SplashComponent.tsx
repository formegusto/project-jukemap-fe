import React from 'react';
import styled from 'styled-components';
import { HiMelody } from '../style/Font';
import { Hype } from '../style/Palette';

function SplashComponent() {
    return (
        <SplashBlock>
            <ContentBlock>
                <LogoBlock>
                    <LogoItem>
                        주
                    </LogoItem>
                    <LogoItem>
                        크
                    </LogoItem>
                    <LogoItem>
                        맵
                    </LogoItem>
                </LogoBlock>
                <CopyRight>
                    Copyright &copy; 2021 by 경혜 태헌
                </CopyRight>
            </ContentBlock>
        </SplashBlock>
    );
}

const SplashBlock = styled.div`
    position: fixed;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    ${HiMelody};
`;

const ContentBlock = styled.div`
    display: flex;

    flex-direction: column;
    
`;

const LogoBlock = styled.div`
    display: flex;

    & > div:not(:last-child) {
        margin-right: 21px;
    }
`;

const LogoItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 100px;

    border: 2px solid ${Hype[3]};
    border-radius: .5rem;

    font-size: 36px;
`;

const CopyRight = styled.h1`
    font-size: 1rem;
    line-height: 27px;
    
    align-self: flex-end;
`;

export default SplashComponent;
import React from 'react';
import styled from 'styled-components';
import { HiMelody } from '../style/Font';
import { WhatTheHell } from '../style/Palette';

function LogoVertical(props: React.HTMLAttributes<HTMLDivElement>){
    return (
        <StyledDiv {...props}>
            <TitleBlock>
                <LetterBlock>
                    <Letter>
                        주
                    </Letter>
                </LetterBlock>
                <LetterBlock>
                    <Letter>
                        크
                    </Letter>
                </LetterBlock>
                <LetterBlock>
                    <Letter>
                        맵
                    </Letter>
                </LetterBlock>
            </TitleBlock>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    ${HiMelody};
    font-size: 48px;
    box-shadow: 4px 4px 4px rgba(0,0,0,.25);
`;

const TitleBlock = styled.div`
    box-sizing: border-box;
    border: 2px solid black;
    border-bottom: none;

    & > div {
        border-bottom: 2px solid black;
    }

    background-color: ${WhatTheHell[0]};
`;

const LetterBlock = styled.div`
    width: 100px;
    height: 100px;

    box-sizing: border-box;
    padding: 0 .5rem;
`;

const Letter = styled.h1`
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    border-left: 2px solid black;
    border-right: 2px solid black;
`;

export default LogoVertical;
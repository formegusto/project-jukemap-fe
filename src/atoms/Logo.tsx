import React from 'react';
import styled from 'styled-components';
import { HiMelody } from '../style/Font';

interface Props extends React.HTMLAttributes<HTMLDivElement>{}

function Logo(props: Props) {
    return (
        <StyledDiv>
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
            <CopyRightBlock>
                Copyright &copy; 2021 by 경혜 태헌
            </CopyRightBlock>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    max-width: 300px;

    display: flex;
    flex-direction: column;

    ${HiMelody};

    box-shadow: 4px 4px 4px rgba(0,0,0,.25);
`;

const CopyRightBlock = styled.div`
    border: 2px solid black;
    border-top: none;

    padding: .25rem .25rem;
    text-align: end;
`;

const TitleBlock = styled.div`
    display: flex;

    border: 2px solid black;
    box-sizing: border-box;

    font-size: 48px;

    & > div:not(:last-child) {
        border-right: 2px solid black;
    }
`;

const LetterBlock = styled.div`
    width: 100px;
    height: 100px;

    padding: .5rem 0;
    box-sizing: border-box;
`;

const Letter = styled.h1`
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    border-top: 2px solid black;
    border-bottom: 2px solid black;
`;

export default Logo;
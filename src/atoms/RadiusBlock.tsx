import React from 'react';
import styled from 'styled-components';
import { Montserrat } from '../style/Font';
import { WhatTheHell } from '../style/Palette';

interface Props extends React.HTMLProps<HTMLDivElement> {}

function RadiusBlock(props: Props) {
    return (
        <StyledDiv>
            {props.children}
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.5rem;
    line-height: 29px;

    width: 48px;
    height: 48px;

    background-color: ${WhatTheHell[4]};

    border-radius: 100%;
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));

    cursor: pointer;

    ${Montserrat};
    font-weight: 700;
`;

export default RadiusBlock;
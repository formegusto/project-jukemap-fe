import React  from 'react';
import styled from 'styled-components';
import { HiMelody } from '../style/Font';
import { Hype, WhatTheHell } from '../style/Palette';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {}

function Button(props: Props) {
    return <StyledButton
        {...props}
    >
        {props.children}
    </StyledButton>
}

const StyledButton = styled.button`
    width: 250px;
    font-size: 24px;
    line-height: 30px;

    background-color: ${WhatTheHell[3]};
    color: ${Hype[2]};
    border: none;
    border-radius: .5rem;
    padding: .5rem 0;
    box-sizing: border-box;
    cursor: pointer;

    ${HiMelody};
`;

export default Button;
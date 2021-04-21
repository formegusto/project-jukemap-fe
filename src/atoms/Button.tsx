import React  from 'react';
import styled, { css } from 'styled-components';
import { HiMelody } from '../style/Font';
import { Hype, WhatTheHell } from '../style/Palette';

interface Props extends React.HTMLProps<HTMLButtonElement> {
    custom?: StyleProps;
}

function Button(props: Props) {
    return <StyledButton
        {...(props as React.HTMLAttributes<HTMLButtonElement>)}
    >
        {props.children}
    </StyledButton>
}

type StyleProps = {
    width?: string;
    backgroundColor?: string;
    isFlex?: boolean;
}

const StyledButton = styled.button<{custom?: StyleProps}>`
    ${props => props.custom?.isFlex && 
        css`
            display: flex;
            justify-content: center;
            align-items: center;   
            height: 44px;
        `
    }

    width: ${props => props.custom?.width ?
        props.custom.width
        :
        "250px"};
    font-size: 24px;
    line-height: 30px;

    background-color: ${
        props => props.custom?.backgroundColor ?
        props.custom.backgroundColor
        :
        WhatTheHell[3]};
    color: ${Hype[2]};
    border: none;
    border-radius: .5rem;
    padding: .5rem 0;
    box-sizing: border-box;
    cursor: pointer;

    ${HiMelody};
`;

export default Button;
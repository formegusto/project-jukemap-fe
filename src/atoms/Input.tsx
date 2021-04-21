import React from 'react';
import styled, { css } from 'styled-components';
import { HiMelody } from '../style/Font';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    labelText?: string;
    blockClassName?: string;
    custom?: StyleProps;
}

function Input(props: Props) {
    return (
        <InputBlock
            className={props.blockClassName}
        >
            {
                props.labelText &&
                <StyledLabel>
                    {props.labelText}
                </StyledLabel>
            }
            <StyledInput
                {...props}
            />
        </InputBlock>
    );
}

type StyleProps = {
    width?: string;
    radius?: string;
    backgroundColor?: string;
    fontColor?: string;
}

const InputBlock = styled.div` 
    ${HiMelody}
`;

const StyledLabel = styled.label`
    display: block;

    font-size: 18px;

    padding: 0 12px ;
    box-sizing: border-box;
    margin: 0 0 7px;
`;

const StyledInput = styled.input<{custom?: StyleProps}>`
    width: ${props => props.custom?.width ?
        props.custom.width : 
        "330px"};
    border-radius: ${props => props.custom?.radius ?
        props.custom.radius :
        ".5rem"};
    border: none;

    height: 48px;

    ${HiMelody}
    font-size: 1.5rem;

    padding: .5rem;
    box-sizing: border-box;

    ${props => props.custom?.fontColor && 
        css`
            color: ${props.custom.fontColor};
        `
    }

    ${props => props.custom?.backgroundColor &&
        css`
            background-color: ${props.custom.backgroundColor};
        `
    }
`;

export default Input;
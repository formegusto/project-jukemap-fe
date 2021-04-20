import React from 'react';
import styled from 'styled-components';
import { HiMelody } from '../style/Font';

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    labelText?: string;
    blockClassName?: string;
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

const StyledInput = styled.input`
    width: 330px;
    border-radius: .5rem;
    border: none;

    height: 48px;

    ${HiMelody}
    font-size: 1.5rem;

    padding: .5rem;
    box-sizing: border-box;
`;

export default Input;
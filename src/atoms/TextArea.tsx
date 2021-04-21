import React from 'react';
import styled from 'styled-components';
import { HiMelody } from '../style/Font';

interface Props extends React.HTMLAttributes<HTMLTextAreaElement> {
    blockClassName?: string;
}

function TextArea(props: Props) {
    return (
        <StyledDiv
            className={props.blockClassName}
        >
            <StyledArea
                {...props}
            />
        </StyledDiv>
    );
}

const StyledDiv = styled.div``;

const StyledArea = styled.textarea`
    width: 100%;
    height: 400px;


    border: none;

    ${HiMelody}
    font-size: 1.5rem;

    padding: .5rem;
    box-sizing: border-box;

    color: rgb(255,255,255);
    background-color: rgba(204, 204, 204, 0.1);
`;

export default TextArea;
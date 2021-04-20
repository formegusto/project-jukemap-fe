import React from 'react';
import styled from 'styled-components';
import { BiImageAdd } from 'react-icons/bi';

interface Props extends React.HTMLAttributes<HTMLInputElement>{}

function ImageFileInput(props: Props) {
    return (
        <StyledDiv>
            <FileLabel 
                htmlFor={props.id}
            >
                <BiImageAdd/>
            </FileLabel>
            <FileInput
                type="file"
                {...props}
            />
        </StyledDiv>
    )
}

const StyledDiv = styled.div``;

const FileLabel = styled.label`
    font-size: 1.5rem;
    color: rgb(255,255,255);
    
    & > * {
        cursor: pointer;
    }
`;

const FileInput = styled.input`
    width: 0;
    height: 0;
`;

export default ImageFileInput;
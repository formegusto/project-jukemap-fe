import React  from 'react';
import styled from 'styled-components';

interface Props extends React.HTMLProps<HTMLButtonElement> {}

function Button(props: Props) {
    return <StyledButton>
        {props.children}
    </StyledButton>
}

const StyledButton = styled.button`
`;

export default Button;
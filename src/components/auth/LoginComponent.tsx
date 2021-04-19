import React from 'react';
import styled from 'styled-components';
import Logo from '../../atoms/Logo';

function LoginComponent() {
    return (
        <LoginBlock>
            <Logo/>
            <LoginForm>
                
            </LoginForm>
        </LoginBlock>
    );
}

const LoginBlock = styled.div``;

const LoginForm = styled.form``;

export default LoginComponent;
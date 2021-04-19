import React from 'react';
import styled from 'styled-components';
import AuthForm from '../../atoms/AuthForm';

function JoinComponent() {
    return (
        <AuthForm>
            <UserInfoBlock>
                1
            </UserInfoBlock>
            <UserInfoBlock>
                2
            </UserInfoBlock>
            <UserInfoBlock>
                3
            </UserInfoBlock>
            <UserInfoBlock>
                4
            </UserInfoBlock>
        </AuthForm>
    );
}

const UserInfoBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
`;

export default JoinComponent;
import React from 'react';
import styled from 'styled-components';
import AuthForm from '../../atoms/AuthForm';

function JoinComponent() {
    return (
        <AuthForm>
            {[6,7,8,9].map((v) => 
                <UserInfoBlock key={v}>
                    {v}
                </UserInfoBlock>
            )}
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
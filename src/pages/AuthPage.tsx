import React from 'react';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import JoinContainer from '../containers/JoinContainer';

function AuthPage() {
    return (
        <AuthScreen>
            <Switch>
                <Route path="/auth/join" component={JoinContainer}/>
                <Route path="/auth/find/id" />
                <Route path="/auth/find/pw" />
            </Switch>
        </AuthScreen>
    );
}

const AuthScreen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
`;

export default AuthPage;
import React from 'react';
import { Route, Switch } from 'react-router';
import styled from 'styled-components';
import FindIdContainer from '../containers/auth/FindIdContainer';
import FindPwContainer from '../containers/auth/FindPwContainer';
import JoinContainer from '../containers/auth/JoinContainer';
import LoginContainer from '../containers/auth/LoginContainer';

function AuthPage() {
    return (
        <AuthScreen>
            <Switch>
                <Route path="/auth" component={LoginContainer} exact />
                <Route path="/auth/join" component={JoinContainer} exact/>
                <Route path="/auth/find/id" component={FindIdContainer} exact/>
                <Route path="/auth/find/pw" component={FindPwContainer} exact/>
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
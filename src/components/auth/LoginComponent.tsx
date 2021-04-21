import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Logo from '../../atoms/Logo';
import { HiMelody } from '../../style/Font';
import { Hype } from '../../style/Palette';

function LoginComponent() {
    return (
        <LoginBlock>
            <Link to="/">
                <Logo/>
            </Link>
            <LoginForm>
                <Input
                    labelText="아이디"    
                    blockClassName="inputblock"
                />
                <Input
                    labelText="비밀번호"    
                    blockClassName="inputblock"
                />
                <Button
                    className="submitbtn"
                >
                    로그인
                </Button>
                <LinkBlock>
                    <Link to="/auth/find/id" >
                        아이디 찾기
                    </Link>
                    <Link to="/auth/find/pw" >
                        비밀번호 찾기
                    </Link>
                    <Link to="/auth/join" >
                        회원가입
                    </Link>
                </LinkBlock>
            </LoginForm>
        </LoginBlock>
    );
}

const LoginBlock = styled.div`
    display: flex;

    align-items: center;
    flex-direction: column;

    & > a {
        text-decoration: none;
        color: black;
    }
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 1rem 0 0;
    padding: 40px;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.25);

    background-color: ${Hype[2]};
    border-radius: 1rem;

    box-sizing: border-box;

    ${HiMelody};

    & > .inputblock {
        margin: 0 0 1rem;
    }

    & > .submitbtn {
        margin: 18px 0 .5rem;
    }
`;

const LinkBlock = styled.div`
    & > a {
        box-sizing: border-box;
        font-size: 14px;
        text-decoration: none;

        line-height: 18px;
        color: black;
    }

    & > a:not(:first-child) {
        padding: 0 0 0 6px;
        border-left: 1px solid black;
    }

    & > a:not(:last-child) {
        margin: 0 3px 0 0;
    }
`;

export default LoginComponent;
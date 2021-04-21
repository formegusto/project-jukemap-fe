import React from 'react';
import styled, { css } from 'styled-components';
import { HiMelody } from '../../style/Font';
import { Hype, WhatTheHell } from '../../style/Palette';
import iamformegusto from '../../assets/icons/iamformegusto.png';
import { LeftLineAni, RightLineAni } from '../../animations/LineAni';
import { BoxFadeIn, FadeInMove, FadeInMoveBottom } from '../../animations/BoxAni';

type Props = {
    refScreen: React.Ref<HTMLDivElement>;
    refIcon: React.Ref<HTMLDivElement>;
}

function SplashComponent(props: Props) {
    return (
        <SplashBlock
            ref={props.refScreen}
        >
            <ContentBlock>
                <LogoBlock>
                    <LogoItem className="item">
                        주
                    </LogoItem>
                    <LogoItem className="item">
                        크
                    </LogoItem>
                    <LogoItem className="item">
                        맵
                    </LogoItem>
                    <LogoVerticalLine className="line left"/>
                    <LogoVerticalLine className="line right"/>
                </LogoBlock>
                <RightBlock>
                    <IconBlock
                        ref={props.refIcon}
                    >
                        <img src={iamformegusto} alt='logo 넣을 거 없어서 넣었음' />
                    </IconBlock>
                    <CopyRight>
                        Copyright &copy; 2021 by 경혜 태헌
                    </CopyRight>
                </RightBlock>
            </ContentBlock>
        </SplashBlock>
    );
}

const IconBlock = styled.div`
    flex: 1;

    ${css`
        animation: ${FadeInMoveBottom} 1.75s forwards;
    `}

    & > img {
        width: 250px;
        height: 250px;

        @media ${({theme}) => theme.device.mobile} {
            width: 125px;
            height: 125px;
        }
    }
`;
const RightBlock = styled.div`
    margin: 0 0 0 1.5rem;
    display: flex;
    flex: 1;

    flex-direction: column;
`;

const SplashBlock = styled.div`
    position: fixed;

    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: .55s;
    background-color: ${WhatTheHell[0]};

    ${HiMelody};
`;

const ContentBlock = styled.div`
    display: flex;
`;

const LogoBlock = styled.div`
    overflow: hidden;

    position: relative;

    display: flex;
    flex-direction: column;

    border: 2px solid ${Hype[3]};
    border-bottom: none;

    ${css`
        animation: ${BoxFadeIn} 1.5s forwards;
    `}

    & > .item {
        border-bottom: 2px solid black;
    }

    & > .line.left {
        left: .5rem;
        ${css`
            animation: ${LeftLineAni} 1s forwards;
        `}
    }

    & > .line.right {
        right: .5rem;
        transform: translateY(-100%);
        ${css`
            animation: ${RightLineAni} 1s forwards;
        `}
    }
`;

const LogoVerticalLine = styled.div`
    position: absolute;

    width: 2px;
    height: 100%;

    background-color: black;

    transition: .5s;
`;

const LogoItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100px;
    height: 100px;
    font-size: 36px;

    box-sizing: border-box;

    @media ${({theme}) => theme.device.mobile} {
        width: 50px;
        height: 50px;
        font-size: 18px;
    }
`;

const CopyRight = styled.h1`
    font-size: 1rem;
    line-height: 27px;

    text-align: end;

    @media ${({theme}) => theme.device.mobile} {
        font-size: .5rem;
        line-height: 14px;
    }

    ${css`
        animation: ${FadeInMove} 1s forwards;
    `}
`;

export default SplashComponent;
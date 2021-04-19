import React from 'react';
import styled from 'styled-components';
import { HiMelody, NotoSansKR } from '../..//style/Font';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBookmark, BsBoxArrowDown } from 'react-icons/bs';

type Props = {
    refScreen: React.Ref<HTMLDivElement>;
    refSphere: React.Ref<HTMLDivElement>;
    closeJuke: () => void;
    content: any;
}

function JukeComponent(props: Props) {
    return (
        <JukeBlock ref={props.refScreen}>
            {
                props.content && 
                <>
                    <JukeArt src={props.content.img} alt="jukeart"/>
                    <JukeArtWrap/>
                    <JukeContentBlock>
                        <Title>
                        <JukeHeader>
                            <Jukist>
                                2021.03.16 by @hi_thniii
                            </Jukist>
                            <HeaderIconBlock>
                                <AiOutlineHeart />
                                <BsBookmark />
                            </HeaderIconBlock>
                        </JukeHeader>
                            {`#${props.content.title}`}
                        </Title>
                        <LineAudioBar>
                            <AudioSphere ref={props.refSphere}/>
                        </LineAudioBar>
                        <Content dangerouslySetInnerHTML={{__html:props.content.content}}/>
                        <Line/>
                        <JukeFooter>
                            <BsBoxArrowDown 
                                onClick={props.closeJuke}/>
                        </JukeFooter>
                    </JukeContentBlock>
                </>
            }
        </JukeBlock>
    );
}

const JukeBlock = styled.div`
    display: flex;
    justify-content: center;

    position: fixed;

    width: 100%;
    height: 100%;

    transition: .7s;
    transform: translateY(-100vh);
`;

const AudioSphere = styled.div`
    position: absolute;

    top: -0.5rem;
    
    transition: .3s;
    width: 1rem;
    height: 1rem;
    
    background-color: rgb(255,255,255);

    border-radius: 100%;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`;

const JukeHeader = styled.header`
    display: flex;

    position: absolute;
    top: 0;

    width: 100%;

    padding: 0 12px 0 8px;
    box-sizing: border-box;
`

const JukeFooter = styled.footer`
    position: absolute;
    bottom: 0;

    width: 100%;

    text-align: center;
    padding: 0 0 1rem 0;

    & > * {
        color: rgb(255,255,255);
        font-size: 32px;

        cursor: pointer;
    }
`;

const Jukist = styled.h5`
    flex: 1;

    font-size: 18px;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    text-align: start;

    ${HiMelody};
`;

const HeaderIconBlock = styled.div`
    & > * {
        color: rgb(255,255,255);
        font-size: 1.25rem;

        cursor: pointer;
    }

    & > *:not(:last-child) {
        margin-right: 13px;
    }
`;

const JukeArt = styled.img`
    position: fixed;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
`;

const JukeArtWrap = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
`;

const JukeContentBlock = styled.div`
    position: relative;

    color: rgb(255,255,255);
    z-index: 2;

    width: 600px;
    justify-self: center;

    margin: 27px 0 0;
`;

const Title = styled.h1`
    position: relative;

    font-size: 1.5rem;
    padding: 2.25rem 0;
    box-sizing: border-box;

    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

    ${NotoSansKR}

    text-align: center;
`;

const Content = styled.h2`
    font-size: 1.5rem;
    line-height: 35px;
    margin: 26px 0;

    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

    min-width: calc(35px * 3);
    max-height: calc(35px * 7);
    overflow-y: scroll;
    
    ${NotoSansKR}
`;

const LineAudioBar = styled.div`
    position: relative;

    width: 100%;
    height: 1px;

    background-color: rgb(255,255,255);
`;

const Line = styled.div`
    width: 100%;
    height: 1px;

    background-color: rgb(255,255,255);
`;

export default JukeComponent;
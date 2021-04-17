import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FullScreen } from '../style/Screen';
import { BsBoxArrowDown } from 'react-icons/bs';
import { WhatTheHell } from '../style/Palette';
import { NotoSansKR } from '../style/Font';
import { FaRegCommentDots } from 'react-icons/fa';
import sleepingBeauty from '../assets/music/paul_sleepingBeauty.mp3';

type Props = {
    content: any;
    closeJukeContent: () => void;
    refAudio: React.Ref<HTMLAudioElement>;
}

function JukeComponent(props: Props) {
    const refCommentBlock = useRef<HTMLDivElement>(null);
    const refContents = useRef<HTMLDivElement>(null);
    const refJukeContents = useRef<HTMLDivElement>(null);
    const refSphere = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const audio = document.querySelector(".jukemusic") as HTMLAudioElement;
        if(audio) {
            audio.addEventListener('timeupdate', () => {
                const left = Math.round((audio.currentTime / audio.duration) * 100);
                if(refSphere.current)
                    refSphere.current.style.left = left + "px";
            })
        }
    }, [props.refAudio]);

    const onComment = useCallback(() => {
        if(refCommentBlock.current)
            
            refCommentBlock.current.style.transform = "translateY(0px)"
            if(refContents.current) {
                refContents.current.style.opacity = "0";
            }
    }, []);

    const closeJuke = useCallback(() => {
        if(refJukeContents.current){
            refJukeContents.current.style.opacity = "0";
            refJukeContents.current.addEventListener('transitionend', () =>{
                props.closeJukeContent();
            });
        }
    }, [props]);

    return (
        props.content &&
        (
            <FullScreen style={{
                position: "fixed",
                zIndex: 1
            }}>
                <JukeBlock>
                    <img src={props.content.img} alt="albumarts" />
                    <JukeContentBlock ref={refJukeContents}>
                        <JukeContent>
                        <audio className="jukemusic" ref={props.refAudio} src={sleepingBeauty} autoPlay/>
                            <h1>{props.content.title}</h1>
                            <hr/>
                            <MainContentBlock>
                                <p dangerouslySetInnerHTML={{__html: props.content.content}}
                                    ref={
                                        refContents
                                    }/>
                                <CommentBlock
                                    ref={refCommentBlock}
                                >  
                                    댓글창임
                                </CommentBlock>
                            </MainContentBlock>
                            <AudioBar>
                                <hr className="audiobar"/>
                                <div className="audioSphere" ref={refSphere}/>
                            </AudioBar>
                            
                            <JukeIconBlock>
                                <FaRegCommentDots className="comment" onClick={onComment}/>
                            </JukeIconBlock>
                        </JukeContent>
                        <BsBoxArrowDown className="close" onClick={closeJuke}/>
                    </JukeContentBlock>
                </JukeBlock>
            </FullScreen>
        )
    );
}
const AudioBar = styled.div`
    position: relative;

    & > hr {
        margin: 1.5rem 0;
        border-bottom: none;
        overflow: visible;
    }

    & > div {
        position: absolute;
        top: 0;
        transform: translateY(calc(1.5rem - .5rem));
        width: 1rem;
        height: 1rem;
        background-color: ${WhatTheHell[0]};
        border-radius: 100%;
    }
`;

const JukeBlock = styled.div`
    width: 100%;
    height: 100%;

    & > img {
        width: 100%;
        height: 100%;
    }
`;

const CommentBlock = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    transform: translateY(100%);
    
    transition: 1s;
`;

const JukeIconBlock = styled.div`
    display: flex;
    justify-content: flex-end;

    & > .comment {
        cursor: pointer;
        font-size: 32px;
    }
`;

const MainContentBlock = styled.div`
    width: 100%;
    position: relative;
    flex: 1;

    overflow: hidden;

    & > p {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        font-size: 1.5rem;
        line-height: 2rem;

        font-weight: 100;

        flex: 1;
        overflow-y: scroll;

        transition: .7s;
    }
`;

const JukeContent = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;

    padding: 1rem;

    color: ${WhatTheHell[0]};
    text-shadow: 3px 3px 3px rgb(0,0,0);

    max-width: 600px;

    ${NotoSansKR};

    & > h1 {
        font-size: 1rem;
        line-height: 3rem;

        font-weight: 100;

        text-align: center;
    }

    & > hr {
        position: relative;
        margin: 1.5rem 0;
        border-bottom: none;
        overflow: visible;
    }

`;

const JukeContentBlock = styled.div`
    position: absolute;
    top: 0;

    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, .5);

    align-items: center;

    transition: .7s;

    & > .close {
        cursor: pointer;
        font-size: 32px;
        color: rgba(255,255,255, .5);

        padding: 1rem;
    }
`;

export default JukeComponent;
import React, { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { WhatTheHell } from '../style/Palette';
import { FullScreen } from '../style/Screen';
import { ContentLook } from '../animations/BoxAni';
import { ContentDatas } from '../dummyData';
import { NotoSansKR } from '../style/Font';
import { CgPlayListAdd } from 'react-icons/cg';
import { AiOutlineLike } from 'react-icons/ai';

type Props = {
    changeJukeContent: (content:any) => void;
}

function MainComponent(props: Props) {
    const refScreen = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let container = document.getElementById('map');
        let options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3
        };
    
        // let map = new window.kakao.maps.Map(container, options);
        new window.kakao.maps.Map(container, options);
    
      }, []);

      const onJuke = useCallback((content: any) => {
        if(refScreen.current)
            refScreen.current.style.transform = "translateY(100vh)";
            props.changeJukeContent(content);
      }, [props]);

    return (
        <FullScreen style={{
            position: "fixed",
            transition: ".7s",
            zIndex: 2
        }}
            ref={refScreen}
        >
            <MainBlock>
                <Map id="map"/>
                <ContentBlock>
                    <Content>
                        {
                            ContentDatas.map((content, idx) => 
                                <ContentItem key={idx}>
                                    <img src={content.img} alt="albumarts"/>
                                    <ImgWrap onClick={() => onJuke(content)}>
                                        <h1>{content.title}</h1>
                                        <p dangerouslySetInnerHTML={{__html: content.content}} />
                                        <IconBox>
                                            <AiOutlineLike className="like"/>
                                            <CgPlayListAdd className="addPlayList"/>
                                        </IconBox>
                                    </ImgWrap>
                                </ContentItem>
                            )
                        }
                    </Content>
                </ContentBlock>
            </MainBlock>
        </FullScreen>
    )
}

const IconBox = styled.div`
    position: absolute;
    
    bottom: 0;

    height: 50px;
    width: 100%;

    background-color: rgba(0,0,0, .5);
    border-top: 1px solid rgb(255,255,255);
    box-sizing: border-box;

    border-end-start-radius: .5rem;
    border-end-end-radius: .5rem;

    font-size: 1.75rem;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    & > * {
        cursor: pointer;
        margin: 0 .25rem 0;
    }

    & > .like:hover {
        color: ${WhatTheHell[4]};
    }

    & > .addPlayList:hover {
        color: ${WhatTheHell[4]};
    }
`;

const MainBlock = styled.div`
    height: 100%;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;

    background-color: ${WhatTheHell[0]};
    overflow-y: scroll;

    border-radius: 1rem;

    animation: ${ContentLook} 2s forwards ease-in-out;
`;

const ImgWrap = styled.div`
    display: flex;
    flex-direction: column;

    position: absolute;

    width: 300px;
    height: 300px;
    box-sizing: border-box;

    border-radius: .5rem;
    transition: .7s;
    background-color: rgba(0,0,0, .5);

    color: white;
    cursor: pointer;

    ${NotoSansKR};

    text-shadow: 3px 3px 3px rgb(0,0,0);

    & > h1 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        font-size: 1.25rem;

        margin: 1.25rem 1.5rem;
        transition: .7s;
    }

    & > p {
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;

        flex: 1;
        line-height: 1.5rem;

        font-weight: 300;

        margin: 0 1rem;

        overflow: hidden;
        max-height: 10.5rem;
        transition: .7s;
    }

    &:hover {
        background-color: rgba(0,0,0, .1);

        & > h1, p {
            color: transparent;
            text-shadow: 3px 3px 3px transparent;
        }
    }
`;

const ContentItem = styled.div`
    display: flex;
    justify-content: center;

    position: relative;

    padding: 1rem;
    box-sizing: border-box;
    
    & > img {
        width: 300px;
        height: 300px;
        border-radius: .5rem;
    }
`;


const ContentBlock = styled.div`
    position: fixed;
    width: 400px;
    height: 100%;

    padding: 1rem;
    box-sizing: border-box;

    z-index: 1;
`;

const Map = styled.div`
    position: fixed;
    top: 0;
    
    width: 100%;
    height: 100%;

    z-index: 1;
`;

export default MainComponent;
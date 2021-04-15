import React, { useEffect } from 'react';
import styled from 'styled-components';
import { WhatTheHell } from '../style/Palette';
import { FullScreen } from '../style/Screen';
import { ContentLook } from '../animations/BoxAni';

function MainComponent() {
    useEffect(() => {
        let container = document.getElementById('map');
        let options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3
        };
    
        // let map = new window.kakao.maps.Map(container, options);
        new window.kakao.maps.Map(container, options);
    
      }, []);

    return (
        <FullScreen>
            <MainBlock>
                <Map id="map"/>
                <ContentBlock>
                    <Content/>
                </ContentBlock>
            </MainBlock>
        </FullScreen>
    )
}

const MainBlock = styled.div`
    height: 100%;
`;

const Content = styled.div`
    width: 100%;
    height: 100%;

    background-color: ${WhatTheHell[0]};

    border-radius: 1rem;

    animation: ${ContentLook} 1s forwards cubic-bezier(0, 0, 0.51, 1.1);
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
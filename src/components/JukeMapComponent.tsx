import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ContentDatas } from '../dummyData';
import { MakeCustomOverlayContent } from '../lib/MakeCustomOverlay';
import '../style/Overlay.css';

function JukeMapComponent() {
    const [jukeMap, setJukeMap] = useState<any>(null);

    useEffect(() => {
        const block = document.getElementById('map');
        const options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };

        setJukeMap(new window.kakao.maps.Map(block, options));
    }, []);

    useEffect(() => {
        if(jukeMap){
            ContentDatas.forEach((content) => {
                const customOverlay = new window.kakao.maps.CustomOverlay({
                    position: content.position,
                    content: MakeCustomOverlayContent(content),
                    xAnchor: 0.5,
                    yAnchor: 0.5,
                });
                customOverlay.setMap(jukeMap);
            });
        }
    }, [jukeMap]);

    return (
        <JukeMapBlock id="map">

        </JukeMapBlock>
    );
}

const JukeMapBlock = styled.div`
    position: fixed;

    width: 100%;
    height: 100%;
`;

export default JukeMapComponent;
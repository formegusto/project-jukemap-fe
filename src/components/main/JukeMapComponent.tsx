import React, { useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import styled from 'styled-components';
import LogoVertical from '../../atoms/LogoVertical';
import RadiusBlock from '../../atoms/RadiusBlock';
import { ContentDatas } from '../../dummyData';
import { MakeCustomOverlayContent, MakeCustomOverlayDom } from '../../lib/MakeCustomOverlay';
import '../../style/Overlay.css';

interface Props extends RouteComponentProps {
    refScreen: React.Ref<HTMLDivElement>;
    onJuke: (content: any) => void;
}

function JukeMapComponent(props: Props) {
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
                    content: MakeCustomOverlayDom(content, props.onJuke),
                    xAnchor: 0.5,
                    yAnchor: 0.5,
                    clickable: true,
                });
                customOverlay.setMap(jukeMap);
                
                // const jukeblocks = document.querySelectorAll('.jukeblock');
                // jukeblocks[jukeblocks.length - 1].addEventListener('click', () => props.onJuke(content));
                
            });
        }
    }, [jukeMap, props]);

    return (
        <JukeMapBlock 
            ref={props.refScreen} 
            >
            <JukeMap id="map"/>
            <LogoBlock>
                <LogoVertical className="logo"/>
            </LogoBlock>
            <ContentsBlock>
                <RadiusBlock onClick={() => props.history.push("/auth")}>
                    h
                </RadiusBlock>
                <RadiusBlock onClick={() => props.history.push("/juke")}>
                    +
                </RadiusBlock>
            </ContentsBlock>
        </JukeMapBlock>
    );
}

const LogoBlock = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    z-index: 2;
    padding: 1rem;
    box-sizing: border-box;

    & > .logo {

    }
`;

const JukeMapBlock = styled.div`
    position: fixed;

    width: 100%;
    height: 100%;
`;

const JukeMap = styled.div`
    width: 100%;
    height: 100%;
`;

const ContentsBlock = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    z-index: 2;

    padding: 1rem;
    & > * {
        margin: 0 0 1rem 0;
    }
`;

export default withRouter(JukeMapComponent);
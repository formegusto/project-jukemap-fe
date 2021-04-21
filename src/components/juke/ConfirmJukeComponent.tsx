import React, { useEffect } from 'react';
import styled from 'styled-components';
import '../../style/Overlay.css';
import PlayIcon from '../../assets/icons/playbutton.png';
import whosmind from '../../assets/albumarts/whosmind.jpg';
import { HiMelody } from '../../style/Font';
import Button from '../../atoms/Button';
import { RouteComponentProps, withRouter } from 'react-router';

function ConfirmJukeComponent(props: RouteComponentProps) {
    useEffect(() => {
        const block = document.getElementById('map');
        if(block) {
            const options = {
                center: new window.kakao.maps.LatLng(33.450701, 126.570667),
                level: 3
            };

            new window.kakao.maps.Map(block, options);
        }
    }, []);

    return (
        <ConfirmBlock className="block">
            <DescHeader>
                주크가 등록 됐습니다.
            </DescHeader>
            <ConfirmContentBlock>
                <ConfirmContent className="jukeblock">
                    <JukeArtBlock className="jukeart">
                        <img src={whosmind} className="jukeart" alt="jukeart" />
                        <div className="artwrap"></div>
                        <img src={PlayIcon} className='playbtn' alt='playbtn' />
                        <h1 className='juketitle'>제목 제목 제목</h1>
                    </JukeArtBlock>
                </ConfirmContent>
                <JukeMap id="map" />
            </ConfirmContentBlock>
            <Button
                className="confirm"
                onClick={() => props.history.push("/")}
            >
                확인
            </Button>
        </ConfirmBlock>
    )
}

const DescHeader = styled.h1`
    font-size: 3rem;
    margin: 0 0 90px;

    ${HiMelody};
`;

const ConfirmBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    & > .confirm {
        margin: 52px 0 0;
    }
`;

const JukeArtBlock = styled.div`
    width: 200px;
    height: 200px;

    & > .jukeart {
        width: 200px;
        height: 200px;
    }

    & > .artwrap {
        width: 200px;
        height: 200px;
    }
`;

const ConfirmContentBlock = styled.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const ConfirmContent = styled.div`
    position: absolute;

    z-index: 2;
    transform: translateY(-120px);

    display: flex;
    justify-content: center;
    align-items: center;

    width: 230px;
    height: 230px;

    background-color: #f2e8df;

    transition: 0;
`;

const JukeMap= styled.div`
    width: 400px;
    height: 400px;

    border-radius: 100%;
`;

export default withRouter(ConfirmJukeComponent);
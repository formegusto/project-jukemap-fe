import React from 'react';
import styled from 'styled-components';
import whosmind from '../assets/albumarts/whosmind.jpg';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
}

function MusicDescItem(props: Props) {
    return (
        <StyledDiv
            {...props}
        >
            <AlbumArt src={whosmind} alt="albumarts"/>
            <ContentBlock>
                <Title>
                    누군가의 마음이 되면
                </Title>
                <Artist>
                    예빛
                </Artist>
            </ContentBlock>
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    padding: 11px 1rem;
    box-sizing: border-box;

    cursor: pointer;
`;

const AlbumArt = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 100%;

    @media ${({theme}) => theme.device.mobile} {
        width: 40px;
        height: 40px;
    }
`;

const ContentBlock = styled.div`
    margin: 0 0 0 30px;
`;

const Title = styled.h1`
    font-size: 18px;
    line-height: 23px;

    margin: 0 0 3px 0;

    @media ${({theme}) => theme.device.mobile} {
        font-size: 14px;
        line-height: 16px;
    }
`;

const Artist = styled.h2`
    font-size: 14px;
    line-height: 18px;

    @media ${({theme}) => theme.device.mobile} {
        font-size: 10px;
        line-height: 14px;
    }
`

export default MusicDescItem;
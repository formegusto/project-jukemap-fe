import React from 'react';
import styled from 'styled-components';
import Input from '../../atoms/Input';
import MusicDescItem from '../../atoms/MusicDescItem';
import { HiMelody } from '../../style/Font';
import { Hype } from '../../style/Palette';

type Props = {
    carouselScreen: (pageIdx: number) => void;
}

function MusicSelectComponent(props: Props) {
    return (
        <SelectBlock className="block">
            <ContentBlock>
                <Title>
                    당신의 순간에 어떤 노래가 함께 했나요?
                </Title>
                <MusicListBlock>
                    <InputBlock>
                        <Input 
                            className="keyword"
                            custom={{
                                width: "100%"
                            }}
                        />
                    </InputBlock>
                    <AlbumBlock>
                        {[1,1,1,1,1,1,1,1,1,1].map((v, idx) => 
                            <MusicDescItem 
                                key={idx}
                                onClick={() => props.carouselScreen(1)}
                            />
                        )}
                    </AlbumBlock>
                </MusicListBlock>
            </ContentBlock>
        </SelectBlock>
    )
}

const InputBlock = styled.div`
    box-sizing: border-box;
    padding: 27px 1rem;
    border-bottom: 1px solid rgb(0,0,0);

    & > .keyword {
    }
`;

const SelectBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${HiMelody};
`;

const ContentBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 36px;
    margin: 0 0 36px;

    @media ${({theme}) => theme.device.mobile} {
        font-size: 18px;
    }
`;

const MusicListBlock = styled.div`
    display: flex;
    flex-direction: column;

    width: 600px;
    height: 600px;

    border-radius: 1rem;
    background-color: ${Hype[2]};

    box-shadow: 4px 4px 4px rgb(0,0,0,0.25);

    @media ${({theme}) => theme.device.mobile} {
        width: 100%;
        height: 600px;
    }
`;

const AlbumBlock = styled.div`
    flex: 1;

    overflow-y: scroll;

    box-sizing: border-box;
    padding: 1rem 0;
`;

export default MusicSelectComponent;
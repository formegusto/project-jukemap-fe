import React from 'react';
import styled from 'styled-components';
import whosmind from '../../assets/albumarts/whosmind.jpg';
import ImageFileInput from '../../atoms/ImageFileInput';
import { BsPlayFill } from 'react-icons/bs';
import { MdAlbum } from 'react-icons/md';
import Input from '../../atoms/Input';
import TextArea from '../../atoms/TextArea';
import Button from '../../atoms/Button';

type Props = {
    carouselScreen: (pageIdx: number) => void;
    imageChange: (e: React.FormEvent<HTMLDivElement>) => void;
    refAlbumArt: React.Ref<HTMLImageElement>;
    refSphere: React.Ref<HTMLDivElement>;
    changeAudioState: () => void;
}

function PostJukeComponent(props: Props) {
    return (
        <PostBlock
            className="block"
        >
            <AlbumArt 
                ref={props.refAlbumArt}
                src={whosmind} 
                alt="albumart" />
            <ArtWrap/>
            <PostJukeForm>
                <IconBlock>
                    <BsPlayFill 
                        className="playbtn"
                        onClick={props.changeAudioState}
                    />
                    <ImageFileInput 
                        id="img"
                        onChange={props.imageChange}
                    />
                </IconBlock>
                <Input
                    blockClassName="inputblock titleblock"
                    placeholder="제목을 입력해주세요."
                    custom={{
                        width: "100%",
                        radius: "0",
                        backgroundColor: "rgba(204, 204, 204, 0.1)",
                        fontColor: "rgb(255,255,255)",
                        preventMediaQuery: true
                    }} />
                <LineAudioBar>
                    <AudioSphere 
                        ref={props.refSphere}
                    />
                </LineAudioBar>
                <TextArea 
                    blockClassName="inputblock"
                    placeholder="내용을 입력해주세요."
                />
                <Line />
                <Button
                    custom={{
                        width: "100%",
                        isFlex: true,
                        backgroundColor: "rgba(38, 38, 38, 0.5)"
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        props.carouselScreen(2);
                    }}
                >
                    <MdAlbum 
                        size={20}
                    />
                </Button>
            </PostJukeForm>
        </PostBlock>
    )
}

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

const LineAudioBar = styled.div`
    position: relative;

    width: 100%;
    height: 1px;

    background-color: rgb(255,255,255);

    margin: 20px 0;
`;

const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: rgb(255,255,255);

    margin: 20px 0;
`;

const IconBlock = styled.div`
    text-align: end;
    font-size: 1.5rem;
    color: white;

    & > * {
        cursor: pointer;
        margin: 0 12px 0 0;
    }
`;

const PostBlock = styled.div`
    display: flex;
    justify-content: center;
`;

const AlbumArt = styled.img`
    position: absolute;
    top: 0; 

    width: 100%;
    height: 100%;

    object-fit: cover;
`;

const ArtWrap = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.25);
`;

const PostJukeForm = styled.form`
    margin: 1rem 0;

    width: 600px;
    z-index: 2;

    display: flex;
    flex-direction: column;

    & > .inputblock {
        padding: 0 14px;
        box-sizing: border-box;
    }

    & > .titleblock {
        margin: 1rem 0 0;
    }
`;

export default PostJukeComponent;
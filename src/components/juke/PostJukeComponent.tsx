import React from 'react';
import styled from 'styled-components';
import whosmind from '../../assets/albumarts/whosmind.jpg';
import ImageFileInput from '../../atoms/ImageFileInput';

type Props = {
    imageChange: (e: React.FormEvent<HTMLDivElement>) => void;
    refAlbumArt: React.Ref<HTMLImageElement>;
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
                <ImageFileInput 
                    id="img"
                    onChange={props.imageChange}
                />
            </PostJukeForm>
        </PostBlock>
    )
}

const PostBlock = styled.div`
    display: flex;
`;

const AlbumArt = styled.img`
    position: absolute;
    top: 0; 

    width: 100%;
    height: 100%;
`;

const ArtWrap = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.25);
`;

const PostJukeForm = styled.form`
    z-index: 2;
`;

export default PostJukeComponent;
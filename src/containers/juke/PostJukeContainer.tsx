import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import ConfirmJukeComponent from '../../components/juke/ConfirmJukeComponent';
import MusicSelectComponent from '../../components/juke/MusicSelectComponent';
import PostJukeComponent from '../../components/juke/PostJukeComponent';

function PostJukeContainer() {
    const refScreen = useRef<HTMLDivElement>(null);
    const refAlbumArt = useRef<HTMLImageElement>(null);

    const carouselScreen = useCallback((pageIdx: number) => {
        if(refScreen.current)
            refScreen.current.style.transform = 'translateX(-' + (pageIdx * 100) + "vw)";
    }, []);

    const imageChange = useCallback((e: React.FormEvent<HTMLDivElement>) => {
        const fileInput = e.target as HTMLInputElement;

        if(fileInput.files && fileInput.files.length !== 0){
            const reader = new FileReader();
            const file = fileInput.files[0];
            reader.onloadend = () => {
                if(refAlbumArt.current){
                    refAlbumArt.current.src = reader.result as string;
                }
            }

            reader.readAsDataURL(file);
        }
    }, []);

    return (
        <PostJukeScreen>
            <PostJukeCarousel
                ref={refScreen}
            >
                <MusicSelectComponent
                    carouselScreen={carouselScreen}
                />
                <PostJukeComponent
                    refAlbumArt={refAlbumArt}
                    imageChange={imageChange}
                />
                <ConfirmJukeComponent />
            </PostJukeCarousel>
        </PostJukeScreen>
    );
}

const PostJukeScreen = styled.div`
    width: 100%;
    height: 100%;

    transition: .55s;
    transform: translateX(-0vw);

    overflow-x: hidden;
`;

const PostJukeCarousel = styled.div`
    position: relative;

    width: 100%;
    height: 100%;

    transition: .55s;
    transform: translateX(-0vw);

    & > .block {
        position: absolute;

        width: 100%;
        height: 100%;
    }

    & > .block:nth-child(1) {
        transform: translateX(0);
    }

    & > .block:nth-child(2) {
        transform: translateX(100vw);
    }

    & > .block:nth-child(3) {
        transform: translateX(200vw);
    }
`;


export default PostJukeContainer;
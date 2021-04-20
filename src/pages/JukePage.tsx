import React from 'react';
import styled from 'styled-components';
import ConfirmJukeContainer from '../containers/juke/ConfirmJukeContainer';
import MusicSelectContainer from '../containers/juke/MusicSelectContainer';
import PostJukeContainer from '../containers/juke/PostJukeContainer';

function JukePage() {
    return (
        <PostJukeScreen>
            <MusicSelectContainer />            
            <PostJukeContainer />  
            <ConfirmJukeContainer />        
        </PostJukeScreen>
    );
}

const PostJukeScreen = styled.div`
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


export default JukePage;
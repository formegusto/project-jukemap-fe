import React from 'react';
import JukeComponent from '../components/JukeComponent';
import JukeMapComponent from '../components/JukeMapComponent';
import SplashComponent from '../components/SplashComponent';

function MainContainer() {
    return (
        <>
            <SplashComponent />
            <JukeMapComponent />
            <JukeComponent />
        </>
    );
}

export default MainContainer;
import React, { useCallback, useRef } from 'react';
import JukeComponent from '../components/JukeComponent';
import JukeMapComponent from '../components/JukeMapComponent';
import SplashComponent from '../components/SplashComponent';

function MainContainer() {
    const refJukeScreen = useRef<HTMLDivElement>(null);
    const refJukeMapScreen = useRef<HTMLDivElement>(null);
    
    const onJuke = useCallback((content:any) => {
        if(refJukeScreen.current)
            refJukeScreen.current.style.transform = "translateY(0)";
    }, []);

    const closeJuke = useCallback(() => {
        if(refJukeScreen.current)
            refJukeScreen.current.style.transform = "translateY(-100vh)";
    }, []);

    return (
        <>
            <SplashComponent />
            <JukeMapComponent 
                refScreen={refJukeMapScreen}
                onJuke={onJuke}
            />
            <JukeComponent
                refScreen={refJukeScreen}
                closeJuke={closeJuke}
            />
        </>
    );
}

export default MainContainer;
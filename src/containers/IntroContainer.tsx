import React, { useCallback, useRef, useState } from 'react';
import IntroComponent from '../components/IntroComponent';
import JukeComponent from '../components/JukeComponent';
import MainComponent from '../components/MainComponent';

function IntroContainer() {
    const [isMain, setIsMain] = useState<boolean>(false);
    const [jukeContent, setJukeContent] = useState<any>(null);
    const refMainScreen = useRef<HTMLDivElement>(null);
    const refAudio = useRef<HTMLAudioElement>(null);

    const changeIsMain = useCallback(() => {
        setIsMain(true);
    }, []);

    const closeJukeContent = useCallback(() => {
        if(refMainScreen.current)
            refMainScreen.current.style.transform = "";
        if(refAudio.current)
            refAudio.current.pause();
        setJukeContent(null);
    }, []);

    const changeJukeContent = useCallback((content: any) => {
        if(refMainScreen.current)
            refMainScreen.current.style.transform = "translateY(100vh)";
        if(refAudio.current){
            refAudio.current.play();
            refAudio.current.addEventListener("timeupdate", () => {
                console.log("야스용");
            })
        }
        setJukeContent(content);
    }, [])

    return (
        <>
            <JukeComponent 
                refAudio={refAudio}
                content={jukeContent}
                closeJukeContent={closeJukeContent}
            />
            <IntroComponent 
                changeIsMain={changeIsMain}
            />
            {
                isMain &&
                <MainComponent
                    changeJukeContent={changeJukeContent}
                    refScreen={refMainScreen}
                />
            }
        </>
    );
}

export default IntroContainer;
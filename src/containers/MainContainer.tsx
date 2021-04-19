import React, { useCallback, useRef, useState } from 'react';
import JukeComponent from '../components/JukeComponent';
import JukeMapComponent from '../components/JukeMapComponent';
import SplashComponent from '../components/SplashComponent';
import audio from "../assets/music/paul_sleepingBeauty.mp3";

function MainContainer() {
    const refJukeScreen = useRef<HTMLDivElement>(null);
    const refJukeMapScreen = useRef<HTMLDivElement>(null);
    const refAudio = useRef<HTMLAudioElement>(null);
    const refSphere = useRef<HTMLDivElement>(null);
    const [content, setContent] = useState<any>(null);
    
    const onJuke = useCallback((content:any) => {
        if(refJukeScreen.current){
            refJukeScreen.current.style.transform = "translateY(0)";
            setContent(content);
            if(refAudio.current){
                refAudio.current.currentTime = 0;
                refAudio.current.play();
                refAudio.current.addEventListener('timeupdate', () => {
                    if(refAudio.current){
                        const location = 
                            (refAudio.current.currentTime / refAudio.current.duration * 100);
                        if(refSphere.current)
                            refSphere.current.style.left = `${location}%`;

                    }
                })
            }
        }
    }, []);

    const closeJuke = useCallback(() => {
        if(refJukeScreen.current){
            refJukeScreen.current.style.transform = "translateY(-100vh)";
            if(refAudio.current)
                refAudio.current.pause();
        }
    }, []);

    return (
        <>
            <audio ref={refAudio} src={audio} autoPlay />
            <SplashComponent />
            <JukeMapComponent 
                refScreen={refJukeMapScreen}
                onJuke={onJuke}
            />
            <JukeComponent
                refScreen={refJukeScreen}
                refSphere={refSphere}
                closeJuke={closeJuke}
                content={content}
            />
        </>
    );
}

export default MainContainer;
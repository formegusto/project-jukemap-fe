import React, { useCallback, useEffect, useRef, useState } from 'react';
import JukeComponent from '../../components/main/JukeComponent';
import JukeMapComponent from '../../components/main/JukeMapComponent';
import SplashComponent from '../../components/main/SplashComponent'
import audio from "../../assets/music/paul_sleepingBeauty.mp3";

function MainContainer() {
    const refSplashScreen = useRef<HTMLDivElement>(null);
    const refJukeScreen = useRef<HTMLDivElement>(null);
    const refJukeMapScreen = useRef<HTMLDivElement>(null);
    const refAudio = useRef<HTMLAudioElement>(null);
    const refSphere = useRef<HTMLDivElement>(null);
    const refLogoIcon = useRef<HTMLDivElement>(null);
    const refJukeContent = useRef<HTMLDivElement>(null);
    const [content, setContent] = useState<any>(null);

    useEffect(() => {
        if(refLogoIcon.current){
            refLogoIcon.current.addEventListener('animationend', () => {
                setTimeout(() => {
                    if(refSplashScreen.current)
                        refSplashScreen.current.style.transform = 'translateY(100vh)';
                }, 300);
            })
        }
    }, []);

    const onJuke = useCallback((content:any) => {
        if(refJukeScreen.current){
            refJukeScreen.current.style.transform = "translateY(0)";
            setContent(content);
            if(refAudio.current){
                refAudio.current.src = content.music;
                refAudio.current.currentTime = 0;
                refAudio.current.play();
                if(refJukeContent.current)
                    refJukeContent.current.scrollTo({
                        top: 0
                    });
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
            <audio ref={refAudio} src={audio}/>
            <JukeMapComponent 
                refScreen={refJukeMapScreen}
                onJuke={onJuke}
            />
            <JukeComponent
                refScreen={refJukeScreen}
                refSphere={refSphere}
                refContent={refJukeContent}
                closeJuke={closeJuke}
                content={content}
            />
            <SplashComponent 
                refScreen={refSplashScreen}
                refIcon={refLogoIcon}
            />
        </>
    );
}

export default MainContainer;
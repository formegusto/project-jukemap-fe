import React, { useCallback, useState } from 'react';
import IntroComponent from '../components/IntroComponent';
import JukeComponent from '../components/JukeComponent';
import MainComponent from '../components/MainComponent';

function IntroContainer() {
    const [isMain, setIsMain] = useState<boolean>(false);
    const [jukeContent, setJukeContent] = useState<any>(null);

    const changeIsMain = useCallback(() => {
        setIsMain(true);
    }, []);

    const changeJukeContent = useCallback((content: any) => {
        setJukeContent(content);
    }, [])

    return (
        <>
            <JukeComponent 
                content={jukeContent}
            />
            <IntroComponent 
                changeIsMain={changeIsMain}
            />
            {
                isMain &&
                <MainComponent
                    changeJukeContent={changeJukeContent}
                />
            }
        </>
    );
}

export default IntroContainer;
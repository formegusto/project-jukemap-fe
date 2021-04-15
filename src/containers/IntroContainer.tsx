import React, { useCallback, useState } from 'react';
import IntroComponent from '../components/IntroComponent';
import MainContainer from './MainContainer';

function IntroContainer() {
    const [isMain, setIsMain] = useState<boolean>(false);
    
    const changeIsMain = useCallback(() => {
        setIsMain(true);
    }, []);

    return (
        <>
            <IntroComponent 
                changeIsMain={changeIsMain}
            />
            {
                isMain &&
                <MainContainer />
            }
        </>
    );
}

export default IntroContainer;
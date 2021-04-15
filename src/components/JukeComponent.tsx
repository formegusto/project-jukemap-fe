import React from 'react';
import styled from 'styled-components';
import { FullScreen } from '../style/Screen';

type Props = {
    content: any;
}

function JukeComponent(props: Props) {
    return (
        props.content &&
        (
            <FullScreen style={{
                position: "fixed",
                zIndex: 1
            }}>
                <JukeBlock>
                    <img src={props.content.img} alt="albumarts" />
                    <JukeContentBlock>

                    </JukeContentBlock>
                </JukeBlock>
            </FullScreen>
        )
    );
}

const JukeBlock = styled.div`
    width: 100%;
    height: 100%;

    & > img {
        width: 100%;
        height: 100%;
    }
`;

const JukeContentBlock = styled.div`
    position: absolute;
    top: 0;

    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, .5);
`;

export default JukeComponent;
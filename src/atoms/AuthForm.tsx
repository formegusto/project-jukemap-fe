import React, { useCallback, useRef, useState } from 'react';
import styled from 'styled-components';
import { HiMelody } from '../style/Font';
import { Hype, WhatTheHell } from '../style/Palette';

interface Props extends React.HTMLProps<HTMLDivElement> {

}

function AuthForm(props: Props) {
    const [active, setActive] = useState<number>(0);
    const refFormGroup = useRef<HTMLDivElement>(null);

    const carouselChange = useCallback((idx: number) => {
        if(refFormGroup.current) {
            refFormGroup.current.style.transform = 'translate(-' + (idx * 100) + '%)';
            setActive(idx);
        }
    }, []);

    return (
        <StyledDiv>
            <FlowBlock>
                {['j','u','k','e'].map(
                    (value,idx) => 
                        <>
                            <FlowItem 
                                key={value}
                                active={active >= idx}    
                                onClick={() => carouselChange(idx)}
                            >{value}</FlowItem>
                            {   
                                idx !== 3 &&
                                <Line key={idx}/>
                            }
                        </>
                    )
                }
            </FlowBlock>
            <FormBlock>
                <FormGroup
                    ref={refFormGroup}
                >
                    {props.children}
                </FormGroup>
            </FormBlock>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    display: flex;

    flex-direction: column;
    ${HiMelody};
`;

const FlowBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 33px 0 38px;
`;

const FlowItem = styled.div<{active: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 36px;
    height: 36px;
    border-radius: 100%;
    font-size: 24px;
    line-height: 30px;

    color: rgb(255,255,255);
    border: 1px solid ${WhatTheHell[3]};
    background-color: ${props => props.active ? WhatTheHell[3] : WhatTheHell[4]};

    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);

    cursor: pointer;
`;

const Line = styled.div`
    width: 44px;
    height: 1px;
    
    background-color: rgb(0,0,0);
`;

const FormBlock = styled.div`
    width: 600px;
    height: 432px;
    background-color: ${Hype[2]};
    border-radius: 1rem;

    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);

    overflow-x: hidden;

    &-::-webkit-scrollbar {
        display: none;
    }

    @media ${({theme}) => theme.device.mobile} {
        width: 100%;
    }
`;

const FormGroup = styled.div`
    position: relative;
    height: 432px;

    transition: .55s;
    transform: translateX(0%);

    & > * {
        width: 100%;
        position: absolute;
        top: 0;
    }

    & > *:nth-child(1) {
        left: 0;
    }

    & > *:nth-child(2) {
        left: 100%;
    }

    & > *:nth-child(3) {
        left: 200%;
    }

    & > *:nth-child(4) {
        left: 300%;
    }
`;

export default AuthForm;



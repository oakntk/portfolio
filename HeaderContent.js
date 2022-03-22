import React from 'react';
import styled from 'styled-components';
import me from '../img/oak.png';
import coding from '../img/coding.png';
import desktop from '../img/desktop.png';
import cpu from '../img/cpu.png';
import { Fade } from 'react-reveal';

function HeaderContent() {
    return (
        <HeaderContentStyled>
            <Fade left cascade>
                <div className="left-content">
                    <div className="left-text-container">
                        <h1>Natthakrit Kulareerat</h1>
                        <p className="white">
                            A 4th year computer engineering student with
                            finding experience in all levels of testing.
                        </p>
                    </div>
                </div>
            </Fade>
            <Fade right>
                <div className="right-content">
                    <img src={me} className="me"/>
                    <img src={coding} alt="" className="coding" width="200"/>
                    <img src={desktop} alt="" className="desktop" width="150"  style={{marginTop:100}}/>
                    <img src={cpu} alt="" className="cpu" width="140"/>
                </div>
            </Fade>
        </HeaderContentStyled>
    )
}

const HeaderContentStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 3rem;
    @media screen and (max-width: 700px){
        grid-template-columns: repeat(1, 1fr);
    }
    .left-content{
        display: flex;
        align-items: center;
        padding-right: 3rem;
        .white{
            color:white;
        }
        h1{
            font-size: 4rem;
            font-weight: 600;
            @media screen and (max-width: 700px){
                font-size: 3rem;
            }
        }
        .white{
            padding: 1.4rem 0;
            line-height: 1.8rem;
        }
    }
    .right-content{
        position: relative;
        display: flex;
        justify-content: center;
        .me{
            width: 80%;
        }
        .coding{
            position: absolute;
            bottom: 10%;
            right: 0;
            left: auto;
            animation: move2 20s infinite;
            transition: all .4s ease-in-out;
        }
        .desktop{
            position: absolute;
            top: 0;
            right: 0;
            left: auto;
            animation: move 5s infinite;
            transition: all .4s ease-in-out;
        }
        .cpu{
            position: absolute;
            bottom: 15%;
            left: 0;
            transition: all .4s ease-in-out;
            animation: move 8s infinite;
            animation-delay: .5s;
            transition: all .4s ease-in-out;
        }
    }
    //Header Animations
    .desktop{
        @keyframes move{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
        }
        @keyframes move2{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
            50%{
                transform: translateY(-10px) rotate(60deg) scale(1.1) translateX(10px);
            }
            100%{
                transform: translateY(0)  rotate(0deg) scale(1) translateX(0);
            }
        }
    }
`;

export default HeaderContent;

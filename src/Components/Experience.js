import * as React from 'react';
import { InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import bgCircles from '../img/circleBg.svg';


function ExperienceSection() {
    return (
        <ExperienceStyle>
            <InnerLayout>
                <div className="message-con">
                    <div className="left-items">
                        <h2 className="secondary-heading">
                            Experience
                        </h2>
                        <img src={bgCircles} className="bgCircle" alt="" />
                    </div>
                    <div className="right-items">
                        <img src={bgCircles} alt="" className="bgCircle" />
                    </div>
                </div>
            </InnerLayout>
        </ExperienceStyle>
    )
}

const ExperienceStyle = styled.section`
    .message-con{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
        }
    }


    .left-items{
        position: relative;
        padding-right: 2rem;
        .m-para{
            padding: 1rem 0;
        }
        .images-con{
            display: flex;
            align-items: center;
            .image-2, .image-3, .image-4, .image-5{
                margin-left: -22px;
            }
        }
        .bgCircle{
            position: absolute;
            top: -7%;
            left: -10%;
            z-index: -1;
        }
    }
    .right-items{
        position: relative;
        img{
            padding-left: 2rem;
        }
        .bgCircle{
            position: absolute;
            bottom: -7%;
            right: 0;
            z-index: -1;
        }
    }
`;

export default ExperienceSection;

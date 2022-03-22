import * as React from 'react';
import { InnerLayout } from '../styles/Layouts';
import styled from 'styled-components';
import bgCircles from '../img/circleBg.svg';
import html from '../img/html.png';
import css from '../img/css.png';
import react from '../img/react.png';
import ui from '../img/uxui.png';
import leftplay from '../img/play-buttonbackward.png';
import rightplay from '../img/play-button.png';
import pause from '../img/pause.png';
import htmlicon from '../img/htmlicon.png';
import cssicon from '../img/cssicon.png';
import reacticon from '../img/atomicon.png';
import uiicon from '../img/uiicon.png';
import Grid from '@mui/material/Grid';
import { withTheme } from "@material-ui/core/styles";

const SkillCardDot1 = withTheme(styled.div`
position:absolute;
top:-12px;
left:245px;
height: 6px;
  width: 6px;
  background-color:#6EC177;
  border-radius: 50%;
  display: inline-block;
`);

const SkillCardDot2 = withTheme(styled.div`
position:absolute;
top:-12px;
left:260px;
height: 6px;
  width: 6px;
  background-color:#E8B83F;
  border-radius: 50%;
  display: inline-block;

`);

const SkillCardDot3 = withTheme(styled.div`
position:absolute;
top:-12px;
left:275px;
height: 6px;
  width: 6px;
  background-color: #FF5E5E;;
  border-radius: 50%;
  display: inline-block;

`);

const SkillCard = withTheme(styled.div`
position:absolute;
margin:1px;
width: 304px;
height: 210px;
background: #FFFFFF;
border: 17px solid #FFEEB5;
box-sizing: border-box;
box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
`);

const SkillCardInnerCircle = withTheme(styled.div`
position:absolute;
width: 34px;
height: 34px;
left: 15px;
top: 10px;
background: #FFFFFF;
border: 3px solid #5EC0C7;
border-radius: 50%;
box-sizing: border-box;
`);

const SkillCardInnerBox = withTheme(styled.div`
position: absolute;
width: 120px;
height: 28px;
left: 60px;
top: 14px;
background: #5EC0C7;
opacity: 0.25;
border: 1px solid #5EC0C7;
box-sizing: border-box;
`);

const Text= withTheme(styled.div`
position: absolute;
left: 10px;
top: -2px;
color: #000000;
font-family: 'Russo One';
font-style: normal;
font-weight: 400;
font-size: 28px;
`);

const SkillCardBottom = withTheme(styled.div`
position: absolute;
top:193px;
left:-17px;
width: 304px;
height: 35px;
background: #B0D9FF;
`);

const SkillCardDot4 = withTheme(styled.div`
position:absolute;
top:5px;
left:40px;
height: 26px;
  width: 26px;
  background: #FFFFFF;
  border-radius: 50%;
  display: inline-block;
  `);

const SkillCardLine1 = withTheme(styled.div`
  position: absolute;
  width: 70px;
  height:0px;
  left: 110px;
  top: 15px;
  
  border: 4px solid #FFFFFF;
  `);
const SkillCardLine2 = withTheme(styled.div`
  position: absolute;
  width: 70px;
  height: 0px;
  left: 188px;
  top:15px;
  
  border: 4px solid #FF5858;
  `);

function SkillSection() {
    return (
        <SkillStyle>
            <InnerLayout>
                <div className="message-con">
                    <div className="left-items">
                        <h2 className="secondary-heading">
                            Skills
                        </h2>
                        <img src={bgCircles} className="bgCircle" alt="" />
                    </div>
                    <Grid container justify="center" style={{marginLeft:-100}}>
                        <SkillCard>
                            <SkillCardInnerCircle>
                                <img src = {htmlicon} width="20"
                                style={{marginTop:4,marginLeft:5}}/>
                            </SkillCardInnerCircle>
                            <SkillCardInnerBox>
                                <Text>HTML</Text>
                            </SkillCardInnerBox>
                            <SkillCardDot1 />
                            <SkillCardDot2 />
                            <SkillCardDot3 />
                            <img src = {html} width="90"
                            style={{marginTop:60,marginLeft:90}}/>
                            <SkillCardBottom>
                                <img src={leftplay} width="12"
                                    style={{ marginLeft: 18, marginTop: 12 }} />
                                <SkillCardDot4>
                                    <img src= {pause} width="12"
                                        style={{ marginLeft: 7, marginTop: 7 }} />
                                </SkillCardDot4>
                                <img src= {rightplay} width="12"
                                    style={{ marginLeft: 46, marginTop: 12 }} />
                                <SkillCardLine1 />
                                <SkillCardLine2 />
                            </SkillCardBottom>
                        </SkillCard>
                        <Grid container style={{marginLeft:400}}>
                        <SkillCard>
                            <SkillCardInnerCircle>
                            <img src = {cssicon} width="20"
                                style={{marginTop:4,marginLeft:5}}/>
                            </SkillCardInnerCircle>
                            <SkillCardInnerBox>
                                <Text>CSS</Text>
                            </SkillCardInnerBox>
                            <SkillCardDot1 />
                            <SkillCardDot2 />
                            <SkillCardDot3 />
                            <img src = {css} width="90"
                            style={{marginTop:60,marginLeft:90}}/>
                            <SkillCardBottom>
                                <img src={leftplay} width="12"
                                    style={{ marginLeft: 18, marginTop: 12 }} />
                                <SkillCardDot4>
                                    <img src= {pause} width="12"
                                        style={{ marginLeft: 7, marginTop: 7 }} />
                                </SkillCardDot4>
                                <img src= {rightplay} width="12"
                                    style={{ marginLeft: 46, marginTop: 12 }} />
                                <SkillCardLine1 />
                                <SkillCardLine2 />
                            </SkillCardBottom>
                        </SkillCard>
                        </Grid>
                        <Grid container style={{marginTop:300}}>
                        <SkillCard>
                        <SkillCardInnerCircle>
                            <img src = {reacticon} width="25"
                                style={{marginTop:2,marginLeft:2}}/>
                            </SkillCardInnerCircle>
                            <SkillCardInnerBox>
                                <Text>React</Text>
                            </SkillCardInnerBox>
                            <SkillCardDot1 />
                            <SkillCardDot2 />
                            <SkillCardDot3 />
                            <img src = {react} width="90"
                            style={{marginTop:60,marginLeft:90}}/>
                            <SkillCardBottom>
                                <img src={leftplay} width="12"
                                    style={{ marginLeft: 18, marginTop: 12 }} />
                                <SkillCardDot4>
                                    <img src= {pause} width="12"
                                        style={{ marginLeft: 7, marginTop: 7 }} />
                                </SkillCardDot4>
                                <img src= {rightplay} width="12"
                                    style={{ marginLeft: 46, marginTop: 12 }} />
                                <SkillCardLine1 />
                                <SkillCardLine2 />
                            </SkillCardBottom>
                        </SkillCard>
                        </Grid>
                        <Grid container style={{marginLeft:400}}>
                        <SkillCard>
                        <SkillCardInnerCircle>
                            <img src = {uiicon} width="20"
                                style={{marginTop:4,marginLeft:5}}/>
                            </SkillCardInnerCircle>
                            <SkillCardInnerBox>
                                <Text>UX/UI</Text>
                            </SkillCardInnerBox>
                            <SkillCardDot1 />
                            <SkillCardDot2 />
                            <SkillCardDot3 />
                            <img src = {ui} width="90"
                            style={{marginTop:60,marginLeft:90}}/>
                            <SkillCardBottom>
                                <img src={leftplay} width="12"
                                    style={{ marginLeft: 18, marginTop: 12 }} />
                                <SkillCardDot4>
                                    <img src= {pause} width="12"
                                        style={{ marginLeft: 7, marginTop: 7 }} />
                                </SkillCardDot4>
                                <img src= {rightplay} width="12"
                                    style={{ marginLeft: 46, marginTop: 12 }} />
                                <SkillCardLine1 />
                                <SkillCardLine2 />
                            </SkillCardBottom>
                        </SkillCard>
                        </Grid>
                    </Grid>
                </div >
            </InnerLayout >
            <img src={bgCircles} alt="" className="bgCircle" width="350" style={{marginLeft:450,marginTop:-290}}/>
        </SkillStyle >
    )
}
const SkillStyle = styled.section`
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

export default SkillSection;

import Header from "./Components/Header";
import {OuterLayout} from './styles/Layouts';
import styled from 'styled-components';
import SkillSection from "./Components/SkillSection";
import ExperienceSection from "./Components/Experience";
import { Fade } from "react-reveal";


function App() {
  return (
    <div className="App">
        <Header />
        <OuterLayout>
          <MainStyled>
            <Fade left>
              <SkillSection />
            </Fade>
            <Fade right>
          <ExperienceSection/>
          </Fade>
          </MainStyled>
        </OuterLayout>
    </div>
  );
}

const MainStyled = styled.main`


`;

export default App;

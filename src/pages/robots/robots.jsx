import Header from '../../components/Header'
import HeaderImage from '../../images/teampicture.jpg'
import Footer from '../../components/Footer'
import {GrGithub} from 'react-icons/gr'
import Card from '../../UI/Card'

import Robot2011 from '../../images/robots/robot11.JPG';
import Robot2012 from '../../images/robots/robot12.JPG';
import Robot2013 from '../../images/robots/robot13.JPG';
import Robot2018 from '../../images/robots/robot18.JPG';
import Robot2019 from '../../images/robots/robot19.JPG';
import Robot2021 from '../../images/robots/robot20.JPG';
import Robot2022 from '../../images/robots/robot22.jpeg';
import Robot2023 from '../../images/robots/robot23.jpg';

import './robots.css'

const Robots = () => {
  return (
    <>
    <Header title="Robots" image={HeaderImage}>
      View the our robots and their documentation over the years!
    </Header>
    <section className="robots">
      <div className="container robots__container">
      <Card className="robot">
        <div className="robot__img">
        </div>
        <h3>Crescendo</h3>
        <h4>2023-24</h4>
    </Card>
      <Card className="robot">
        <div className="robot__img">
            <img src={Robot2023} alt="Charged Up" />
        </div>
        <h3>Charged Up</h3>
        <h4>2022-23</h4>
        <div className="robots_docs">
          <a key="2" href="https://github.com/AllentownRobotics/2023-1807-RobotCode" rel='noreferrer noopener'><GrGithub/> </a>
        </div>
    </Card>
    <Card className="robot">
        <div className="robot__img">
            <img src={Robot2022} alt="Rapid React" />
        </div>
        <h3>Rapid React</h3>
        <h4>2021-22</h4>
        <div className="robots_docs">
          <a key="3" href="https://github.com/AllentownRobotics/2022-1807-RobotCode" rel='noreferrer noopener'><GrGithub/> </a>
        </div>
    </Card>
    <Card className="robot">
        <div className="robot__img">
            <img src={Robot2018} alt="Power Up" />
        </div>
        <h3>Power Up</h3>
        <h4>2017-18</h4>
        <div className="robots_docs">
          <a key="4" href="https://github.com/AllentownRobotics/2022-1807-RobotCode" rel='noreferrer noopener'><GrGithub/> </a>
        </div>
    </Card>
    <Card className="robot">
        <div className="robot__img">
            <img src={Robot2013} alt="Ultimate Ascent" />
        </div>
        <h3>Ultimate Ascent</h3>
        <h4>2012-13</h4>
    </Card>
    <Card className="robot">
        <div className="robot__img">
            <img src={Robot2012} alt="Rebound Rumble" />
        </div>
        <h3>Rebound Rumble</h3>
        <h4>2011-12</h4>
    </Card>
    <Card className="robot">
        <div className="robot__img">
            <img src={Robot2011} alt="Logomotion" />
        </div>
        <h3>Logomotion</h3>
        <h4>2010-11</h4>
    </Card>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Robots
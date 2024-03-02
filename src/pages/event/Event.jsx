import Header from '../../components/Header'
import HeaderImage from '../../images/teampicture.jpg'
import {FaRobot} from 'react-icons/fa'
import SectionHead from '../../components/SectionHead'
import VisionImage from '../../images/teampicture.jpg'
import Footer from '../../components/Footer'
import Card from '../../UI/Card'
import {AiFillCaretRight} from 'react-icons/ai'

import './event.css'

const Event = () => {
  return (
    <>
    <Header title="Event" image={HeaderImage}>
      Scroll down to for information on our district event being held at Allentown High School
    </Header>
    <section className="event__summary">
        <div className="container event__teams-container">
          <div className='event__section-content'>
            <h1>Event Details</h1>
            <p> This is team 1807's first time hosting an event and we couldn't be more excited! Our team has worked hard to make this a fun and exciting experience, and we hope to have created a welcoming enviornment for all. The event will be taking place at Allentown High School at <b>27 High Street Allentown NJ</b>, on <b>March 8-10</b>. We look forwards to seeing you there!
            </p>
          </div>
          <div className="event__section-image">
            <img src={VisionImage} alt="Summary" />
          </div>
        </div>
      </section>

      <section className="event__teams">
      <div className="container event__teams-container">
      <div className="event__section-content">
         <h1>Teams Attending</h1>
          <h3><span id="team">25</span> Raider Robotix</h3>
          <h3><span id="team">103</span> Cybersonics</h3>
          <h3><span id="team">293</span> SPIKE</h3> 
          <h3><span id="team">555</span> Montclair Robotics</h3>
          <h3><span id="team">834</span> SparTechs</h3>
          <h3><span id="team">1626</span> Falcon Robotics</h3>
          <h3><span id="team">1807</span> Redbird Robotics</h3>
          <h3><span id="team">1923</span> The MidKnight Inventors</h3>
          <h3><span id="team">2016</span> Mighty Monkey Wrenches</h3>
          <h3><span id="team">2180</span> Zero Gravity</h3>
          <h3><span id="team">2191</span> Flux Core</h3>
          <h3><span id="team">2495</span> Hive Mind</h3> 
          <h3><span id="team">2554</span> The WarHawks</h3>
          <h3><span id="team">2577</span> Pingry Robotics</h3>
        </div>
        <div className='event__section-content' id="teams">
          <h1>&#8203;</h1>
          
          <h3><span id="team">3340</span> Union City MagneGeeks</h3>
          <h3><span id="team">3515</span> Pneubotic Mustangs</h3>
          <h3><span id="team">4573</span> Rambotics</h3>
          <h3><span id="team">4652</span> Ironmen 2</h3>
          <h3><span id="team">4653</span> Ironmen Robotics</h3>
          <h3><span id="team">5624</span> TIGER TECH Robotics</h3>
          <h3><span id="team">5666</span> Purple Lightning</h3>
          <h3><span id="team">6897</span> Astraea Robotics</h3>
          <h3><span id="team">8588</span> Tech Devils</h3>
          <h3><span id="team">8628</span> Newark School of Global Studies</h3>
          <h3><span id="team">8707</span> The Newark Circuit Breakers</h3>
          <h3><span id="team">9015</span> Questionable Engineering</h3>
          <h3><span id="team">9100</span> Robo Roses</h3>

        </div>
      </div>
    </section>

    <section className="pagesdirect">
        <div className="container pagesdirect">
          <SectionHead icon={<FaRobot/>} title="EVENT INFORMATION"/>
        <div className="event__wrapper">
           <Card className="pages__page" key="1">
                  <span><FaRobot/></span>
                  <h4>Schedule</h4>
                  <small>Check out the schedule for all competition days</small>
                  <a href="https://www.firstinspires.org/sites/default/files/uploads/frc/2024-events/2024_NJALL_Agenda.pdf" target="_blank" rel="noreferrer noopener" className="btn sm">View<AiFillCaretRight/></a>
                </Card>
                {/* <Card className="pages__page" key="1">
                  <span><FaRobot/></span>
                  <h4>Volunteer</h4>
                  <small>Sign up to volunteer for our District Event</small>
                  <a href="https://www.canva.com/design/DAF8DOWR5kI/lUihT8B-X330oW9JmaKxkA/view?utm_content=DAF8DOWR5kI&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" rel="noreferrer noopener" className="btn sm">View<AiFillCaretRight/></a>
                </Card> */}
                <Card className="pages__page" key="2">
                  <span><FaRobot/></span>
                  <h4>Information Packet</h4>
                  <small>Click to read more information about our event</small>
                  <a href="https://www.canva.com/design/DAF8DOWR5kI/lUihT8B-X330oW9JmaKxkA/view?utm_content=DAF8DOWR5kI&utm_campaign=designshare&utm_medium=link&utm_source=editor" target="_blank" rel="noreferrer noopener" className="btn sm">View<AiFillCaretRight/></a>
                </Card>
          </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Event
import {FaRobot} from 'react-icons/fa'
import SectionHead from './SectionHead'
import {pagesdirectevent} from '../data.js'
import Card from '../UI/Card'
import {AiFillCaretRight} from 'react-icons/ai'


const PagesDirectEvent = () => {
  return (
    <section className="pagesdirect">
        <div className="container pagesdirect">
          <SectionHead icon={<FaRobot/>} title="EVENT INFORMATION"/>
        <div className="pages__wrapper">
           <Card className="pages__page" key="1">
                  <span><FaRobot/></span>
                  <h4>Schedule</h4>
                  <small>Check out the schedule for all competition days</small>
                  <a href="https://www.firstinspires.org/sites/default/files/uploads/frc/2024-events/2024_NJALL_Agenda.pdf" rel="noreferrer noopener" className="btn sm">View<AiFillCaretRight/></a>
                </Card>
                <Card className="pages__page" key="1">
                  <span><FaRobot/></span>
                  <h4>Volunteer</h4>
                  <small>Sign up to volunteer for our District Event</small>
                  <a href="*" rel="noreferrer noopener" className="btn sm">View<AiFillCaretRight/></a>
                </Card>
                <Card className="pages__page" key="1">
                  <span><FaRobot/></span>
                  <h4>Information Packet</h4>
                  <small>Please read our regulations below</small>
                  <a href="./welcomepacket.pdf"rel="noreferrer noopener" className="btn sm">View<AiFillCaretRight/></a>
                </Card>
          {/* {
            pagesdirectevent.map(({id, icon, title, info, url}) => {
              return (
                <Card className="pages__page" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{info}</small>
                  <Link to={url} className="btn sm">View<AiFillCaretRight/></Link>
                </Card>
              )
            })
          } */}
          </div>
        </div>
    </section>
  )
}

export default PagesDirectEvent
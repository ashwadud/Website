import Header from '../../components/Header'
import HeaderImage from '../../images/teampicture.jpg'
import StoryImage from '../../images/about/circle2.JPG'
import MissionImage from '../../images/about/circle3.JPG'
import SumImage from '../../images/about/SummaryImage.JPG'

import Footer from '../../components/Footer'

import './about.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Scroll down to read about our history and how we built our team from the start.
    </Header>
    <section className="about__vision">
        <div className="container about__vision-container">
          <div className='about__section-content'>
            <h1>Team Summary</h1>
            <p>Located at Allentown High School in Allentown, New Jersey, Redbird Robotics was formed by an enthusiastic father in 2006. The team started with 16 students and 4 mentors. We have now tripled in size, consisting of 47 dedicated students and 14 mentors. During our rookie year, we received sponsorships from 3 companies and organizations. For the 2022 season, we have 11 corporate sponsorships and organizations. The majority of our 2021 sponsors have carried into the 2022 season, along with 2 new corporate sponsorships.</p>
            <p>Along with the increase of sponsors, our team has also greatly increased outreach efforts. Some of our outreach projects include leading multiple FIRST LEGO League teams, helping Girl Scout Troops earn their Programming Badge, annual robot demonstrations at our local elementary school’s STEM nights and local middle schools, installing a new LEGO Wall at our local elementary school. Our team is currently working on organizing more outreach programs in order to expose more young students to STEM. Our goal is to inform more people about the importance of STEM in education and the impact that FIRST has had on students all over the world.</p>
          </div>
          <div className="about__section-image" id="1">
            <img src={SumImage} alt="Summary" />
          </div>
        </div>
      </section>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Story" />
        </div>
        <div className='about__section-content'>
          <h1>Our History</h1>
          <p>In 2006, our founders had a goal.  He wanted to start a First Robotics Team in Allentown High School in order to create an activity his son could partake in and enjoy. However, Mr. Nalbone did more than that; he created a community in Allentown High School diverse in skills and hobbies, but unified in STEAM (Science, Technology, Engineering, Arts, Mathematics).</p>
        </div>
      </div>
    </section>

    <section className="about__vision">
      <div className="container about__vision-container">
        <div className='about__section-content'>
          <h1>Mission Statement</h1>
          <p>Our mission is to inspire students with a passion for exploring STEAM and other aspects of <i>FIRST</i> by encouraging them to be innovative thinkers. Our team aspires to instill the confidence, leadership, and communication skills in our members, essential for success in <i>FIRST</i> and in their future careers. We accomplish this all while following our motto: Simple. Robust. Reliable. </p>
        </div>
        <div className="about__section-image">
          <img src={MissionImage} alt="Vision" />
        </div>
      </div>
    </section>

    <Footer/>
    </>
  )
}

export default About
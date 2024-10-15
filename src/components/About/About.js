import React from 'react'
import './About.css'
import ACMLogo from '../../assets/images/ACM_Logo.png'
import AnimalLogo from '../../assets/images/animal.png'

const About = () => {
  const sponsors = [
    {
      name: "ACM",
      logo: ACMLogo,
      link: "#"
    },
    {
      name: "ANIMAL",
      logo: AnimalLogo,
      link: "#"
    },
    {
      name: "ACM",
      logo: ACMLogo,
      link: "#"
    },
    {
      name: "ANIMAL",
      logo: AnimalLogo,
      link: "#"
    },
    {
      name: "ACM",
      logo: ACMLogo,
      link: "#"
    },
    {
      name: "ANIMAL",
      logo: AnimalLogo,
      link: "#"
    },
  ]
  return (
    <>
      <h1 className="about-heading">About Us!</h1>
      <div className="about-page">
        <div className="about-content">
          <p className="about-subtext">
            We are a group of students at Seattle University interested in making apps and spreading more information about the tech world! As a sub-section of Seattle U's Association for Computer Machinery, we promote inclusivity, foster learning opportunities, and encourage teamwork across a different variety of subjects!
          </p>
          <p className="about-subtext">
            Our main goal of this hackathon is to spread awareness about technological products and encourage creativity, collaboration, and development of new ideas that can potentially affect the future!
          </p>
          <p className="about-subtext">
            This year, we plan to collaborate with several other organizations on-campus such as the Biology Club, the Nursing Cohort of Seattle U, Psi Chi, and many others to influence and mentor our Applied Science Track! Additionally, we plan to collaborate with the MOSAIC center as well as SEAC SU to influence and mentor our Human Connectivity Tracks. Finally, we are planning major events with the AI & ML club (ANIMAL) to potentially sponsor and judge specific projects using AI/ML as a key component!
          </p>
        </div>
        <div className="sponsors-grid">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="sponsor-item">
              <a href={sponsor.link}>
                <img src={sponsor.logo} alt={sponsor.name} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default About
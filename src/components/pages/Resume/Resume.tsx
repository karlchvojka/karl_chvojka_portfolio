// Framework Imports
import React from 'react'

// Library Imports
import { Link } from "react-router-dom";

// CSS Imports
import StyledResume from './StyledResume'

// Data Imports
import resume from 'globalAssets/data/resume'
import skills from 'globalAssets/data/skills'

/**
 * This the Resume component.
 */
const Resume = () => {
  return (
    <StyledResume>
      <section className='controls'>
        <p>To save as pdf:&nbsp;&nbsp; 1. Right click, click 'Print'&nbsp;&nbsp; 2. Change Destination to 'Save as PDF'&nbsp;&nbsp; 3. Press Save</p>
        <Link to="/">Go Back</Link>
      </section>
      <section className='contacts'>
        <h1>Karl Chvojka</h1>
        <h2>Front End Web Developer</h2>
        <p>Portfolio: <a href="http://karlchvojka.com">karlchvojka.com</a></p>
        <p>Github: <a href="https://github.com/karlchvojka">https://github.com/karlchvojka</a></p>
        <p>Linkedin: <a href="https://www.linkedin.com/in/karlchvojka/">https://www.linkedin.com/in/karlchvojka/</a></p>
        <p>Email: <a href="mailto:karl.chvojka@protonmail.com">karl.chvojka@protonmail.com</a></p>
      </section>
      <section className='profile'>
        <h2>Profile</h2>
        <p>I am a Fullstack Web Developer with 10 Years of industry experience building websites, being part of advertising campaigns, interacting with traditional media, and working in teams of people from a variety of disciplines. I specialize in Frontend Technologies (JavaScript, Responsive design libraries, React, HTML5, CSS3) with knowledge and understanding of backend Technologies (Node.js,  Ruby on Rails, Relational and Document databases like PostgreSQL, MongoDB, mySQL, etc). </p>
        <p>I also have experience in Project Management, project budgeting, SEO techniques, Online and Traditional advertising, web, graphic, and traditional media design, and how all the parts can work together in an advertising campaign.</p>
      </section>
      <section className='workExp'>
        <h2>Work Experience</h2>
        {
          resume.workExperience.placements.map(( place, index) => (
            <section className='workplace'>
              <h3>{place.company}</h3>
              <section className='workplaceHeader'>
                <h4>{place.position}</h4>
                <p>{place.dates}</p>
              </section>
              <p className='keywords'><span>Noteable Keywords:</span> { place.keywords.map((keyword, index) => (`${keyword}, ` )) }</p>
              <p>{place.desc}</p>
            </section>
          ))
        }
      </section>
      <section className='skills'>
        <h2>Notable Skills</h2>
        <section className='skillsWrap'>
          {
            skills.map(( section, index ) => (
              <section className={section.title.replace(/\s/g, '')} key={section.key + index}>
                <h3>{section.title}</h3>
                <p>
                  {section.skillList.map((skill, index) => (<span>{skill.title + ', '}</span>))}
                </p>
              </section>
            ))
          }
        </section>
      </section>
      <section className='education'>
        <h2>Education</h2>
        <section className='edItem'>
          <h3>Lighthouse Labs, Toronto</h3>
          <section className='edHeader'>
            <h4>Web Development Bootcamp</h4>
            <p>APR 2019 - JUNE 2019</p>
          </section>
          <p>The Web Development Bootcamp is a 12 week, 40+ hours/week bootcamp. It covers the most popular and marketable languages and frameworks used in Web Development today.</p>
          <p>The topics covered are: JavaScript, Node.js, Express, PostgreSQL, MongoDB, React, Ruby on Rails, Automated Testing, and Computer Science Fundamentals.</p>
        </section>
        <section className='edItem'>
          <h3>EDMONTON ARTS COLLEGE</h3>
          <section className='edHeader'>
            <h4>DIGITAL MEDIA PRODUCTION PROGRAM</h4>
            <p>June 2010</p>
          </section>
          <p>Topics Covered: Education, Student Instruction, Front End Development (HTML5, CSS3), JavaScript, jQuery, Wordpress, Drupal, Joomla!, Design Interpretation, Career Guidence</p>
        </section>
      </section>
    </StyledResume>
  )
}

export default Resume

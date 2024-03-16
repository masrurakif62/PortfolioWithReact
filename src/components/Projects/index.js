import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From desktop apps to mobile apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'desktop' ?
            <ToggleButton active value="desktop" onClick={() => setToggle('desktop')}>DESKTOP</ToggleButton>
            :
            <ToggleButton value="desktop" onClick={() => setToggle('desktop')}>DESKTOP</ToggleButton>
          }
          <Divider />
          {toggle === 'mobile' ?
            <ToggleButton active value="mobile" onClick={() => setToggle('mobile')}>MOBILE</ToggleButton>
            :
            <ToggleButton value="mobile" onClick={() => setToggle('mobile')}>MOBILE</ToggleButton>
          }
          <Divider />
          {toggle === 'other' ?
            <ToggleButton active value="other" onClick={() => setToggle('other')}>OTHER</ToggleButton>
            :
            <ToggleButton value="other" onClick={() => setToggle('other')}>OTHER</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
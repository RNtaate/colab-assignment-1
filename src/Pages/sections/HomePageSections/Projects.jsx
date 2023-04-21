import React from 'react'

import ProjectCard from '../../../components/ProjectCard'
import styles from '../../../styles/Projects.module.css'
import runnerImage from '../../../assets/endless-runner.png'
import norpgramImage from '../../../assets/norpgram.png'
import norpmoviesImage from '../../../assets/norp_movies.png'
import { projectsData } from '../../../services/projects'

export default function Projects() {
  const projectImages = [runnerImage, norpgramImage, norpmoviesImage]

  return (
    <section className={`bg-secondary text-center`}>
      <h2>PORTFOLIO</h2>
      <div className={`${styles.projectsContainer}`}>
        {projectsData.map((project) => {
          return <ProjectCard key={project.title} project={project} />
        })}
      </div>
    </section>
  )
}

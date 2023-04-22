import React from 'react'

import ProjectCard from '../../../components/ProjectCard'
import styles from '../../../styles/Projects.module.css'
import { projectsData } from '../../../services/projects'

export default function Projects() {
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

import React from 'react'

import Header from './sections/HomePageSections/Header'
import WhatIDo from './sections/HomePageSections/WhatIDo'
import Projects from './sections/HomePageSections/Projects'
import Contact from './sections/HomePageSections/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <WhatIDo />
      <Projects />
      <Contact />
    </>
  )
}

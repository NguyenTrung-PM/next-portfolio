import Intro from '~/src/components/Intro'
import SectionDivider from '~/src/components/SectionDivider'
import About from '~/src/components/About'
import Projects from '~/src/components/Projects'
import Skills from '~/src/components/Skills'
import Experience from '~/src/components/Experience'

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4 pt-28 sm:pt-36">
            <Intro />
            <SectionDivider />
            <About />
            <Projects />
            <Skills />
            <Experience />
        </main>
    )
}

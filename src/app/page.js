import Intro from '~/src/components/Intro'
import SectionDivider from '~/src/components/SectionDivider'
import About from '~/src/components/About'
import Projects from '~/src/components/Projects'
import Skills from '~/src/components/Skills'

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4">
            <Intro />
            <SectionDivider />
            <About />
            <Projects />
            <Skills />
        </main>
    )
}

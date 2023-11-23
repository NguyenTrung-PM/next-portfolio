import Intro from '~/src/components/Intro'
import SectionDivider from '~/src/components/SectionDivider'
import About from '~/src/components/About'

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4">
            <Intro />
            <SectionDivider />
            <About />
        </main>
    )
}

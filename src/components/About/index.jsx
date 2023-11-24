'use client'

import { motion } from 'framer-motion'
import React from 'react'
import SectionHeading from '~/src/components/SectionHeading'
import { useSectionInView } from '~/src/lib/hooks'

function About() {
    const { ref } = useSectionInView('About', 0.8)

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="text-center font-medium">Greetings</p>
            <p className="mb-3 ">
                <span className="font-medium">I&apos;m Nguyễn Ngọc Trung, </span>a proficient Fullstack Developer. I
                hold a degree with distinction from Ho Chi Minh University of Agriculture and Forestry. My expertise
                lies in Java 8, where I possess a robust understanding. Additionally, I am well-versed in HTML, CSS,
                JavaScript, Git, SQL and Java Swing. I have explored several front-end frameworks, including Angular,
                Reactjs, and Nextjs. I am actively engaged in updating and enhancing my skills in these frameworks. On
                the back-end, I have gained valuable experience working with Spring Boot.
            </p>
            <p>
                During my 7-month internship at DXC VietNam, I underwent intensive training in Java and various tools
                pivotal to the company&apos;s projects. This experience provided me with a profound understanding of
                professional work processes and environments. I acquired efficient work practices from seasoned
                colleagues, contributing to my continuous professional development.
            </p>
        </motion.section>
    )
}

export default About

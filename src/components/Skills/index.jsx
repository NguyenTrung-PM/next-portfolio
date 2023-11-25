'use client'

import React from 'react'
import SectionHeading from '~/src/components/SectionHeading'
import { skillsData } from '~/src/lib/data'
import { useSectionInView } from '~/src/lib/hooks'
import { motion } from 'framer-motion'

const fadeAnimationVars = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * i
        }
    })
}

function Skills() {
    const { ref } = useSectionInView('Skills')
    return (
        <section ref={ref} id="skills" className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
            <SectionHeading>Skills</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {skillsData.map((s, i) => (
                    <motion.li
                        className="bg-white border border-black/[0.1] rounded-xl px-5 py-3"
                        key={i}
                        variants={fadeAnimationVars}
                        initial="initial"
                        whileInView="animate"
                        transition="transition"
                        viewport={{ once: true }}
                        custom={i}
                    >
                        {s}
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}

export default Skills

'use client'

import React from 'react'
import SectionHeading from '~/src/components/SectionHeading'
import { useSectionInView } from '~/src/lib/hooks'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiencesData } from '~/src/lib/data'
import { useTheme } from '~/src/context/theme-context'

function Experience() {
    const { ref } = useSectionInView('Experience')
    const { theme } = useTheme()
    return (
        <section ref={ref} id="experience" className="min-w-[22rem] max-w-[82rem] w-full scroll-mt-28 mb-28 sm:mb-40">
            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline lineColor="">
                {experiencesData.map((e, i) => {
                    return (
                        <React.Fragment key={i}>
                            <VerticalTimelineElement
                                visible={true}
                                contentStyle={{
                                    background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                                    boxShadow: 'none',
                                    border: '1px solid rgba(0, 0, 0, 0.05)',
                                    textAlign: 'left',
                                    padding: '1.3rem 2rem'
                                }}
                                contentArrowStyle={{
                                    borderRight:
                                        theme === 'light'
                                            ? '0.4rem solid #9ca3af'
                                            : '0.4rem solid rgba(255, 255, 255, 0.5)'
                                }}
                                iconStyle={{
                                    background: theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
                                    fontSize: '1.5rem'
                                }}
                                date={e.date}
                                icon={e.icon}
                            >
                                <h3 className="font-semibold capitalize">{e.title}</h3>
                                <p className="font-normal !mt-0">{e.location}</p>
                                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{e.description}</p>
                            </VerticalTimelineElement>
                        </React.Fragment>
                    )
                })}
            </VerticalTimeline>
        </section>
    )
}

export default Experience

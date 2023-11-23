import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import corpcommentImg from '~/public/corpcomment.png'
import rmtdevImg from '~/public/rmtdev.png'
import wordanalyticsImg from '~/public/wordanalytics.png'

export const links = [
    {
        name: 'Home',
        hash: '#home'
    },
    {
        name: 'About',
        hash: '#about'
    },
    {
        name: 'Projects',
        hash: '#projects'
    },
    {
        name: 'Skills',
        hash: '#skills'
    },
    {
        name: 'Experience',
        hash: '#experience'
    },
    {
        name: 'Contact',
        hash: '#contact'
    }
]

export const experiencesData = [
    {
        title: '',
        location: '',
        description: '',
        icon: React.createElement(),
        date: ''
    }
]

export const projectsData = [
    {
        title: 'CorpComment',
        description: 'I worked as a full-stack developer.',
        tags: ['React', 'Next.js', 'Framer motion', 'Tailwind', 'Java'],
        imageUrl: corpcommentImg
    },
    {
        title: 'rmtDev',
        description: 'I interned at DXC for a period of 7 months.',
        tags: ['Java', 'Spring boot', 'HTML', 'CSS', 'JS', 'DXC Framework'],
        imageUrl: rmtdevImg
    },
    {
        title: 'Word Analytics',
        description: 'I have created an encryption application with Java Swing.',
        tags: ['Java', 'Swing', 'Intellij theme'],
        imageUrl: wordanalyticsImg
    }
]

export const skillsData = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Git',
    'Tailwind',
    'Java',
    'Spring-Boot',
    'MongoDB',
    'Redux',
    'Framer Motion'
]

import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import nextImg from '~/public/nextportfolio.png'
import dataImg from '~/public/data.png'
import dxcImg from '~/public/dxc.png'
import organicaImg from '~/public/organica.jpeg'

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
        title: 'Next portfolio',
        description: 'I build my portfolio with Nextjs',
        tags: ['React', 'Nextjs', 'Framer motion', 'Tailwind', '...'],
        imageUrl: nextImg
    },
    {
        title: 'DXC framework',
        description: 'I interned at DXC for a period of 7 months and work with framework',
        tags: ['Java', 'Spring boot', 'HTML', 'CSS', 'JS', 'DXC Framework', '...'],
        imageUrl: dxcImg
    },
    {
        title: 'Data Encryption',
        description: 'I have created an encryption application with Java Swing.',
        tags: ['Java', 'Swing', 'Intellij theme', 'Bouncy castle', '...'],
        imageUrl: dataImg
    },
    {
        title: 'Organica website clone',
        description: 'I worked as a full-stack developer.',
        tags: ['Angular', 'Java', '...'],
        imageUrl: organicaImg
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

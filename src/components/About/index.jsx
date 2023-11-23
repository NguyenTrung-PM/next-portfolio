'use client'

import { motion } from 'framer-motion'
import React from 'react'
import SectionHeading from '~/src/components/SectionHeading'

function About() {
    return (
        <motion.section
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3 ">
                <span className="font-medium">Lorem ipsum</span> dolor sit amet consectetur adipisicing elit. Alias
                saepe minima optio soluta inventore quaerat, porro ratione ipsum facilis numquam enim pariatur quod
                similique eveniet expedita deserunt vitae odio sunt magnam perferendis necessitatibus maxime. Nesciunt
                soluta placeat fuga illo sed, ut itaque deleniti error suscipit eius quis eaque iure asperiores.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem atque veniam tenetur commodi! Dicta,
                eos est totam assumenda nulla consequatur illum. Minus doloribus ratione expedita itaque quos placeat
                pariatur ab omnis numquam possimus neque perspiciatis quidem harum velit asperiores voluptates, aliquam
                quas corporis cupiditate? Consequuntur libero consequatur perspiciatis voluptate ex ipsa dicta, at
                nobis, architecto placeat, ad doloribus magnam optio. Quod perferendis vel dolorem, harum commodi animi
                cupiditate quia tempora corporis id ut perspiciatis enim laborum delectus dignissimos asperiores
                ratione?
            </p>
        </motion.section>
    )
}

export default About

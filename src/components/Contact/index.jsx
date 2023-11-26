'use client'

import { motion } from 'framer-motion'
import React from 'react'
import SectionHeading from '~/src/components/SectionHeading'
import { useSectionInView } from '~/src/lib/hooks'
import { sendEmail } from '~/src/actions/sendEmail'
import SubmitBtn from '~/src/components/Submit-btn'
import toast from 'react-hot-toast'

function Contact() {
    const { ref } = useSectionInView('Contact', 0.8)

    return (
        <motion.section
            ref={ref}
            id="contact"
            className="mb-28 sm:mb-28 scroll-mt-28 w-[min(100%,38rem)] text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <SectionHeading>Contact Me</SectionHeading>
            <p className="text-gray-700 -mt-6">
                Please contact me directly at{' '}
                <a className="underline" href="Mailto:example@gmail.com">
                    example@gmail.com
                </a>{' '}
                or through this form
            </p>

            <form
                className="mt-10 flex flex-col"
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData)

                    if (error) {
                        toast.error(error)
                        return
                    }

                    toast.success('Email sent successfully!')
                }}
            >
                <input
                    type="email"
                    className="h-14 rounded-lg borderBlack px-4"
                    placeholder="Your email"
                    required={true}
                    maxLength={500}
                    name="senderEmail"
                />
                <textarea
                    className="h-52 my-3 p-4 rounded-lg borderBlack"
                    placeholder="Your message"
                    required={true}
                    maxLength={1000}
                    name="message"
                />
                <SubmitBtn />
            </form>
        </motion.section>
    )
}

export default Contact

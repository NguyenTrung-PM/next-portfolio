'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosCall } from 'react-icons/io'
import { GrDocumentDownload } from 'react-icons/gr'
import { FaSquareFacebook } from 'react-icons/fa6'
import { FaSquareGithub } from 'react-icons/fa6'
import { useSectionInView } from '~/src/lib/hooks'

function Intro() {
    const { ref } = useSectionInView('Home', 0.5)
    return (
        <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'tween', duration: 0.2 }}
                    >
                        <Image
                            src="/avt.jpg"
                            alt="Old Plane"
                            width={192}
                            height={192}
                            quality={100}
                            priority={true}
                            className="h-36 w-36 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 125, delay: 0.2, duration: 0.8 }}
                    >
                        <Image
                            src="/icon-verify.png"
                            alt="verified"
                            width={52}
                            height={52}
                            quality={100}
                            priority={true}
                            className="absolute bottom-0 right-0"
                        />
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] flex flex-col gap-2"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <p className="font-bold sm:text-4xl">Hi, I&apos;m NguyenTrungPM</p>
                <p className="font-bold sm:text-3xl">I&apos;m a Fullstack Developer with 2 years experience</p>
                <p className="sm:text-3xl">I enjoy building sites & app. Focus in Java and React</p>
            </motion.div>

            <motion.div
                className="flex flex-col sm:flex-row item-center justify-center gap-2 text-lg font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <Link
                    href="#contact"
                    className="group bg-gray-900 text-white justify-center px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 hover:bg-gray-950 active:scale-100 transition"
                >
                    Contact me <IoIosCall className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>
                <a
                    className="group bg-white text-gray-700 justify-center px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 active:scale-100 transition cursor-pointer border border-black/10"
                    href="/CV.pdf"
                    download
                >
                    Download CV <GrDocumentDownload className="opacity-70 group-hover:translate-x-1 transition" />
                </a>
                <a
                    className="bg-white p-4 text-gray-700 flex items-center justify-center gap-2 sm:w-[3.25rem] h-[3.25rem] rounded-full hover:scale-105 hover:text-gray-900 active:scale-100 transition cursor-pointer border border-black/10"
                    href="https://www.facebook.com/profile.php?id=100011667645177"
                    target="_blank"
                >
                    <FaSquareFacebook />
                </a>
                <a
                    className="bg-white p-4 text-gray-700 flex items-center justify-center gap-2 sm:w-[3.25rem] h-[3.25rem] rounded-full hover:scale-105 hover:text-gray-900 active:scale-100 transition cursor-pointer border border-black/10"
                    href="https://github.com/NguyenTrung-PM"
                    target="_blank"
                >
                    <FaSquareGithub />
                </a>
            </motion.div>
        </section>
    )
}

export default Intro

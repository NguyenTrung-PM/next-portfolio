import { Inter } from 'next/font/google'
import './globals.css'

import Header from '~/src/components/Header'
import ActiveSectionContextProvider from '~/src/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '~/src/components/Footer'
import ThemeSwitch from '~/src/components/ThemeSwitch'
import ThemeContextProvider from '~/src/context/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'NguyenTrungPM',
    description: 'My portfolio'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body className={`${inter.className} bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
                <div className="bg-[hsl(358,76%,94%)] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
                <div className="bg-[hsl(247,82%,91%)] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
                <ThemeContextProvider>
                    <ActiveSectionContextProvider>
                        <Header />
                        {children}
                        <Footer />

                        <Toaster position="top-right" />
                        <ThemeSwitch />
                    </ActiveSectionContextProvider>
                </ThemeContextProvider>
            </body>
        </html>
    )
}

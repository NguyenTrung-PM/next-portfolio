import { Inter } from 'next/font/google'
import './globals.css'

import Header from '~/src/components/Header'
import ActiveSectionContextProvider from '~/src/context/active-section-context'
import { Toaster } from 'react-hot-toast'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'NguyenTrungPM',
    description: 'My portfolio'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body className={`${inter.className} bg-gray-50 text-gray-950`}>
                <div className="bg-[hsl(358,76%,94%)] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
                <div className="bg-[hsl(247,82%,91%)] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
                <ActiveSectionContextProvider>
                    <Header />
                    {children}
                    <Toaster />
                    <Footer />
                </ActiveSectionContextProvider>
            </body>
        </html>
    )
}

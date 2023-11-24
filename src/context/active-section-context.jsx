'use client'

import { createContext, useContext, useState } from 'react'

const ActiveSectionContext = createContext(null)

function ActiveSectionContextProvider({ children }) {
    const [activeSection, setActiveSection] = useState('Home')
    // use this to keep track the observer temporarily when user click on a link
    const [timeOfLastClick, setTimeOfLastClick] = useState(0)

    return (
        <ActiveSectionContext.Provider
            value={{
                activeSection,
                setActiveSection,
                timeOfLastClick,
                setTimeOfLastClick
            }}
        >
            {children}
        </ActiveSectionContext.Provider>
    )
}

function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext)

    if (context === null) {
        throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider')
    }

    return context
}

export default ActiveSectionContextProvider
export { ActiveSectionContext, useActiveSectionContext }

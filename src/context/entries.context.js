import React, { useState, createContext, useContext } from 'react'


const EntriesContext = createContext({ entries: {} })

// const ENDPOINT = "https://api.publicapis.org/entries"

function EntriesContextProvider({ children }) {

    const [entries] = useState([])
    let items = [];

    // useItemFetch({ })

    return (
        <EntriesContext.Provider value={{ entries, items, count: items.length }}>
            {children}
        </EntriesContext.Provider>
    )
}

export const useEntriesContext = () => useContext(EntriesContext)

export default EntriesContextProvider
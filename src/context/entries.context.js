import React, { useState, useEffect, createContext, useContext } from 'react'
import axios from 'axios'


const EntriesContext = createContext({ entries: [] })

const ENDPOINT = "https://api.publicapis.org/entries"

function EntriesContextProvider({ children }) {
    const [entries, setEntries] = useState([])

    useEffect(() => {
        (async function fetchData(){
            const result = await axios(ENDPOINT, {})
            .then((res) => res.data)
            .catch((error) => console.log("error caught 404"))

            if(!result){
                return
            }

            setEntries(result)
        })()
    }, [entries])


    return (
        <EntriesContext.Provider value={{ entries }}>
            {children}
        </EntriesContext.Provider>
    )
}

export const useEntriesContext = () => useContext(EntriesContext)

export default EntriesContextProvider
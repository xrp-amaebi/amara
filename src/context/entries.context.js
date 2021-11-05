import React, { useState, useEffect, createContext, useContext } from 'react'
import axios from 'axios'

const EntriesContext = createContext({ entries: {} })

// const ENDPOINT = "https://api.publicapis.org/entries"
const _ENDPOINT = "https://api.monday.com/v2"

// let query = '{boards(ids: 1832485672) { name id description items { name column_values{title id type text } } } }';
// let query = '{boards(ids: 1832485672) { items{ name } views { id name type  } }}';
let query = '{boards(ids: 1832485672) { items(limit: 3){ name  column_values{ id text title type value } } }}';

function EntriesContextProvider({ children }) {
    const [entries, setEntries] = useState([])
    const [items, setItems] = useState([])

    useEffect(() => {
        (async function fetchData(){
            const result = await axios({
                method: "POST",
                url: _ENDPOINT,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjk5ODEwOTY1LCJ1aWQiOjE1MzUwNTMzLCJpYWQiOiIyMDIxLTAyLTE2VDEyOjE3OjQ1LjAwMFoiLCJwZXIiOiJtZTp3cml0ZSIsImFjdGlkIjo0MjU4MjgwLCJyZ24iOiJ1c2UxIn0.wrR7q2mQTPRJ8tOzSN2IVLDG81DJ_d-VxRkpSPSLZ2M"
                },
                data: JSON.stringify({
                    "query": query
                })
            })
            .then((res) => res.data)
            .catch((error) => console.log("error caught 404"))

            if(!result){
                return
            }
            
            setEntries(result)

        })()

        entries.data && setItems(entries.data['boards'][0]['items'])
        
    }, [entries])


    return (
        <EntriesContext.Provider value={{ entries, items, count: items.length }}>
            {children}
        </EntriesContext.Provider>
    )
}

export const useEntriesContext = () => useContext(EntriesContext)

export default EntriesContextProvider
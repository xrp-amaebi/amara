import { EntryCard } from "../EntryCard";
import {  Container } from "./style"

export function Results({ entries, state, isSearch, setIsSearchCount }){

    function selectEntries(_entries, { text }) {

        if(!entries){
            return
        }
        
        const saveCount = _entries.filter(link => link ? link["Category"].toLowerCase().includes(text.toLowerCase()) : 'none');
        setIsSearchCount(saveCount.length)
        return saveCount
    }

    if(isSearch){
        return(
            <Container>
                {
                    selectEntries.length === 0 || state.text === '' ?
                    <p></p>
                :
                    selectEntries(entries, state).map((link, key) => <EntryCard key={key} {...link} />)
                }
            </Container>
        )
    } else {
        return(
            <Container>
                {
                    entries.length > 0 && entries.map((items, key) => <EntryCard {...items } key={key}/>)
                }
            </Container>
        )
    }
}
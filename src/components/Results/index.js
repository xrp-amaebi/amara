import { EntryCard } from "../EntryCard";
import {  Container } from "./style"

export function Results({ entries, state, isSearch }){

    function selectEntries(_entries, { text }) {

        if(!entries){
            return
        }
        
        return _entries.filter(link => link ? link["Category"].toLowerCase().includes(text.toLowerCase()) : 'none');
        
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
            <div className={"container"}>
                {
                    entries.length > 0 && entries.map((items, key) => <EntryCard {...items } key={key}/>)
                }
            </div>
        )
    }
}
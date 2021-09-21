import { EntrySearch, Input } from "./style"

export function Search({ placeholder, inputRef, onTextChange, searchCount }){

    return(
        <EntrySearch>
            <Input placeholder={placeholder} ref={inputRef} onChange={onTextChange} />
            <div><span>Search Results: </span>{searchCount}</div>
        </EntrySearch>
    )
}
import { EntrySearch, Input } from "./style"

export function Search({ placeholder, inputRef, onTextChange, searchCount, totalCount }){
    const total = !totalCount ? "N/A" : totalCount

    return(
        <EntrySearch>
            <Input placeholder={placeholder} ref={inputRef} onChange={onTextChange} />

            <div>
                <span>TotalItems: {total} </span><br/>
                <span>Search Results: </span>{searchCount}
            </div>
        </EntrySearch>
    )
}
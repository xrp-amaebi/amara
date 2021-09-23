import { EntrySearch, Input } from "./style"

export function Search({ placeholder, inputRef, onTextChange, searchCount, totalCount }){
    const total = !totalCount ? "N/A" : totalCount
    const _search = !searchCount ? "N/A" : searchCount

    return(
        <EntrySearch>
            <Input placeholder={placeholder} ref={inputRef} onChange={onTextChange} />

            <div>
                <span>TotalItems: {total} </span>
                <span>Search Results: {_search}</span>
            </div>
        </EntrySearch>
    )
}
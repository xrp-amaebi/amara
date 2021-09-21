import { EntrySearch, Input } from "./style"

export function Search({ placeholder, inputRef, onTextChange }){
    return(
        <EntrySearch>
            <Input placeholder={placeholder} ref={inputRef} onChange={onTextChange} />
        </EntrySearch>
    )
}

import { EntrySearch, Input, InputWrapper } from "./style"
import { FaGithub, FaSearch } from 'react-icons/fa'

export function Search({ placeholder, inputRef, onTextChange, searchCount, totalCount, setSearchFilter, checkEntries }){
    const total = !totalCount ? "N/A" : totalCount
    const _search = !searchCount ? "N/A" : searchCount

    function handleSearch(){
        checkEntries()
        console.log({ rest: "" })
    }

    return(
        <EntrySearch>
            <InputWrapper>
                <Input placeholder={placeholder} ref={inputRef} onChange={onTextChange} />
                <button onClick={handleSearch}><FaSearch size={"1.5em"} title="Search" /></button>
            </InputWrapper>
            <div>
                <span>TotalItems: {total} </span>
                <span>Search Results: {_search}</span>
            </div>
        </EntrySearch>
    )
}
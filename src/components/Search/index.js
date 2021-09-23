
import { EntrySearch, Input, InputWrapper, FilterButton } from "./style"
import { FaGithub, FaSearch } from 'react-icons/fa'
import { searchCriterion } from "../../utils/data.placeholders"

export function Search({ placeholder, inputRef, onTextChange, searchCount, totalCount, setSearchFilter, checkEntries }){
    const total = !totalCount ? "N/A" : totalCount
    const _search = !searchCount ? "N/A" : searchCount

    function handleSearch(){
        checkEntries()
    }

    function onFilter(){

        return(
            <div style={{ display: "flex" }}>
                {Object.keys(searchCriterion).map((item, key) => <FilterButton key={key} onClick={() => setSearchFilter(item)}>{item}</FilterButton>)}
            </ div>
        )
    }

    return(
        <EntrySearch>
            <InputWrapper>
                <Input placeholder={placeholder} ref={inputRef} onChange={onTextChange} />
                <button onClick={handleSearch}><FaSearch size={"1.5em"} title="Search" /></button>
            </InputWrapper>
            <div>
                <span>TotalItems: {total} </span>
                <span>{onFilter()}</span>
                <span>Search Results: {_search}</span>
            </div>
        </EntrySearch>
    )
}
import { useState } from 'react'
import { EntrySearch, Input, InputWrapper, FilterButton } from "./style"
import { FaSearch, FaBackward } from 'react-icons/fa'
import { searchCriterion } from "../../utils/data.placeholders"
import { collective } from '../../utils/build.functions'

export function Search({ 
    placeholder, inputRef, onTextChange, searchCount, totalCount, searchFilter, fetchCount,
    setSearchFilter, checkEntries, setIsSearch, setIsSearchCount
}){
    const [dot, setDot] = useState("")
    const total = !totalCount ? `Loading${collective.renderDots({ dot, setDot })}`: totalCount
    let _search = !searchCount ? `N/A` : searchCount

    function handleSearch(){
        checkEntries()
        // setPageNumber(1)
    }

    function handleReturn() {
        setIsSearch(prevState => !prevState)
        inputRef.current.value = ''
        setIsSearchCount(undefined)
    }

    function onFilter(){
        return(
            <div style={{ display: "flex" }}>
                {
                    Object.keys(searchCriterion).map((item, key) => {
                        return <FilterButton _active={searchFilter === item ? true : false} key={key} onClick={() => setSearchFilter(item)}>{item}</FilterButton>
                    })
                }
            </div>
        )
    }



    return(
        <EntrySearch>
            <InputWrapper>
                <Input placeholder={placeholder} ref={inputRef} onChange={onTextChange} />
                <button onClick={handleSearch}><FaSearch size={"1.5em"} title="Search" /></button>
            </InputWrapper>
            <div>
                <span>Source: {fetchCount}</span>
                <span>Available: {total}</span>
                <span style={{ cursor:"pointer" }} onClick={handleReturn}><FaBackward size={"1.5em"} title="Back to Items" /></span>
                <span>{onFilter()}</span>
                <span>Search Results: {_search}</span>
            </div>
        </EntrySearch>
    )
}


// filters
// const [pageNumber] =  useState(0)

    // function displayQuery(){
    //     let limit = searchFilter.toLowerCase() === "link" ? 3 : 5
    //     let _pagePosition = pageNumber * limit

    //     let list = {}
    //     queryText.map((item) => {
    //         list[item[searchFilter]] = !list[item[searchFilter]] ? 1 : list[item[searchFilter]] += 1
    //         return undefined
    //     })

    //     const queryList = Object.keys(list)
    //     return(
    //         queryList.slice(_pagePosition, _pagePosition + limit).map((item, key) => (
    //             <InfoSpan key={key} onClick={() => { inputRef.current.value = item; setFilter(item) }}>{item}</InfoSpan>
    //         ))
    //     )
    // }
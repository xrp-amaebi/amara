import { useState } from 'react'
import { EntrySearch, Input, InputWrapper, FilterButton } from "./style"
import { FaSearch } from 'react-icons/fa'
import { searchCriterion } from "../../utils/data.placeholders"

export function Search({ placeholder, inputRef, onTextChange, searchCount, totalCount, searchFilter, setSearchFilter, checkEntries, queryText, setFilter, setPageNumber }){
    const [dot, setDot] = useState("")

    const total = !totalCount ? `Loading${renderDots()}`: totalCount
    const _search = !searchCount ? `Loading${renderDots()}` : searchCount


    function renderDots(){
        const count = dot.length
        let extra = dot + "."
        setTimeout(() => {
            if(count === 3){
                extra = "."
                setDot(extra)
                return
            }
            setDot(extra)
        }, 1000)

        return(
            dot
        )
    }

    function handleSearch(){
        checkEntries()
        setPageNumber(1)
    }

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

    function onFilter(){
        return(
            <div style={{ display: "flex" }}>
                {Object.keys(searchCriterion).map((item, key) => <FilterButton _active={searchFilter === item ? true : false} key={key} onClick={() => setSearchFilter(item)}>{item}</FilterButton>)}
            </div>
        )
    }

    return(
        <EntrySearch>
            <InputWrapper>
                <Input placeholder={placeholder} ref={inputRef} onChange={onTextChange} />
                <button onClick={handleSearch}><FaSearch size={"1.5em"} title="Search" /></button>
            </InputWrapper>
            {/* <div>
                {displayQuery()}
            </div> */}
            <div>
                <span>TotalItems: {total} </span>
                <span>{onFilter()}</span>
                <span>Search Results: {_search}</span>
            </div>
        </EntrySearch>
    )
}
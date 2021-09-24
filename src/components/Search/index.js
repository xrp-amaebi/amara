import { useState } from "react";
import { EntrySearch, Input, InputWrapper, FilterButton, InfoSpan } from "./style"
import { FaSearch } from 'react-icons/fa';
import { searchCriterion } from "../../utils/data.placeholders"

export function Search({ placeholder, inputRef, onTextChange, searchCount, totalCount, searchFilter, setSearchFilter, isSearch, checkEntries, queryText, setFilter }){
    const total = !totalCount ? "N/A" : totalCount
    const _search = !searchCount ? "N/A" : searchCount

    function handleSearch(){
        checkEntries()
    }


    const [pageNumber] =  useState(0)


    function displayQuery(){

        let limit = searchFilter.toLowerCase() === "link" ? 3 : 5
        let _pagePosition = pageNumber * limit

        // if(isSearch){
          
        //     return (
        //         <p style={{ color: "#4c8bf5", border: "1px solid #4c8bf5", padding: "10px", borderRadius: "20px", marginLeft: "6px" }}>
        //             {"...father"}
        //         </p>
        //     )
        // }

        let list = {}
        queryText.map((item) => {
            list[item[searchFilter]] = !list[item[searchFilter]] ? 1 : list[item[searchFilter]] += 1
            return undefined
        })

        const queryList = Object.keys(list)
        return(
            <>
                {queryList.slice(_pagePosition, _pagePosition + limit).map((item, key) => <InfoSpan key={key} onClick={() => { inputRef.current.value = item; setFilter(item) }}>{item}</InfoSpan>
                )}
            </>
        )
    }

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
            <div>
                {displayQuery()}
            </div>
            <div>
                <span>TotalItems: {total} </span>
                <span>{onFilter()}</span>
                <span>Search Results: {_search}</span>
            </div>
            
        </EntrySearch>
    )
}
import { useRef, useReducer, useState } from 'react';
import { Search } from './components/Search';
import { Results } from './components/Results';
import { Socials } from "./components/Socials";
import { searchCriterion } from './utils/data.placeholders';

import useItemFetch from './hooks/useItemFetch';
import './App.css';

function App() {
  // const { items, count } = useEntriesContext()
  const [pageNumber, setPageNumber] =  useState(1)
  const { items, count, fetchCount, loading, error } = useItemFetch(pageNumber)

  console.log({ items, count, fetchCount }, "app,js")

  const actions = {
    FILTER_TEXT: "SET_FILTER"
  } 

  const initialState = { text: "" }

  function entryReducer(state, action) {
    switch(action.type){
      case actions.FILTER_TEXT: 
        return { ...state, text: action.payload.text }
      default:
        throw new Error("something's not right")
      ;
    }
  }

  function setFilter(target){

    dispatch({type: actions.FILTER_TEXT, payload: { text: target }})

  }
  
  const [state, dispatch]  = useReducer(entryReducer, initialState)

  const inputRef = useRef(null)
  const [isSearch, setIsSearch] = useState(false)

  const [searchCount, setIsSearchCount] = useState(0)
  const [filteredEntries, setFilteredEntries] = useState([])
  const [searchFilter, setSearchFilter] = useState("name")

  function selectEntries(_entries, { text }) {
    const saveCount = _entries.filter(link => link && link[searchFilter].toLowerCase().includes(text.toLowerCase()));
    setIsSearchCount(saveCount.length)
    setFilteredEntries(saveCount)
    return saveCount
  }

  function checkEntries() {
    if(count > 0) {
      selectEntries(items, state)
      setIsSearch(true)
      return
    }
  }

  const [query, setQuery] = useState([])
  function onTextChange(){
    if(inputRef.current && inputRef.current.value) {
      setFilter(inputRef.current.value)

      if(count){
        const _QUERY = items.filter(link => link && link[searchFilter].toLowerCase().includes(state.text.toLowerCase()));
        setQuery(_QUERY)
        return
      }

      return
    }
  }

  return (
    <div className="App">
      <div>
        <Search
          onTextChange={onTextChange}
          placeholder={searchCriterion[searchFilter]}
          inputRef={inputRef} 
          isSearch={isSearch}
          setIsSearch={setIsSearch}
          setSearchFilter={setSearchFilter}
          searchFilter={searchFilter}
          searchCount={searchCount}
          setIsSearchCount={setIsSearchCount}
          totalCount={count}
          fetchCount={fetchCount}
          checkEntries={checkEntries}
          queryText={query}
          setFilter={setFilter}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </div>
      <Results
        entries={filteredEntries}
        items={items}
        count={count}
        state={state}  
        isSearch={isSearch}
        setIsSearch={setIsSearch}
        selectEntries={selectEntries}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        loading={loading}
        error={error}
      />
      <Socials />
    </div>
  );
}

export default App;

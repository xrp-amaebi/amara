import { useRef, useReducer, useState } from 'react';
import { useEntriesContext } from './context/entries.context';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Search } from './components/Search';
import { Results } from './components/Results';
import { searchCriterion } from './utils/data.placeholders'

import './App.css';

function App() {
  const { entries:_entries } = useEntriesContext()
  const { entries: next, count } = _entries


  const actions = {
    FILTER_TEXT: "SET_FILTER"
  } 

  const initialState = { text: "" }

  function entryReducer(state, action){
    switch(action.type){
      case actions.FILTER_TEXT: 
        return { ...state, text: action.payload.text }
      default:
        throw new Error("something's not right")
      
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
  const [searchFilter, setSearchFilter] = useState("Category")


  function selectEntries(_entries, { text }) {
    const saveCount = _entries.filter(link => link ? link[searchFilter].toLowerCase().includes(text.toLowerCase()) : 'none');
    setIsSearchCount(saveCount.length)
    setFilteredEntries(saveCount)
    return saveCount
  }


  function checkEntries() {
    if(count) {
      selectEntries(next, state)
      setIsSearch(true)
      return
    }
  }

  function onTextChange(){
    if(inputRef.current && inputRef.current.value) {
      setFilter(inputRef.current.value)
      return
    }
  }


  return (
    <div className="App">
      <Search 
        onTextChange={onTextChange}
        placeholder={searchCriterion[searchFilter]}
        inputRef={inputRef} 
        isSearch={isSearch}
        setSearchFilter={setSearchFilter}
        setIsSearch={setIsSearch}
        searchCount={searchCount}
        setIsSearchCount={setIsSearchCount}
        totalCount={count}
        checkEntries={checkEntries}
      />

      <Results 
        entries={filteredEntries} 
        state={state}  
        isSearch={isSearch}
        setIsSearch={setIsSearch}
        selectEntries={selectEntries}
      />

      <div style={{ display: "flex", cursor: "pointer", justifyContent: "space-around", borderTop: "1px solid #4c8bf5", padding: "12px"}}>
        <a href="https://github.com/xrp-amaebi/amara" target="_blank" title="xrp-amaebi"><FaGithub color="#4c8bf5"/></a>
        <a href="https://www.linkedin.com/in/amaebi-amara-938975200" target="_blank" title="Amaebi Amara"><FaLinkedin color="#4c8bf5"/></a>
      </div>
    </div>
  );
}

export default App;

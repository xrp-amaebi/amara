import { useRef, useReducer, useState } from 'react';
import { useEntriesContext } from './context/entries.context';
import { Search } from './components/Search';
import { Results } from './components/Results';

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


  function selectEntries(_entries, { text }) {
    const saveCount = _entries.filter(link => link ? link["Category"].toLowerCase().includes(text.toLowerCase()) : 'none');
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

    console.log({ count })
  }

  function onTextChange(){
    if(inputRef.current && inputRef.current.value) {
      setFilter(inputRef.current.value)

      checkEntries()
      return
    }
  }

  return (
    <div className="App">
      <Search 
        onTextChange={onTextChange}
        placeholder={"try to search by category (e.g Animals, Anime, Arts & Design, Security, Authentication)"} 
        inputRef={inputRef} 
        isSearch={isSearch}
        setIsSearch={setIsSearch}
        searchCount={searchCount}
        setIsSearchCount={setIsSearchCount}
        totalCount={count}
      />

      <Results 
        entries={filteredEntries} 
        state={state}  
        isSearch={isSearch}
        setIsSearch={setIsSearch}
        selectEntries={selectEntries}
        // setShow={onSetShow}
      />
        
    </div>
  );
}

export default App;

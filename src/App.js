import { useRef, useReducer, useState } from 'react';
import { useEntriesContext } from './context/entries.context';
import { Search } from './components/Search';
import { Results } from './components/Results';

import './App.css';

function App() {
  const { entries:_entries } = useEntriesContext()
  const { entries: next } = _entries

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


  function onTextChange(){
    if (inputRef.current && inputRef.current.value) {
      setFilter(inputRef.current.value)
   }
  }

  return (
    <div className="App">
      <Search 
        onTextChange={onTextChange}
        placeholder={"try to search by category"} 
        inputRef={inputRef} 
        isSearch={isSearch}
        setIsSearch={setIsSearch}
      />

      <Results 
        entries={next} state={state}  
        isSearch={isSearch}
        setIsSearch={setIsSearch}/>
    </div>
  );
}

export default App;

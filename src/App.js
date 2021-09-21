import { useRef, useReducer } from 'react';
import { useEntriesContext } from './context/entries.context';
import { EntryCard} from './components/EntryCard';
import { Search } from './components/Search';

import './App.css';

function App() {
  const { entries:_entries } = useEntriesContext()
  const { entries: next } = _entries

  const actions = {
    FILTER_TEXT: "SET_FILTER"
  } 

  const initialState = { text: "" }

  function reducer(state, action){
    switch(action.type){
      case actions.FILTER_TEXT: 
        return { text: action.text }
      default:
        throw new Error("what have you done")
      
      }
  }

  function setFilter(target){
    dispatch(target)
  }
  
  const [state, dispatch]  = useReducer(reducer, initialState)

  const inputRef = useRef(null)

  function onTextChange(){
  //   if (inputRef.current && inputRef.current.value) {
  //   return 
  //  }

  //   setFilter(inputRef.current.value)
    console.log({ inputRef: inputRef.current.value })
   
  }

  return (
    <div className="App">
      <Search 
        onTextChange={onTextChange}
        placeholder={"try to search by category"} 
        inputRef={inputRef} 
      />

      <div className={"container"}>
        {
          next.length > 0 && next.map((items, key) => <EntryCard {...items } key={key}/>)
        }
      </div>
    </div>
  );
}

export default App;

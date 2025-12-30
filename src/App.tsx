import { useState } from 'react'
import './App.css'

function App() {

  const [state, setState] = useState({
    incomeQuestion: 'what is your monthly income?',
    response: 0 
  });

  function updateResponse(event:any){
    setState({
      ...state,
      response: event.target.value
    });
  };

  function inputKeyPress(event:any){
   if(event.key=== "Enter") {
    let answer = state.response
    return answer
  };

  return (
    <>
     <div>
      <div>{state.incomeQuestion}</div>
      <input onKeyUp={inputKeyPress} onChange={updateResponse} value={state.response}></input>
      </div>
      </>
  );
}
}
export default App

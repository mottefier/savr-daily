import { useState } from 'react'
import { useEffect} from 'react'
import './App.css'

function App() {
  type PageState = 'question-1' | 'question-2' | 'question-3';

  const [currentState, setCurrentState] = useState<PageState>('question-1');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && currentState === 'question-1') {
        setCurrentState('question-2')
      }
      else if (event.key === 'Enter' && currentState === 'question-2') {
        setCurrentState('question-3');
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  return () => window.removeEventListener('keydown', handleKeyDown);
}, [currentState]);


  return (
    <>
     <div>
      {currentState === 'question-1' && (
        <div className="page">
          <h2>What is your monthly income?</h2>
          <input></input>
          </div>
      )}

      {currentState === 'question-2' && (
        <div className="page">
          <h2>What is your monthly mortgage/rent payment?</h2>
          <input></input>
          </div>
      )}

      {currentState === 'question-3' && (
        <div className="page">
          <h2>How much did you spend today?</h2>
          <input></input>
          </div>
      )}
      </div>
      </>
  );
}
export default App

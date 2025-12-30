import { useState } from 'react'
import { useEffect} from 'react'
import './App.css'

function App() {
  type PageState = 'home' | 'question-1' | 'question-2' | 'question-3' | 'question-4' | 'question-5';

  const [currentState, setCurrentState] = useState<PageState>('question-1');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && currentState === 'question-1') {
        setCurrentState('question-2')
      }
      else if (event.key === 'Enter' && currentState === 'question-2') {
        setCurrentState('question-3');
      }
      else if (event.key === 'Enter' && currentState === 'question-3') {
        setCurrentState('question-4');
      }
      else if (event.key === 'Enter' && currentState === 'question-4') {
        setCurrentState('question-5');
      }


  };

  window.addEventListener('keydown', handleKeyDown);

  return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentState]

  );


  return (
    <>
     <div>
      {currentState === 'question-1' && (
        <div className="page">
          <h2>What is your monthly income?</h2>
          <input placeholder='0'></input>
          </div>
      )}

      {currentState === 'question-2' && (
        <div className="page">
          <h2>What is your monthly mortgage/rent payment?</h2>
          <input placeholder='0'></input>
          </div>
      )}

      {currentState === 'question-3' && (
        <div className="page">
          <h2>What is your monthly entertainment bill(Netflix, Hulu, HBO, etc.)?</h2>
          <input placeholder='0'></input>
          </div>
      )}

      {currentState === 'question-4' && (
        <div className="page">
          <h2>What is your monthly car payment?</h2>
          <input placeholder='0'></input>
          </div>
      )}
      
      {currentState === 'question-5' && (
        <div className="page">
          <h2>Enter any other expenses:</h2>
          <input placeholder='0'></input>
          <h3>category:</h3>
          <input placeholder='dining out, utilities, etc.'></input>
          </div>
      )}

      </div>
      </>
  );
}
export default App

import { useState } from 'react'
import { useEffect} from 'react'
import './App.css'

function App() {
  type PageState = 'home' | 'question-1' | 'question-2' | 'question-3' | 'question-4' | 'question-5';

  const [currentState, setCurrentState] = useState<PageState>('question-5');
  const [inputExpense, setInputExpense] = useState<number>(0);
  const [inputCategory, setInputCategory] = useState<string>("");

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
      else if (event.key === 'Enter' && currentState === 'question-5') {
        //process input before clearing
        console.log(`Submit input for ${currentState}:`, inputExpense);
        setInputExpense(0);
        setInputCategory("");
        setCurrentState('question-5');
      }
  };

  window.addEventListener('keydown', handleKeyDown);

  //cleanup to prevent multiple listeners
  return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inputExpense, inputCategory, currentState]);

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
          <input 
            value={inputExpense}
            onChange={(e) => {
              const val = e.target.value;
              setInputExpense(val === "" ? 0 : Number(val));
            }}
            >
          </input>
          <h3>category:</h3>
          <input 
            placeholder='dining out, utilities, etc.'
            value={inputCategory}
            onChange={(e) => setInputCategory(e.target.value)}
            >
          </input>
          </div>
      )}

      </div>
      </>
  );
}
export default App

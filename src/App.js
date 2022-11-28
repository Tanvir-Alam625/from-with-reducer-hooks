
import { createContext, useReducer } from 'react';
import './App.css';
import Counter from './components/counter/Counter';
import From from './components/From/From';

function App() {
  
  return (     
      <div className="mt-24  overflow-x-hidden">
        {/* <Counter /> */}
        <From />
      </div>
  );
}

export default App;

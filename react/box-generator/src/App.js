import './App.css';
import BoxForm from './components/BoxForm';
import { useState } from 'react';
import BoxList from './components/BoxList';

function App() {
  const [boxes, setBoxes] = useState([]);

  return (
    <div className="App">
      <h1>Welcome To Box Generator</h1>
      <BoxForm boxes={boxes} setBoxes={setBoxes}/>
      <div className='boxList'>
        {boxes.map(( box, index) => ( <BoxList box={box} key={index}/> ))}
      </div>
    </div>
  );
}

export default App;

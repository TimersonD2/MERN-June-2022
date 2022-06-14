import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <Person firstName='Bill' lastName='Smith' age={25} hairColor='Blue'/>
      <Person firstName='Bugs' lastName='Bunny' age={100} hairColor='Grey'/>
      <Person firstName='Lone' lastName='Ranger' age={80} hairColor='Black'/>
      <Person firstName='Ed' lastName='Smith' age={25} hairColor='Green'/>
    </div>
  );
}

export default App;

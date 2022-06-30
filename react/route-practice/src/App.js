import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useParams} from 'react-router-dom'

function App() {

  const HomeRoute = (props) => {
    const {param1} = useParams();
    if (param1 === "home") {
      return (<h1>Welcome</h1>)
    } else if (isNaN(+param1)) {
      return (<h1>The word is: {param1}</h1>)
    } else {
      return (<h1>The number is: {param1}</h1>)
    }
  }

  const HeaderRoute = (props) => {
    const {text, txtColor, bgColor} = useParams();
    return (
      <div style={{color:txtColor, backgroundColor:bgColor}}>
        <h1>The word is: {text}</h1>
      </div>
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/:param1" element={<HomeRoute/>}/>
          <Route path="/:text/:txtColor/:bgColor" element={<HeaderRoute/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

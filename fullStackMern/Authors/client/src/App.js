import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import AuthorList from './components/AuthorList';
import EditAuthor from './components/EditAuthor';
import NewAuthor from './components/NewAuthor';
import Author from './components/Author';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
          <Header />
          <Routes>
            <Route path='/' element={<AuthorList/>}/>
            <Route path='/new' element={<NewAuthor/>}/>
            <Route path='/edit/:id' element={<EditAuthor/>}/>
            <Route path='/author/:id' element={<Author/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

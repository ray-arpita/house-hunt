import { BrowserRouter, Routes , Route } from 'react-router-dom';
import './App.css';
import Layout from './pages/layout/layout';
import Home from './pages/home/home';
import SavedList from './pages/savedList/savedList';

function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
  <Route element={<Layout/>} >
  <Route path='/' element={<Home/>}/>
  <Route path='/saved-items' element={<SavedList/>}/>
  </Route>
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;

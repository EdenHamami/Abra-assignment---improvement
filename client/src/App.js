import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddPet from "./pages/AddPet"
import PetsPage from "./pages/PetsPage"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <TopBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/add' element={<AddPet/>}/>
        <Route path='/pets' element={<PetsPage/>}/>

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

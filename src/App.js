import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App container mx-auto">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
      </Routes>
    </div>
  );
}

export default App;

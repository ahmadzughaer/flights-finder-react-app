import './App.css';
import Flights from './components/Pages/Flights/Flights';
import HomePage from './components/Pages/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Parts/Header/Header.component';
import Param from './components/Pages/FlightDetails/Param';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage/>} />

      <Route path='/flight' element={<Flights />} />
      <Route path='/flight/:id' element={<Param />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

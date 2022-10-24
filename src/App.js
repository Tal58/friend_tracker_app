import './App.css';
import Assets from './assets/assets';
import { Routes, Route } from "react-router-dom";
import Pages from './pages/Pages';

function App() {
  return (
    <div className="App">
   
    <Routes>   
      <Route path="/people/:name" element={<Pages />} />
      <Route path="/" element={<Assets />} />
    </Routes>  
    </div>
  );
}

export default App;

import './App.css';
import Assets from './assets/assets';
import { Routes, Route } from "react-router-dom";
import Pages from './pages/Pages';

function App() {
  return (
    <div className="App">
   
    <Routes>   
      <Route path="friend_tracker_app/:name" element={<Pages />} />
      <Route path="friend_tracker_app/" element={<Assets />} />
    </Routes>  
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Home from './pages/home/Home'
import Hotels from './pages/hotels/Hotels'
import Hotel from './pages/hotel/Hotel'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/hotels" element={<Hotels/>} />
            <Route path="/hotels/:id" element={<Hotel/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

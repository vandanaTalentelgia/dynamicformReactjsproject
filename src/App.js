import './App.css';
import FormBuilder from './formBuilder';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts';
function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
       <Route exact path='/' element={PublicLayout(<FormBuilder />)}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;

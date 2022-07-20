import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Welcome Home!!</h1>} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

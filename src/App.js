import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Users from './components/Users/Users';
import UserDetail from './components/UserDetail/UserDetail';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/users/:userId" element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

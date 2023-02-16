import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
function App() {
  return <Routes>
    <Route path="/" element={<LoginPage/>}/>
    <Route path='/DashBoard' element={<Dashboard/>}/>
  </Routes>
}

export default App;

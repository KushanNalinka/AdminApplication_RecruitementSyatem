import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/InitialPage';
import Form from './Pages/JobCreate';
import JobView from './Pages/JobViewPage'
import './App.css'


function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={< Login/>} />
   <Route path="/home" element={< Home/>} />
   <Route path="/form" element={< Form/>} />
   <Route path="/jobview" element={< JobView/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login'
import Register from './components/Register'
import RequireAuth from './components/RequireAuth';
import AddTask from './components/AddTask';
import MyTask from './components/MyTask';


function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/" element={<RequireAuth>
          <AddTask></AddTask>
        </RequireAuth>}></Route>
        <Route path="/tasks" element={<RequireAuth>
          <MyTask></MyTask>
        </RequireAuth>}></Route>
      </Routes>
    </div>
  );
}

export default App;

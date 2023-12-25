import SmallNavbar from './components/SmallNavbar';
import Navbar from './components/Navbar';  
import './App.css';
import { Outlet } from "react-router-dom";
import Footer from './components/Footer';
function App() {
  return (
    <>
      <div className='App'>
        <div><SmallNavbar/></div>
        <div><Navbar/></div>
        <div><Outlet/></div>
        <div><Footer/></div>
      </div>
    </>
  );
}

export default App;

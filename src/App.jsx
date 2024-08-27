import './App.css'
import MainTODO from './MainTODO/MainTODO'
import Navbar from './NavBar/Navbar'
import Sidebar from './SideBar/SideBar'
function App() {

  return (
    <>
      <div className="Home">
        <Sidebar/>
        <div className="homeContainer">
          <Navbar/> 
          <MainTODO/>
        </div>
      </div>
      
      
      
    </>
  )
}

export default App

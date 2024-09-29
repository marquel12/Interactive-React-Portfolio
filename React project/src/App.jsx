import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Component /Header"
import { Outlet } from "react-router-dom" 
import './App.css' 
import Footer from './Component /Footer'








function App() {


  return (
    <>
      <Header />
      <main className='main' >
        <Outlet /> 

     </main>
    
     <Footer/>
    



   
      
   
    


    </>
  )
}

export default App

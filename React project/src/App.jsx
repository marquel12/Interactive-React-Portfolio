import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Component /Header"
import { Outlet } from "react-router-dom" 
import ShapeExample from "./Component /Project"




function App() {


  return (
    <>
      <Header />
      <main >
        <Outlet /> 
   
      </main>
      
   
    


    </>
  )
}

export default App

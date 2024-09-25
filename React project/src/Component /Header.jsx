import NavBar from "./NavBar"
import './Header.css'



const Header = () => { //this is the header component that will be rendered in the App component

    return (

        <div className='topPage'>
            <h1 class='name'>Joe Brown</h1>
            <NavBar />
        </div>
    )

}


export default Header 
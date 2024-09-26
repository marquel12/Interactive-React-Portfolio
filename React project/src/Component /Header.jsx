import NavBar from "./NavBar"
import './Header.css'



const Header = () => { //this is the header component that will be rendered in the App component

    return (

        <header className='topPage'>
            <h1 class='name'>Marquel Davis </h1>
            <NavBar />
        </header>
    )

}


export default Header 
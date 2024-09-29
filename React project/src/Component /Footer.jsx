import { VscGithub } from "react-icons/vsc";
import './Footer.css'
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {


    return (
        <footer className="footers">
            <div className="logo">
                <a href="https://www.linkedin.com/in/marqueld/">
                    <FaLinkedin size={30} />
                </a>

                <a href="https://github.com/marquel12">
                    <VscGithub size={30} /></a>
            </div>

        </footer>
    )


}


export default Footer;
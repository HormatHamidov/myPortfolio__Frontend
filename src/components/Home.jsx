import AboutMe from "./AboutMe"
import Contact from "./Contact"
import Projects from "./Projects"
import { Link } from 'react-scroll';
import ScrollToTop from "./ScrollToTop";
import ScrollIndicator from "./ScrollIndicator";



const Home = () => {
    return (
        <div>
            <div className="navbar">
                <ul>
                    <li>
                        <Link id='aboutme' to="aboutmeSection" smooth={true} duration={500}>AboutMe</Link>
                    </li>
                    <li>
                        <Link id='projects' to="projectsSection" smooth={true} duration={500}>Projects</Link>
                    </li>
                    <li>
                        <Link id='contact' to="contactSection" smooth={true} duration={500}>ContactMe</Link>
                    </li>
                </ul>
            </div>
            <AboutMe />
            <Contact />
            <Projects />
            <ScrollToTop />
            <ScrollIndicator />

        </div>
    )
}

export default Home
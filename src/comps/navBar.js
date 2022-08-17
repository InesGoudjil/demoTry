import './NavBar.css';
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className='container'>

            <div className='liste'>
                <ul>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contactUs'>ContactUs</Link></li>
                    <li><Link to='/more'>More</Link></li>
                    
                </ul>

            </div>

            <h4>EUISMOD</h4>


            <div className='bigTitle'>
                <h1>Future Perfect</h1>
            </div>

            <hr></hr>

            <div className='para'>
                <p>
                    Morbi quis commodo odio aenean sed. Sit amet consectetur adipiscing elit pellentesque habitant morbi sed et adipiscing.
                </p>

                <button>Learn More ➤</button>
            </div>

        </div>
    )
}

export default NavBar;
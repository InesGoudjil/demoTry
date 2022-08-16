import './NavBar.css';
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <div className='container'>

            <div className='espace'>
            </div>

            <h4>EUISMOD</h4>
            <Link to='/scndPage'>test w khlas</Link>

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
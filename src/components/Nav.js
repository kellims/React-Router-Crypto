import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/crypto-index'>Index for Cryptos</Link>
        </nav>
    )
}

export default Nav;
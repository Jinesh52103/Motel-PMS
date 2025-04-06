import {Link} from 'react-router-dom'
import '../css/NavBar.css';

export default function NavBar(){
    return(
        <nav className='navbar'>
            <h1 className='font-bold text-lg'>Hotel PMS</h1>
            <ul className='ulnav'>
                <li className='linav'><Link to="/home">Dashboard</Link></li>
                <li className='linav'><Link to="/Make-Reservation">Make Reservation</Link></li>
                <li className='linav'><Link to="/walk-in">Walk In</Link></li>
                <li className='linav'><Link to="/Manage-Rate">Manage Rate</Link></li>
                <li className='linav'><Link to="/Rooms">Rooms</Link></li>
                <li className='linav'><Link to="/">Sign Out</Link></li>
            </ul>
        </nav>
    )
}
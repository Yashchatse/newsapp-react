import { Link } from "react-router-dom";

function Navbar(){
    return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    <Link className="navbar-brand" to="/">📰 NewsApp</Link>
        <div className="navbar-nav">
        <Link className="nav-link" to="/">Top Headlines</Link>
        <Link className="nav-link" to="/all">All News</Link>
        <Link className="nav-link" to="/weather">Weather</Link>
        </div>
    </nav>
    )
}
export default Navbar;
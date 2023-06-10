import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext, useAuth } from './security/AuthContext';

function Header(){
    // use AuthContext from security/AuthContext 
    // const authContext = useContext(AuthContext);
    // use the custome hook (useAuth) instead of useContext(AuthContext)
    const authContext = useAuth();
    const isAuthenticated = authContext.isAuthenticated

    // console.log(authContext) //return an Object of [number, isAuthenticated, setAuthenticated]
    // console.log(authContext.number)
    
    // logout when logout button clicked 

    function logout(){
        authContext.setAuthenticated(false)
    }

    return (
        <header className="border-light">
            <div className="container">
                <Link></Link>
                <div className="row">
                    <nav className="navbar navbar-expand-lg">
                        <a className="navbar-brand fw-bold test-black" href="www.lighEast.com">LightEast</a>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    {/* show this link if the only if the user Authenticated */}
                                    {isAuthenticated &&  <Link to="/welcom" className="nav-link">Home</Link>}
                                </li>

                                <li className="nav-item">
                                    {isAuthenticated && <Link to="/todo" className="nav-link">Todo</Link>}
                                </li>
                            </ul>
                        </div>
                        <ul className="navbar-nav">
                            
                            <li className="nav-item">
                                {!isAuthenticated && <Link className="nav-link" to="/login">Login</Link> }   
                            </li>

                             <li className="nav-item">
                                {isAuthenticated && <Link className="nav-link" to="logout" onClick={logout}>Logout</Link>}
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </header>
    )
}
export default Header;
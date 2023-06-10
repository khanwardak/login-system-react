
import {BrowserRouter, Routes, Route, useNavigate, useParams,Link} from 'react-router-dom';
function WelcomeComponents(){
    // get username as value
    const {username} = useParams();
    return <div className="welcomComponent">
        <h2>Wlecom {username}</h2>
        <Link to="/todo">Manage Todo </Link>
    </div>
}
export default WelcomeComponents;
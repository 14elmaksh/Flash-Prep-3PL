import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const onLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/");
    };

    return (
        <header className="top-nav">
            <div className="logo">
                <Link to="/">Flash Prep Logistics</Link>
            </div>
            <ul>
                {user &&
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                }
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/prices">Prices</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                {user ? (
                    <li>
                        <button className="btn" onClick={onLogout}>
                            <FaSignOutAlt /> Logout
                        </button>
                    </li>
                ) : (
                    <>
                        <li>
                            <Link to="/login">
                                <FaSignInAlt /> Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/register">
                                <FaUser /> Register
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </header>
    );
}

export default Header;
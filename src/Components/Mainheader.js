import { Link } from "react-router-dom";
const Mainheader = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/Welcome">Welcome</Link>
                    </li>
                    <li>
                        <Link to="/Products">Products</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Mainheader;
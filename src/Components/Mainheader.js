import { NavLink } from "react-router-dom";
import Classes from "./Mainheader.module.css";
const Mainheader = () => {
    return (
        <header className={Classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={Classes.active} to="/Welcome">Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={Classes.active} to="/Products">Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Mainheader;
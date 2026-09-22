import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="navbar">

            <div className="container navbar-content">

                <Link
                    to="/"
                    className="logo"
                >
                    Calqora
                </Link>


                <nav className="nav-links">

                    <Link to="/">
                        Home
                    </Link>

                    <Link to="/calculators">
                        Calculators
                    </Link>

                    <Link to="/conversions">
                        Conversions
                    </Link>

                    <Link to="/statistics">
                        Statistics
                    </Link>

                    <Link to="/numbers/factorial">
                        Numbers
                    </Link>

                    <Link to="/finance">
                        Finance
                    </Link>

                    <Link to="/currency">
                        Currency
                    </Link>

                    <Link to="/time">
                        Time
                    </Link>

                    <Link to="/export">
                        Export
                    </Link>

                </nav>

            </div>

        </header>
    );
};

export default Navbar;
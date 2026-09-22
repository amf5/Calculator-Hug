import { Link } from "react-router-dom";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        {
            label: "Home",
            path: "/"
        },
        {
            label: "Calculators",
            path: "/calculators"
        },
        {
            label: "Conversions",
            path: "/conversions"
        },
        {
            label: "Statistics",
            path: "/statistics"
        },
        {
            label: "Numbers",
            path: "/numbers/factorial"
        },
        {
            label: "Finance",
            path: "/finance"
        },
        {
            label: "Currency",
            path: "/currency"
        },
        {
            label: "Time",
            path: "/time"
        },
        {
            label: "Export",
            path: "/export"
        }
    ];

    const infoLinks = [
        {
            label: "About",
            path: "/about"
        },
        {
            label: "Contact",
            path: "/contact"
        },
        {
            label: "Privacy Policy",
            path: "/privacy"
        },
        {
            label: "Terms of Use",
            path: "/terms"
        }
    ];

    return (
        <footer className="footer">

            <div className="container">

                <div className="footer-content">

                    {/* Brand */}

                    <div className="footer-brand">

                        <Link
                            to="/"
                            className="footer-logo"
                        >
                            Calqora
                        </Link>

                        <p>
                            Smart tools for everyday
                            calculations, conversions,
                            finance, numbers and more.
                        </p>

                        <span className="footer-tagline">
                            Smart tools for everyday life.
                        </span>

                    </div>


                    {/* Navigation */}

                    <div className="footer-navigation">

                        <h3>
                            Explore Calqora
                        </h3>

                        <nav className="footer-links">

                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                >
                                    {link.label}
                                </Link>
                            ))}

                        </nav>

                    </div>


                    {/* Information */}

                    <div className="footer-navigation">

                        <h3>
                            Information
                        </h3>

                        <nav className="footer-links footer-info-links">

                            {infoLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                >
                                    {link.label}
                                </Link>
                            ))}

                        </nav>

                    </div>

                </div>


                {/* Bottom */}

                <div className="footer-bottom">

                    <p>
                        © {currentYear} Calqora.
                        All rights reserved.
                    </p>

                    <p>
                        Smart tools for everyday life.
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;
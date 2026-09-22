import { Link } from "react-router-dom";

const CalculatorCard = ({
    title,
    description,
    path,
    category
}) => {
    return (
        <Link
            to={path}
            className="calculator-card"
        >
            <span className="card-category">
                {category}
            </span>

            <h3>
                {title}
            </h3>

            <p>
                {description}
            </p>

            <span className="card-link">
                Calculate →
            </span>
        </Link>
    );
};

export default CalculatorCard;